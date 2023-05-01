import * as React from 'react';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
import {TransitionProps} from '@mui/material/transitions';

import Button from "@mui/material/Button";
import {stateOfModalWindow} from "store/reduxToolkit/features/settings-page/settingsSelectors";
import {useSelector} from "react-redux";
import {useTypeDispatch} from "hooks/useTypeDispatch";
import {changeStateOfModalWindow} from "store/reduxToolkit/features/myProfile-page/myProfileSlice";
import s from "./myProfile.module.sass";
import image9 from "../../../../assets/images/avatar-lg-1.jpg";
import image2 from "../../../../assets/images/img3.jpg";
import image3 from "../../../../assets/images/avatar-6.jpg";
import {modalData} from "../../../../store/reduxToolkit/features/myProfile-page/myProfileSelectors";
import {Input} from "@mui/material";

const Transition = React.forwardRef(function Transition(
    props: TransitionProps & {
        children: React.ReactElement<any, any>;
    },
    ref: React.Ref<unknown>,
) {
    return <Slide direction="up" ref={ref} {...props} />;
});

export default function MyProfileModal() {
    // const modalState = useSelector(stateOfModalWindow)
    const dispatch = useTypeDispatch()
    const dataForModal = useSelector(modalData)
    console.log(dataForModal)
    const handleClickOpen = ({img, isOpened}: any) => {
        dispatch(changeStateOfModalWindow({img, isOpened}))
    };

    const handleClose = () => {
        dispatch(changeStateOfModalWindow({img: "", isOpened: false}))
    };

    return (
        <div>
            {/*<Button variant="outlined" onClick={handleClickOpen}>*/}
            {/*    Show Modal*/}
            {/*</Button>*/}
            <div className={s.imagesWrapper}>
                <div className={s.imagesRecent}>
                    <div className={s.addPhotoBlock}>
                        <div>
                            <div>
                                <svg fill="none" height="20" viewBox="0 0 20 20" width="20"
                                     xmlns="http://www.w3.org/2000/svg">
                                    <path clipRule="evenodd"
                                          d="M10 2c.41 0 .75.34.75.75v6.5h6.5a.75.75 0 0 1 0 1.5h-6.5v6.5a.75.75 0 0 1-1.5 0v-6.5h-6.5a.75.75 0 0 1 0-1.5h6.5v-6.5c0-.41.34-.75.75-.75z"
                                          fill="currentColor" fillRule="evenodd"></path>
                                </svg>
                            </div>
                            <div>Add new</div>
                        </div>

                    </div>

                    <img onClick={() => {
                        handleClickOpen({
                            img: image9,
                            isOpened: true
                        })
                    }}
                         src={image9}
                         alt="IMG"
                    />

                    <img onClick={() => {
                        handleClickOpen({
                            img: image2,
                            isOpened: true
                        })
                    }}
                         src={image2}
                         alt="IMG"
                    />
                    <img onClick={() => {
                        handleClickOpen({
                            img: image3,
                            isOpened: true
                        })
                    }}
                         src={image3}
                         alt="IMG"
                    />
                </div>
            </div>

            <Dialog
                fullWidth={true}
                maxWidth={"lg"}
                open={dataForModal.isOpened}
                TransitionComponent={Transition}
                keepMounted
                onClose={handleClose}
                aria-describedby="alert-dialog-slide-description"
                sx={{
                    "& .MuiDialogContent-root": {
                        padding: "0",
                        overflow: "hidden",
                        width: "0",
                        // height:"0"
                    },
                    "& .css-cyxlny-MuiPaper-root-MuiDialog-paper": {
                        overflowY: "hidden"
                    }
                }}
            >
                <div className={s.wrapperModalGeneral}>
                    <DialogContent>
                        <div className={s.imageModal}>
                            <img src={dataForModal.img} alt="img"/>
                        </div>
                    </DialogContent>

                    <DialogContent>
                        <div className={s.heightWrapper}>

                            <div>
                                <div className={s.nameAndImageBlock}>
                                    <img className={s.imgContentModal} src={dataForModal.img} alt="img"/>
                                    <div>Johnson Smith</div>
                                    <div>...</div>
                                </div>
                                <div className={s.modalContentWrapper}>
                                    {/*<div className={s.imageModal}>*/}
                                    {/*    <img src={dataForModal.img} alt="img"/>*/}
                                    {/*</div>*/}
                                    <div className={s.contentModal}>


                                        <div className={s.likeAndCommentBlock}>
                                            <div>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
                                                nonummy nibh
                                                euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.
                                            </div>
                                            {/*<div>*/}
                                            {/*    <div>Like</div>*/}
                                            {/*    <div>Comment</div>*/}
                                            {/*    <div>Share</div>*/}
                                            {/*</div>*/}
                                        </div>
                                        <div className={s.commentsBlock}>
                                            <div className={s.flexBlock}>
                                                <div className={s.imagesCommentsWrapper}>
                                                    <img src={image3} alt="img"/>
                                                    <img src={image9} alt="img"/>
                                                    <img src={image2} alt="img"/>
                                                </div>
                                                <div>
                                                    Liked <strong> Johnson</strong> and <strong> 209 Others </strong>
                                                </div>
                                            </div>
                                            <div className={s.flexBlock}>
                                                <img className={s.imgComment} src={image9} alt="img"/>
                                                <div>
                                                    Consectetur adipisicing elit
                                                </div>
                                            </div>
                                            <div className={s.flexBlock}>
                                                <img className={s.imgComment} src={image2} alt="img"/>
                                                <div>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</div>
                                            </div>
                                            <div className={s.flexBlock}>
                                                <img  className={s.imgComment} src={image3} alt="img"/>
                                                <div>Consectetur adipisicing elit.</div>
                                            </div>
                                            <div className={s.flexBlock}>
                                                <img className={s.imgComment} src={image9} alt="img"/>
                                                <div>Lorem ipsum dolor sit amet</div>
                                            </div>
                                            <div className={s.flexBlock}>
                                                <img className={s.imgComment} src={image3} alt="img"/>
                                                <div>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</div>
                                            </div>
                                            <div className={s.flexBlock}>
                                                <img className={s.imgComment} src={image2} alt="img"/>
                                                <div>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</div>
                                            </div>
                                        </div>

                                    </div>


                                </div>
                            </div>

                            <div className={s.commentInput}>
                                <input type="text" placeholder="Write a comment..."/>
                            </div>

                        </div>

                    </DialogContent>
                </div>
            </Dialog>
        </div>
    );
}
