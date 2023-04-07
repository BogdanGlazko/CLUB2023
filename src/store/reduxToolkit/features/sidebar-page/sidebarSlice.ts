import {createSlice, PayloadAction} from "@reduxjs/toolkit";

interface ISidebarState {
    userDataSidebar:
        {id: null|number,
        login: null|string,
        email:null|string,
        photos:{small: undefined | string | null, large: undefined | string | null},
        fullName:string
        }
}

const initialState: ISidebarState = {
    userDataSidebar: {
        id: null,
        login: null,
        email:null,
        photos:{small:"",large:""},
        fullName:""
    }
}

export const sidebarSlice = createSlice({
    name: "sidebarReducer",
    initialState,
    reducers: {
        setUserDataSidebarPhotos: (state: ISidebarState, action:PayloadAction<any>) => {
            state.userDataSidebar.photos = action.payload.photos
        },
        setUserDataSidebarPhotosAfterChange: (state: ISidebarState, action:PayloadAction<any>) => {
            state.userDataSidebar.photos = action.payload
        },
        setUserDataSidebarName: (state: ISidebarState, action:PayloadAction<any>) => {
            state.userDataSidebar.fullName = action.payload.fullName
        }
    }
})


export const {
    setUserDataSidebarPhotos,
    setUserDataSidebarName,
    setUserDataSidebarPhotosAfterChange
} = sidebarSlice.actions
export default sidebarSlice.reducer