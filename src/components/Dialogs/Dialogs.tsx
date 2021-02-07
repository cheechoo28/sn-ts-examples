import React from 'react';
import s from './Dialogs.module.css'
import {DialogItem, DialogsType} from "./DialogItem/DialogItem";
import {Message, MessageType} from "./Message/Message";
import {DialogsPageType, StateType} from "../../Redux/State";


type PropsType = {
    dialogsPage: DialogsPageType
}

export function Dialogs(props: PropsType) {

    let dialogsElements = props.dialogsPage.dialogs.map((d: DialogsType) => <DialogItem name={d.name} id={d.id}/>)
    let messagesElements = props.dialogsPage.messages.map((m: MessageType) => <Message message={m.message}/>)

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>

            <div className={s.messages}>
                {messagesElements}
            </div>
        </div>
    )
}