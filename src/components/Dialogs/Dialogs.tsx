import React from 'react';
import s from './Dialogs.module.css'
import {DialogItem, DialogsType} from "./DialogItem/DialogItem";
import {Message, MessageType} from "./Message/Message";
import {StateType} from "../../index";

type PropsType = {
    state: StateType
}

export function Dialogs(props: PropsType) {

    let dialogsElements = props.state.dialogs.map((d: DialogsType) => <DialogItem name={d.name} id={d.id}/>)
    let messagesElements = props.state.messages.map((m: MessageType) => <Message message={m.message}/>)

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