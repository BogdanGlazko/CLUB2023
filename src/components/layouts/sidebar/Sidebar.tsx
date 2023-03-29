import React from "react";
import s from "./sidebar.module.sass"
import {NavLink} from "react-router-dom";
import UserInfo from "./UserInfo";
import {logoutUser} from "store/reduxToolkit/features/app/appThunk";
import {useDispatch} from "react-redux";
import {AppDispatch} from "store/reduxToolkit";
import ProfileSVG from "../../../assets/svg components/profileSVG";
import FriendsSVG from "../../../assets/svg components/friendsSVG";
import MessagesSVG from "../../../assets/svg components/messagesSVG";
import ChatSVG from "../../../assets/svg components/chatSVG";
import MarketPlaceSVG from "../../../assets/svg components/marketPlaceSVG";
import FeedSVG from "../../../assets/svg components/feedSVG";
import SettingsSVG from "../../../assets/svg components/settingsSVG";
import LogoutSVG from "../../../assets/svg components/logOutSVG";

const Sidebar = () => {

    const dispatch = useDispatch<AppDispatch>()

    return (
        <div className={s.sidebarWrapper}>
            <main className={s.container}>
              <div className={s.photoWrapperContainer}>
                  <UserInfo/>
              </div>
                <div className={s.infoAboutFollowers}>
                    <div className={s.wrapperInfoAboutFollowers}>
                        <div>Posts <br/> <span>21</span></div>
                        <div>Following <br/> <span>50</span></div>
                        <div>Followers <br/> <span>60</span></div>
                    </div>
                </div>

                <div className={s.navLinkContent}>
                    <NavLink
                        to="/profile"
                        className={({isActive}) => (isActive ? s.active : s.inactive)}>
                        <ProfileSVG/>
                        <div className={s.linkName}>Profile</div>
                    </NavLink>
                    <NavLink
                        to="friends"
                        className={({isActive}) => (isActive ? s.active : s.inactive)}
                    >
                        <FriendsSVG/>
                        <div className={s.linkName}>Friends</div>
                    </NavLink>
                    <NavLink
                        to="messages"
                        className={({isActive}) => (isActive ? s.active : s.inactive)}>
                        <MessagesSVG/>
                        <div className={s.linkName}>Messages</div>
                    </NavLink>
                    <NavLink
                        to="chat"
                        className={({isActive}) => (isActive ? s.active : s.inactive)}>
                        <ChatSVG/>
                        <div className={s.linkName}>Public Chat</div>
                    </NavLink>
                    <NavLink
                        to="marketplace"
                        className={({isActive}) => (isActive ? s.active : s.inactive)}>
                        <MarketPlaceSVG/>
                        <div className={s.linkName}>Shop</div>
                    </NavLink>
                    {/*<NavLink*/}
                    {/*    to="feed"*/}
                    {/*    className={({isActive}) => (isActive ? s.active : s.inactive)}*/}
                    {/*>*/}
                    {/*    <FeedSVG/>*/}
                    {/*    Feed*/}
                    {/*</NavLink>*/}

                    <NavLink
                        to="settings"
                        className={({isActive}) => (isActive ? s.active : s.inactive)}
                    >
                        <SettingsSVG/>
                        <div className={s.linkName}>Settings</div>
                    </NavLink>
                    <div className={s.logout}>
                        <NavLink
                            to="logout"
                            onClick={() => dispatch(logoutUser())}
                            className={({isActive}) => (isActive ? s.active : s.inactive)}>
                            <LogoutSVG/>
                            <div className={s.linkName}>Logout</div>
                        </NavLink>
                    </div>

                </div>
            </main>
        </div>

    );
}
export default Sidebar;
