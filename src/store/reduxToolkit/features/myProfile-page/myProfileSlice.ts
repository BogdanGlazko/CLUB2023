import {createSlice, PayloadAction} from "@reduxjs/toolkit";

export interface User {
    aboutMe: string | null;
    contacts: { website:string,instagram:string,github:string } | null;
    fullName: string | null;
    lookingForAJob: boolean | null;
    lookingForAJobDescription: string | null;
    photos: { small: string | null; large: string | null };
    userId: number | null;
    isFollower: boolean | null;
    status: string | null;
}

export interface IUserData {
    users: User;
    loading: boolean;
    userID:number|null;
    modalState: { img:string, isOpened: boolean }
}
export const initialState: IUserData = {
    users:{
        aboutMe: null,
        contacts:  null,
        fullName: null,
        lookingForAJob: null,
        lookingForAJobDescription: null,
        photos: { small: null, large: null},
        userId: null,
        isFollower: null,
        status:null
    },
    loading:false,
    userID:null,
    modalState: { img:"", isOpened: true }
}


export const friendsSlice = createSlice({
    name: "usersReducer",
    initialState,
    reducers: {

        setUserOnProfilePage: (state = initialState, action:  PayloadAction<any>) => {
            state.users = action.payload
        },

        setStatusOfFollowing: (state = initialState, action:  PayloadAction<boolean>) => {
            state.users!.isFollower = action.payload
        },
        setUserStatus: (state = initialState, action:  PayloadAction<string>) => {
            state.users!.status = action.payload
        },
        loadingUser:(state:IUserData,action:PayloadAction<boolean>) =>{
            state.loading = action.payload
        },
        setId:(state:IUserData,action:PayloadAction<number>) =>{
            state.userID = action.payload
        },
        changeStateOfModalWindow:(state,action:PayloadAction<any>):void=>{
            console.log(action.payload)
            state.modalState = action.payload
        },

    }
});


export const {
    setUserOnProfilePage,
    setStatusOfFollowing,
    setUserStatus,
    loadingUser,
    setId,
    changeStateOfModalWindow
} = friendsSlice.actions;
export default friendsSlice.reducer;


