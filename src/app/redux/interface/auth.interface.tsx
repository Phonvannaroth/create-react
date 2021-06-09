export interface IPayloadLoginWithEmailPassword {
    email: string,
    password: string,
    navigate: any
}

export interface IActionLoginWithEmailPassword {
    type: any,
    payload: IPayloadLoginWithEmailPassword,

}
export interface PayloadCanActive {
    navigate: any,
}
export interface ActionCanActive {
    type: any,
    payload: PayloadCanActive,
}
export interface PayloadSigOut {
    navigate: any,
}
export interface ActionSignOut {
    type: any,
    payload: PayloadSigOut,
}