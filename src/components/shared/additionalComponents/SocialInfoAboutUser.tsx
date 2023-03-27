import React, {useEffect, useState} from "react";
import {getUserDataForProfilePage} from "../../../store/reduxToolkit/features/myProfile-page/myProfileSelectors";
import {useSelector} from "react-redux";
import s from "./socialInfoAboutUser.module.sass"
import {Input} from "@mui/material";
import Button from "@mui/material/Button";
import {useTypeDispatch} from "../../../hooks/useTypeDispatch";
import {setInputValueThunk} from "../../../store/reduxToolkit/features/settings-page/settingsThunks";
import {getUserForMyProfile} from "../../../store/reduxToolkit/features/myProfile-page/myProfileThunks";
import {getUserData} from "../../../store/reduxToolkit/features/app/appSelectors";

const SocialInfoAboutUser = () => {
    const dispatch = useTypeDispatch()
    const userData = useSelector(getUserDataForProfilePage)
    const [isInputActive, setIsInputActive] = useState("")
    const [inputValue, setInputValue] = useState("")
    const infoAboutLoggedUser = useSelector(getUserData)

    useEffect(() => {
        if (infoAboutLoggedUser){
            dispatch(getUserForMyProfile(infoAboutLoggedUser.id))
        }

    }, [])

    const handleChangeInfo = (arg: string) => {
        setIsInputActive(arg)
    }
    const changeInputValue = (arg: string) => {
        setInputValue(arg)
    }
    const changeAndSendInputValue = (arg: any) => {
        dispatch(setInputValueThunk(arg, inputValue, userData))
        setIsInputActive("")
    }

    return (
        <div>
            <div className={s.commonInfoWrapper}>
                <div className={s.commonInfo}>

                    {/*name*/}

                    <div className={s.stringWrapper}>
                        <div className={s.mainInputWrapper}>
                            <div className={s.nameOfResource}>Name :</div>
                            <div className={s.openAnimation}>
                                {isInputActive === "NameInput" ?
                                    <div className={s.inputWrapper}>
                                        <div className={s.inputPosition}>
                                            <Input
                                                sx={{
                                                    minWidth: 250,
                                                }}
                                                placeholder={"Insert Your Name or Nickname"}
                                                onChange={(event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
                                                    changeInputValue(event.currentTarget.value)
                                                }
                                                }/>
                                        </div>
                                        <Button onClick={() => {
                                            changeAndSendInputValue("Name")
                                        }}>send</Button>
                                    </div>
                                    :

                                    userData!.fullName ?
                                        <div className={s.contentAndLinks}>
                                            {userData!.fullName}
                                        </div>
                                        :
                                        <span></span>}
                            </div>
                        </div>
                        {isInputActive === "NameInput" ?
                            <div className={s.changeLink} onClick={() => {
                                handleChangeInfo("")
                            }}>Close</div> :
                            <div className={s.changeLink} onClick={() => {
                                handleChangeInfo("NameInput")
                            }}>Change</div>
                        }
                    </div>




                    
                </div>
            </div>
        </div>
    )
}
export default SocialInfoAboutUser