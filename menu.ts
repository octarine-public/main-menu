import { Menu as MenuSDK, Vector2 } from "wrapper/Imports"
const weather = [
	"Default",
	"Snow",
	"Rain",
	"Moonbeam",
	"Pestilence",
	"Harvest",
	"Sirocco",
	"Spring",
	"Ash",
	"Aurora",
]

const TreeModelName = [
	"Default",
	"Crystal",
	"Pumpkins #1",
	"Pumpkins #2",
	"Pumpkins #3",
	"Pumpkin Buckets",
	"Stumps",
	"Frostivus",
]

export const TreeModels: [string, number][] = [
	["", 1],
	["models/props_structures/crystal003_refract.vmdl", 1],
	["models/props_structures/pumpkin001.vmdl", 1.08],
	["models/props_structures/pumpkin003.vmdl", 3],
	["models/props_diretide/pumpkin_head.vmdl", 3],
	["models/props_gameplay/pumpkin_bucket.vmdl", 1],
	["maps/journey_assets/props/trees/journey_armandpine/journey_armandpine_02_stump.vmdl", 4.5],
	["models/props_tree/frostivus_tree.vmdl", 0.85],
]

export const MainTree = MenuSDK.AddEntry("Main")
export const AutoAcceptDelayState = MainTree.AddSlider("AutoAccept delay", 3, 0, 28, 0, "Delay on auto accept,\nyou can disable it by setting slider to max value")
export const FowConvars = MainTree.AddToggle("FoW hacks", true,
	"Such as seeing TPs in the world, having no fog, etc",
)
export const TriggerKeyBindChat = MainTree.AddToggle("Trigger keybinds in chat", false)

/** Node Camera */
const CameraTree = MainTree.AddNode("Camera")
export const CamDist = CameraTree.AddSlider("Camera Distance", 1300, 1200, 5000)
export const CamAngles = CameraTree.AddVector2(
	"Camera Angles",
	new Vector2(60, 0),
	new Vector2(1, 0),
	new Vector2(180, 360),
)
export const CamInverseDire = CamAngles.node.AddToggle("Inverse for Dire", false)
export const CamMouseTree = CameraTree.AddNode("Mouse wheel")
export const CamMouseState = CamMouseTree.AddToggle("State")
export const CamMouseStateCtrl = CamMouseTree.AddToggle("Change if Ctrl is down")
export const CamStep = CamMouseTree.AddSlider("Camera Step", 50, 10, 1000)

CameraTree.AddButton("Reset", "Reset settings").OnValue(() => {
	CamStep.value = 50
	CamDist.value = 1300
	CamAngles.X.value = 60
	CamAngles.Y.value = 0
	CamMouseState.value = false
	CamInverseDire.value = false
	CamMouseStateCtrl.value = false
})

/** Node Changer */
const ChangerTree = MainTree.AddNode("Changer")
export const MainWeatherState = ChangerTree.AddDropdown("Weather", weather, 0)
export const MainMenuTreeState = ChangerTree.AddDropdown("Tree Model", TreeModelName)

ChangerTree.AddButton("Reset", "Reset settings").OnValue(() => {
	MainWeatherState.selected_id = 0
	MainMenuTreeState.selected_id = 0
	SetTreeModel(...TreeModels[MainMenuTreeState.selected_id])
})

export { MenuSDK }
