import { EventsSDK } from "wrapper/Imports"
import MainData, { CSODOTALobby_State } from "../data"

EventsSDK.on("SharedObjectChanged", (id, _, obj) => {
	if (id !== 2004)
		return
	if (obj.get("state") === CSODOTALobby_State.READYUP && MainData.AutoAcceptTimeCreate === -1)
		MainData.AutoAcceptTimeCreate = hrtime()
	else if (obj.get("state") !== CSODOTALobby_State.READYUP && MainData.AutoAcceptTimeCreate !== -1)
		MainData.AutoAcceptTimeCreate = -1
})
