import React, {useEffect} from "react";
import s from "./sidebar.module.sass"
import {useSelector} from "react-redux";
import {getUserDataForSidebar} from "store/reduxToolkit/features/sidebar-page/sidebarSelectors";
import Avatar from "@mui/material/Avatar";
import {getDefaultAvatar} from "util/stringAvatar";
import {useTypeDispatch} from "hooks/useTypeDispatch";
import {getInfoForSidebar} from "store/reduxToolkit/features/sidebar-page/sidebarThunks";
import {getUserData} from "store/reduxToolkit/features/app/appSelectors";
import {getUserForMyProfile} from "../../../store/reduxToolkit/features/myProfile-page/myProfileThunks";

const UserInfo = () => {
    const userData = useSelector(getUserData)
    const dispatch=useTypeDispatch()
    const userDataForSidebar = useSelector(getUserDataForSidebar)
    console.log(userDataForSidebar)

    useEffect(()=>{
        if (userData?.id && (userDataForSidebar?.fullName==="")){
            if (userDataForSidebar){
                dispatch(getInfoForSidebar(userData!.id))
            }
        }
    },[userData])


    return (
        !userDataForSidebar ? <div>SERRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRR</div> :
        <>
            <div className={s.photoWrapper}>
                {
                    (userDataForSidebar?.fullName === "") ?
                        <img src="http://demo.foxthemes.net/instellohtml/assets/images/post/img3.jpg"
                             alt="userPhoto"/> :
                        (userDataForSidebar.photos.small === undefined) ?

                            <Avatar {...getDefaultAvatar(userDataForSidebar!.fullName, 100, 100, 2.5)}/> :
                            <img src={userDataForSidebar?.photos.small as string | undefined}
                                 alt="avatar"/>
                }
            </div>
            <div className={s.name}>
                {userDataForSidebar ? userDataForSidebar!.fullName : "null"}
            </div>
            <br/>
        </>

    );
}
export default UserInfo;
