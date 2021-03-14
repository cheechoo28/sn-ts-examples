import React from "react";
import s from "../../Users/Users.module.css";
import preloader from "../../../assets/images/preloader.svg";


type PreloaderPropsType = {

}

export function Preloader(props: PreloaderPropsType) {
    return (
        <div className={s.fetching}>
            <img src={preloader}/>
        </div>
    )
}