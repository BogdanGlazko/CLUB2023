import {useSelector} from "react-redux";
import {useMemo} from "react";
import {getStateOfLogin} from "../store/reduxToolkit/features/app/appSelectors";
import {Navigate} from "react-router-dom";

export const useRouteFilter = (item: any) => {
    const isLoggedUser = useSelector(getStateOfLogin);

    return useMemo(() => {
        const mapped = item.map((item: any) => {

            if (isLoggedUser && !item.onlyForUnauthorized) {
                console.log("pow")
                return (
                    {
                        ...item,
                        element: <Navigate to="/login"/>
                    }
                )
            }
        })

        return item;

    }, [isLoggedUser, item]);
};
