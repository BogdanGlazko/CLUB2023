import Login from "../layouts/loginLogout/Login";
import {IRouterConfig} from "../../interfaces/appInterfaces/appInterfaces";


export const routerConfigApp: IRouterConfig[] = [
    {
        path: "/login",
        element: <Login/>,
        onlyForUnauthorized: true
    }
]