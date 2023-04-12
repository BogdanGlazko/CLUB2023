import React, {useEffect} from "react";
import s from "./content.module.sass"
import Messages from "./messages/Messages";
import Friends from "./friends/Friends";
import Feed from "./feed/Feed";
import {Navigate, Route, Routes, useLocation} from "react-router-dom";
import MyProfile from "./myProfile/MyProfile";
import {useSelector} from "react-redux";
import Loader from "../../shared/additionalComponents/Loader";
import Chat from "./chat/Chat";
import {IAppInitialState} from "interfaces/appInterfaces/appInterfaces";
import Settings from "./settings/Settings";
import ScrollButton from "../../shared/additionalComponents/ScrollUp";
import Marketplace from "./marketplace/Marketplace";
import {routerConfigContent} from "../../routes/RoutesContent";
import {useRouteFilter} from "../../../hooks/useRouteFilter";


function Content() {
    const isLoading = useSelector((state: IAppInitialState) => state.loading)
    const location = useLocation();
    const route: typeof routerConfigContent = useRouteFilter(routerConfigContent)
    return (
        isLoading ?
            <div className={s.loader}><Loader/></div> :
            <div className={s.contentWrapper}>
                <div id="content" className={s.content}>
                    <div id="scroll"></div>
                    <ScrollButton/>
                    <Routes location={location}>
                        <Route
                            path="login"
                            element={ <Navigate replace to="/profile"/> }/>
                        {route.map((routeState:any) => (
                                <Route
                                    key={routeState.path}
                                    path={routeState.path}
                                    element={routeState.element}
                                />
                            )
                        )}
                    </Routes>
                </div>
            </div>
    );
}

export default Content;
