import React, {ChangeEvent, useState} from 'react';
import s from './Dialogs.module.css'
import {DialogItem, DialogsType} from "./DialogItem/DialogItem";
import {Message, MessageType} from "./Message/Message";
import {ActionsTypes, addMessageAC, StateType, updateNewMessageTextActionCreator} from "../../Redux/State";


type PropsType = {
    state: StateType
    dispatch:(action: ActionsTypes) => void
}

export function Dialogs(props: PropsType) {

    let dialogsElements = props.state.dialogsPage.dialogs.map((d: DialogsType) => <DialogItem name={d.name} id={d.id}/>)
    let messagesElements = props.state.dialogsPage.messages.map((m: MessageType) => <Message message={m.message}/>)

    const addMessage = () => {
        props.dispatch(addMessageAC())
    }
    const updateMessageText = (e: ChangeEvent<HTMLTextAreaElement>) => {
         const newMessage = e.currentTarget.value
        props.dispatch(updateNewMessageTextActionCreator(newMessage))
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>

            <div className={s.messages}>
                {messagesElements}
                <textarea value={props.state.dialogsPage.newMessageText} onChange={updateMessageText}> </textarea>
                <button onClick={addMessage}>Add message</button>
            </div>
        </div>
    )
}