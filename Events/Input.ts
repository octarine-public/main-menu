import { DOTAGameUIState_t, GameRules, GameState, Input, InputEventSDK, VKeys } from "wrapper/Imports"
import { CamDist, CamMouseState, CamMouseStateCtrl, CamStep, MenuSDK } from "../menu"

InputEventSDK.on("MouseWheel", up => {
	if (!CamMouseState.value || !GameRules?.IsInGame
		|| GameState.UIState !== DOTAGameUIState_t.DOTA_GAME_UI_DOTA_INGAME)
		return

	if (CamMouseStateCtrl.value && !Input.IsKeyDown(VKeys.CONTROL))
		return

	let camDist = CamDist.value

	if (up)
		camDist -= CamStep.value
	else
		camDist += CamStep.value

	CamDist.value = Math.min(Math.max(camDist, CamDist.min), CamDist.max)

	MenuSDK.Base.SaveConfigASAP = true
	return false
})
