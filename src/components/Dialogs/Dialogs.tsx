import React, {ChangeEvent, useState} from 'react';
import s from './Dialogs.module.css'
import {DialogItem, DialogsType} from "./DialogItem/DialogItem";
import {Message, MessageType} from "./Message/Message";
import { addMessageAC, updateNewMessageTextActionCreator} from "../../Redux/dialogs-reducer";
import {ActionsTypes, StateType} from "../../Redux/store";


type PropsType = {
    state: StateType
    dispatch: (action: ActionsTypes) => void
}

export function Dialogs(props: PropsType) {

    let dialogsElements = props.state.dialogsPage.dialogs.map((d: DialogsType) => <DialogItem name={d.name} id={d.id}/>)
    let messagesElements = props.state.dialogsPage.messages.map((m: MessageType) => <Message message={m.message}/>)
    let newMessageText = props.state.dialogsPage.newMessageText
    const sendMessage = () => {
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
                <div>
                    {messagesElements}
                </div>
                <div>
                    <div>
                        <textarea placeholder={"Enter your message"} value={newMessageText}
                                  onChange={updateMessageText}> </textarea>
                    </div>
                    <div>
                        <button onClick={sendMessage}>Send message</button>
                    </div>
                </div>
            </div>
        </div>
    )
}