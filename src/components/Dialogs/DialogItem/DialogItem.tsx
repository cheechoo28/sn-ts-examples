import React from 'react';
import s from './DialogItem.module.css'
import {NavLink} from "react-router-dom";

export type DialogsType = {
    id: number
    name: string
}

export function DialogItem(props: DialogsType) {
    let path = "/dialogs/" + props.id

    return (
        <div className={s.item}>
            <img src='https://klike.net/uploads/posts/2019-03/1551511784_4.jpg'/>
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    )
}



