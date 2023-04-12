import {ReactNode} from "react";

export interface IAppInitialState {
    isLoggedUser: boolean
    loading: boolean
    errorDiv:   false
    captchaStatus:boolean
    captchaInput:boolean
    captchaImage:string|undefined
    userData:null|{id: number, login: string, email:string}
}


export interface IRouterConfig {
    path: string,
    element: JSX.Element,
    onlyForUnauthorized?: boolean,

}
