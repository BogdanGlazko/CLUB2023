import React, {useEffect} from "react";
import s from "./myProfile.module.sass"
import Button from '@mui/material/Button';
import ViewCompactIcon from '@mui/icons-material/ViewCompact';
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import {NavLink, useLocation} from "react-router-dom";
import {useTypeDispatch} from "hooks/useTypeDispatch";
import {useSelector} from "react-redux";
import {
    getIsFollower,
    getUserDataForProfilePage,
    isLoadingUser
} from "store/reduxToolkit/features/myProfile-page/myProfileSelectors";
import {getUserData} from "store/reduxToolkit/features/app/appSelectors";
import {
    followUser,
    getUserForMyProfile,
    unFollowUser
} from "store/reduxToolkit/features/myProfile-page/myProfileThunks";
import {getDefaultAvatar} from "util/stringAvatar";
import Avatar from "@mui/material/Avatar";
import Loader from "../../../shared/additionalComponents/Loader";
// images
import image1 from "assets/images/avatar-1.jpg"
import image2 from "assets/images/img3.jpg"
import image3 from "assets/images/avatar-6.jpg"
import image4 from "assets/images/img2.jpg"
import image5 from "assets/images/img4.jpg"
import image6 from "assets/images/img5.jpg"
import image7 from "assets/images/img7.jpg"
import image8 from "assets/images/img8.jpg"
import image9 from "assets/images/avatar-lg-1.jpg"
import MyProfileModal from "./MyProfileModal";
import {changeStateOfModalWindow} from "../../../../store/reduxToolkit/features/myProfile-page/myProfileSlice";
import LikeSVG from "../../../../assets/svg components/myProfilePage/likeSVG";
import CommentSVG from "../../../../assets/svg components/myProfilePage/commentSVG";
import ScrollButton from "../../../shared/additionalComponents/ScrollUp";
import MyProfileExploreModal from "./MyProfileExploreModal";

