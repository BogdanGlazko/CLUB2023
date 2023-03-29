import {RootState} from "../../../reduxToolkit";

export const getUserDataForProfilePage = (state:RootState) => state.myProfilePage.users
export const getIsFollower = (state:RootState) => state.myProfilePage.users?.isFollower

export const isLoadingUser = (state:RootState)=> state.myProfilePage.loading
export const userID = (state:RootState)=> state.myProfilePage.userID

