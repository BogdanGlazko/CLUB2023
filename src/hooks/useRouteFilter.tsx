import { useSelector } from "react-redux";
import { useMemo } from "react";
import { getStateOfLogin } from "../store/reduxToolkit/features/app/appSelectors";
import { Navigate } from "react-router-dom";

export const useRouteFilter = (item: any) => {
    const isLoggedUser = useSelector(getStateOfLogin);

    return useMemo(() => {

        if (isLoggedUser && item.onlyForUnauthorized) {
            console.log("tuta")
            return (
                {
                    ...item,
                    element: <Navigate to="/login" />
                }
            )

        }



        return item;


        // if (isLoggedUser && !item.onlyForUnauthorized) {
        //     console.log("zdesia")
        //     return [item];
        // } else {
        //     console.log("aga")
        //     return [
        //         {
        //             ...item,
        //             element: <Navigate to="/login" />
        //         }
        //     ];
        // }
    }, [isLoggedUser, item]);
};
