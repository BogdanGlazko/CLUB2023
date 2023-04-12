import {IRouterConfig} from "../../interfaces/appInterfaces/appInterfaces";
import MyProfile from "../layouts/content/myProfile/MyProfile";
import Messages from "../layouts/content/messages/Messages";
import Feed from "../layouts/content/feed/Feed";
import Friends from "../layouts/content/friends/Friends";
import Chat from "../layouts/content/chat/Chat";
import Marketplace from "../layouts/content/marketplace/Marketplace";
import Settings from "../layouts/content/settings/Settings";
import React from "react";
import Login from "../layouts/loginLogout/Login";


export const routerConfigContent: IRouterConfig[] = [
    {
        path: "/profile",
        element: <MyProfile/>,
        onlyForUnauthorized: false
    },
    {
        path: "/messages",
        element: <Messages/>,
        onlyForUnauthorized: false
    },
    {
        path: "/feed",
        element: <Feed/>,
        onlyForUnauthorized: false
    },
    {
        path: "/friends",
        element: <Friends/>,
        onlyForUnauthorized: false
    },
    {
        path: "/chat",
        element: <Chat/>,
        onlyForUnauthorized: false
    },
    {
        path: "/marketplace",
        element: <Marketplace/>,
        onlyForUnauthorized: false
    },
    {
        path: "/settings",
        element: <Settings/>,
        onlyForUnauthorized: false
    },
    {
        path: "/login",
        element: <Login/>,
        onlyForUnauthorized: false
    }
]