function MyProfile() {
    const dispatch = useTypeDispatch()
    const isLoadedUser = useSelector(isLoadingUser)
    const {state} = useLocation();
    const dataAboutUser = useSelector(getUserDataForProfilePage)
    const isFollowerUser = useSelector(getIsFollower)
    const infoAboutLoggedUser = useSelector(getUserData)
    const topPosition = document.querySelector("#scroll");
    const scrollUp=()=>{
        topPosition!.scrollIntoView({ behavior:"smooth" });
    }

    useEffect(() => {
        if (state) {
            dispatch(getUserForMyProfile(state.id))
        } else {
            if (infoAboutLoggedUser) {
                console.log(infoAboutLoggedUser.id)
                dispatch(getUserForMyProfile(infoAboutLoggedUser.id))
            }
        }
    }, [state])

    useEffect(() => {
        const element = document.getElementById('scroll');
        console.log(element)
        if (element) {
            element.scrollIntoView({behavior: "auto"});
        }
    }, []);

    const handleClick = dispatch(changeStateOfModalWindow(true))
    return (
        (dataAboutUser.fullName === null) ? <Loader/> :

            <div id={"userMainInfoWrapper"}>
                <div className={s.userMainInfo} id={"userMainInfo"}>
                    <div className={s.userMainInfoContainer}>
                        <div className={s.circleAvatar}>
                            {(dataAboutUser?.photos.large === null) ?
                                (!dataAboutUser.fullName ? <div></div> :
                                    <Avatar {...getDefaultAvatar(dataAboutUser.fullName, 224, 224, 2.5)}/>)
                                :
                                <img src={dataAboutUser?.photos.large} alt="userPhoto"/>
                            }
                        </div>
                        <div className={s.userInfo}>
                            <div className={s.nameOfUser}>
                                {!dataAboutUser?.fullName ? "without name" : dataAboutUser?.fullName}
                            </div>
                            <div className={s.aboutUser}>
                                {!dataAboutUser?.status ?
                                    "I'am without status:(" :
                                    dataAboutUser?.status
                                }
                            </div>
                            <div className={s.aboutUser}>
                                Nam liber tempor cum soluta nobis eleifend option congue nihil imperdiet
                                doming id quod mazim placerat facer possim assum
                            </div>

                            <div className={s.buttons}>
                                <>
                                    {state === null ?
                                        <NavLink to={"/friends"}>
                                            <Button
                                                variant="contained"
                                                color={"secondary"}
                                                sx={{marginRight: "25px",}}
                                            > Add Friends
                                            </Button>
                                        </NavLink> :

                                        isFollowerUser ?
                                            <Button
                                                sx={{marginRight: "25px",}}
                                                onClick={() => dispatch(unFollowUser(state.id))}> Unfollow </Button>
                                            : <Button
                                                className={s.buttonMargin}
                                                sx={{marginRight: "25px",}}
                                                variant="contained"
                                                onClick={() => dispatch(followUser(state.id))}>Follow</Button>
                                    }
                                </>
                                <NavLink to={"/messages"}>
                                    <Button
                                        className={s.buttonMessage}
                                        variant="contained"
                                        color={"success"}> Send Message
                                    </Button>
                                </NavLink>
                            </div>
                            <div className={s.infoAboutFollowers}>
                                <div>120k <span>posts</span></div>
                                <div>420k <span>followers</span></div>
                                <div> 530k <span>followers</span></div>
                            </div>
                        </div>
                    </div>
                    <br/><br/>
                    <div className={`${s.recent} ${s.boldHeader}`}>
                        <div>Recent Photos</div>
                        <MyProfileModal/>
                        <MyProfileExploreModal/>
                        {/*<div className={`${s.explore} ${s.boldHeader}`}>*/}
                        {/*    <div className={s.exploreWrapperButtons}>*/}
                        {/*        <div>Explore</div>*/}
                        {/*        <div className={s.exploreLine}></div>*/}
                        {/*        <div className={s.buttonsChangeLayout}>*/}
                        {/*            <div>*/}
                        {/*                <FormatListBulletedIcon/>*/}
                        {/*                <span className={s.tooltipText}>Grid View</span>*/}
                        {/*            </div>*/}
                        {/*            <div>*/}
                        {/*                <ViewCompactIcon/>*/}
                        {/*                <span className={s.tooltipText}>List View</span>*/}
                        {/*            </div>*/}
                        {/*        </div>*/}
                        {/*    </div>*/}
                        {/*    <div>*/}
                        {/*        <div className={s.imagesExplore}>*/}
                        {/*            <div className={s.imagesExploreElement}>*/}
                        {/*                <img src={image4}*/}
                        {/*                     alt=""/>*/}
                        {/*                <div className={s.likesComments}>*/}
                        {/*                    <div className={s.like}>*/}
                        {/*                        <LikeSVG/>*/}
                        {/*                    </div>*/}
                        {/*                    <div className={s.comment}>*/}
                        {/*                        <CommentSVG/>*/}
                        {/*                    </div>*/}
                        {/*                </div>*/}
                        {/*            </div>*/}
                        {/*            <div className={s.imagesExploreElement}>*/}
                        {/*                <img src={image5}*/}
                        {/*                     alt=""/>*/}
                        {/*                <div className={s.likesComments}>*/}
                        {/*                    <div className={s.like}>*/}
                        {/*                        <LikeSVG/>*/}
                        {/*                    </div>*/}
                        {/*                    <div className={s.comment}>*/}
                        {/*                        <CommentSVG/>*/}
                        {/*                    </div>*/}
                        {/*                </div>*/}
                        {/*            </div>*/}
                        {/*            <div className={s.imagesExploreElement}>*/}
                        {/*                <img src={image6}*/}
                        {/*                     alt=""/>*/}
                        {/*                <div className={s.likesComments}>*/}
                        {/*                    <div className={s.like}>*/}
                        {/*                        <LikeSVG/>*/}
                        {/*                    </div>*/}
                        {/*                    <div className={s.comment}>*/}
                        {/*                        <CommentSVG/>*/}
                        {/*                    </div>*/}
                        {/*                </div>*/}
                        {/*            </div>*/}
                        {/*            <div className={s.imagesExploreElement}>*/}
                        {/*                <img src={image8}*/}
                        {/*                     alt=""/>*/}
                        {/*                <div className={s.likesComments}>*/}
                        {/*                    <div className={s.like}>*/}
                        {/*                        <LikeSVG/>*/}
                        {/*                    </div>*/}
                        {/*                    <div className={s.comment}>*/}
                        {/*                        <CommentSVG/>*/}
                        {/*                    </div>*/}
                        {/*                </div>*/}
                        {/*            </div>*/}
                        {/*            <div className={s.imagesExploreElement}>*/}
                        {/*                <img*/}
                        {/*                    src={image7}*/}
                        {/*                    alt=""/>*/}

                        {/*                <div className={s.likesComments}>*/}
                        {/*                    <div className={s.like}>*/}
                        {/*                        <LikeSVG/>*/}
                        {/*                    </div>*/}
                        {/*                    <div className={s.comment}>*/}
                        {/*                        <CommentSVG/>*/}
                        {/*                    </div>*/}
                        {/*                </div>*/}
                        {/*            </div>*/}
                        {/*            <div className={s.imagesExploreElement}>*/}
                        {/*                <img src={image9}*/}
                        {/*                     alt=""/>*/}

                        {/*                <div className={s.likesComments}>*/}
                        {/*                    <div className={s.like}>*/}
                        {/*                        <LikeSVG/>*/}
                        {/*                    </div>*/}
                        {/*                    <div className={s.comment}>*/}
                        {/*                        <CommentSVG/>*/}
                        {/*                    </div>*/}
                        {/*                </div>*/}
                        {/*            </div>*/}
                        {/*            <div className={s.imagesExploreElement}>*/}
                        {/*                <img src={image4}*/}
                        {/*                     alt=""/>*/}
                        {/*                <div className={s.likesComments}>*/}
                        {/*                    <div className={s.like}>*/}
                        {/*                        <LikeSVG/>*/}
                        {/*                    </div>*/}
                        {/*                    <div className={s.comment}>*/}
                        {/*                        <CommentSVG/>*/}
                        {/*                    </div>*/}
                        {/*                </div>*/}
                        {/*            </div>*/}
                        {/*            <div className={s.imagesExploreElement}>*/}
                        {/*                <img*/}
                        {/*                    src={image2}*/}
                        {/*                    alt=""/>*/}
                        {/*                <div className={s.likesComments}>*/}
                        {/*                    <div className={s.like}>*/}
                        {/*                        <LikeSVG/>*/}
                        {/*                    </div>*/}
                        {/*                    <div className={s.comment}>*/}
                        {/*                        <CommentSVG/>*/}
                        {/*                    </div>*/}
                        {/*                </div>*/}
                        {/*            </div>*/}
                        {/*        </div>*/}
                        {/*    </div>*/}
                        {/*</div>*/}
                    </div>
                </div>
                <button
                    className={s.loadMoreButton}
                    onClick={() => {scrollUp()}}
                >
                    Load more ...
                </button>


            </div>
    );
}

export default MyProfile;

