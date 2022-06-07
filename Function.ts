import { ExecuteOrder, GameState, LocalPlayer, Menu, Team } from "wrapper/Imports"
import MainData from "./data"
import { AutoAcceptDelayState, CamAngles, CamDist, CamInverseDire, FowConvars, MainWeatherState } from "./menu"

const SettingsTree = Menu.AddEntry("Settings")
const OBSBypass = SettingsTree.AddToggle(
	"OBS Bypass (beta)",
	false,
	`\
Disables camera zoom, scripts' orders [humanizer] and FoW Hacks.
For this to work properly use latest version of OBS,
use Game Capture, disable capturing third-party overlays
and restart game after turning OBS Bypass on.`,
)
const HumanizerState = SettingsTree.AddToggle(
	"Humanizer",
	true,
	"Enables all scripts' orders, ability to change camera distance",
)

OBSBypass.OnValue(toggle => {
	GameState.OBSBypassEnabled = toggle.value
	ExecuteOrder.disable_humanizer = toggle.value || !HumanizerState.value
})
HumanizerState.OnValue(toggle => ExecuteOrder.disable_humanizer = !toggle.value || OBSBypass.value)

export function UpdateVisuals() {
	const camera_hacks = !ExecuteOrder.disable_humanizer && ExecuteOrder.received_usercmd_request
	if (camera_hacks) {
		CamAngles.Vector.toIOBuffer()
		if (CamInverseDire.value && LocalPlayer?.Team === Team.Dire)
			IOBuffer[1] -= 180
	} else {
		IOBuffer[0] = 60
		IOBuffer[1] = 0
	}
	IOBuffer[2] = 0
	Camera.Angles = true
	const fow_hacks = FowConvars.value && !OBSBypass.value
	Camera.Distance = camera_hacks ? CamDist.value : -1
	ConVars.Set("fog_override", 0)
	ConVars.Set("fow_client_visibility", 0)
	ConVars.Set("r_farz", camera_hacks ? CamDist.value * 10 : -1)
	ConVars.Set("fog_enable", !fow_hacks)
	ConVars.Set("dota_use_particle_fow", !fow_hacks)
	ConVars.Set("cl_weather", !OBSBypass.value ? MainWeatherState.selected_id : -1)
}

export function UpdateAutoAccept() {
	if (MainData.AutoAcceptTimeCreate === -1)
		return

	const elepsedTime = (hrtime() - MainData.AutoAcceptTimeCreate) / 1000

	if (elepsedTime > AutoAcceptDelayState.max) {
		MainData.AutoAcceptTimeCreate = -1
		return
	}

	if (AutoAcceptDelayState.value - elepsedTime > 0)
		return

	AcceptMatch()
	MainData.AutoAcceptTimeCreate = -1
}
