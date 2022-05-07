import {
	MainMenuTreeState,
	MenuSDK,
	TreeModels,
	TriggerKeyBindChat,
} from "../menu"

MainMenuTreeState.OnValue(toggle => SetTreeModel(...TreeModels[toggle.selected_id]))

TriggerKeyBindChat.OnValue(toggle => MenuSDK.Base.trigger_on_chat = toggle.value)
