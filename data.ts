
export enum CSODOTALobby_State {
	UI = 0,
	READYUP = 4,
	SERVERSETUP = 1,
	RUN = 2,
	POSTGAME = 3,
	NOTREADY = 5,
	SERVERASSIGN = 6,
}

export interface CDOTALobbyMember {
	id: bigint
	name: string
}

export interface CSODOTALobby {
	state: CSODOTALobby_State
	members: CDOTALobbyMember[]
}

export default new (class MainData {
	public AutoAcceptTimeCreate = -1
})()
