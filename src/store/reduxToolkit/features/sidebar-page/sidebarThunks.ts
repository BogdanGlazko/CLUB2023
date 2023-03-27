import {AppDispatch} from "../../../reduxToolkit";
import {UsersRequestAxios} from "dataAccessLayer/usersRequestAxios";
import {setUserDataSidebarName, setUserDataSidebarPhotos} from "./sidebarSlice";

export const getInfoForSidebar = (id:number) => async (dispatch: AppDispatch) => {
    try {
        const response = await UsersRequestAxios.getUserForMyProfile(id)
        dispatch(setUserDataSidebarPhotos(response))
        dispatch(setUserDataSidebarName(response))
    }catch (error){
        console.log(error)
    }
}

