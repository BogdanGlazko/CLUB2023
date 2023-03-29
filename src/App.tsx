import s from './App.module.sass';
import { Navigate, Route, Routes, useNavigate } from "react-router-dom";
import Content from "./components/layouts/content/Content";
import Sidebar from "./components/layouts/sidebar/Sidebar";
import Login from "./components/layouts/loginLogout/Login";
import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import Loader from "./components/shared/additionalComponents/Loader";
import Header from "./components/layouts/header/Header";
import { isLoggedUser } from "./store/reduxToolkit/features/app/appThunk";
import { useTypeDispatch } from "./hooks/useTypeDispatch";
import {RootState} from "./store/reduxToolkit";
import {getLoading, getStateOfLogin} from "./store/reduxToolkit/features/app/appSelectors";


const App: React.FC = () => {
    const dispatch = useTypeDispatch();
    const loading = useSelector(getLoading)
    const isUserLogged = useSelector(getStateOfLogin)

    useEffect(() => {
        // // renavigate to page where user has been before
        // navigate(JSON.parse(window.sessionStorage.getItem('lastRoute') || '{}'));
        // window.onbeforeunload = () => {
        //     window.sessionStorage.setItem('lastRoute', JSON.stringify(window.location.pathname));
        // };

        dispatch(isLoggedUser());
    }, []);

    return (
        loading ? (
            <div className={s.loader}>
                <Loader />
            </div>
        ) : (
            <>
                {isUserLogged === false ? (
                    <div className={s.appWrapper}>
                        <Routes>
                            <Route path="/login" element={<Login />} />
                            <Route path="*" element={<Navigate to="/login" />} />
                        </Routes>
                    </div>
                ) : (
                    <div className={s.app}>
                        <Header />
                        <Sidebar />
                        <Content />
                    </div>
                )}
            </>
        )
    );
};

export default App;
