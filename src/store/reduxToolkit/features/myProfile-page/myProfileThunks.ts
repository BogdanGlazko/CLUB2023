import {AppDispatch} from "../../../reduxToolkit";
import {UsersRequestAxios} from "dataAccessLayer/usersRequestAxios";
import {loadingUser, setId, setStatusOfFollowing, setUserOnProfilePage, setUserStatus} from "./myProfileSlice";
import {changeIsLoginUser, loading, setUserData} from "../app/appSlice";
import {LoginRequestAxios} from "../../../../dataAccessLayer/loginLogoutRequestAxios";

export const getUserForMyProfile = (id:number|null)=> async (dispatch:AppDispatch)=>{
    try {
        if (id===null){
            return console.log(":((((")
        }
         dispatch(loadingUser(true))
        console.log("postavil true")
        const response = await UsersRequestAxios.getUserForMyProfile(id)
         dispatch(setUserOnProfilePage(response))
        const responseFollower = await UsersRequestAxios.isfollowerUser(id)
         dispatch(setStatusOfFollowing(responseFollower))
        const responseStatus = await UsersRequestAxios.statusOfUser(id)
         dispatch(setUserStatus(responseStatus))
         dispatch(loadingUser(false))
    } catch (error){
        console.log(error)
    }
}

export const unFollowUser = (id: number) => async (dispatch: AppDispatch) => {
    try {
        console.log(id)
        const response = await UsersRequestAxios.unFollowUser(id)
        console.log(response)
         dispatch(setStatusOfFollowing(false))
    }catch (error){
        console.log("ошибочка!" + error)
    }
}


export const followUser = (id: number) => async (dispatch: AppDispatch) => {
    try {
        console.log(id)
        const response = await UsersRequestAxios.followUser(id)
        console.log(response)
        dispatch(setStatusOfFollowing(true))
    }catch (error){
        console.log("ошибочка!" + error)
    }

}



export const checkAndSetUser = () => async (dispatch: AppDispatch) => {
    try {
        dispatch(loading(true))
        const response = await LoginRequestAxios.ifUserLoggined()
        if (response.data.resultCode === 0) {
            dispatch(setId(response.data.data!.userId))
            dispatch(loading(false))
        } else {
            dispatch(loading(false))
        }
    }catch (error){
        console.log(error)
    }
}

