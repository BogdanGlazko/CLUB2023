import React from "react";
import s from "./buttons.module.sass"

const ButtonCoral =(props:any)=>{
    return (
            <button className={s.button}>{props.name}</button>
    )
}

export default ButtonCoral;