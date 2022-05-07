import { EventsSDK } from "wrapper/Imports"
import { UpdateAutoAccept, UpdateVisuals } from "../Function"

EventsSDK.on("Draw", () => {
	UpdateVisuals()
	UpdateAutoAccept()
})
