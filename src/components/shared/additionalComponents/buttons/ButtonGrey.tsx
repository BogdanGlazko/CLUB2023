import React from "react";
import s from "./buttons.module.sass"

const ButtonGrey =(props:any)=>{
    return (

            <button className={`${s.cancelButton} ${s.button}`}>{props.name}</button>

    )
}

export default ButtonGrey;