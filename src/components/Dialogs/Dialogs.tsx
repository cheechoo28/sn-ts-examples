import React, {ChangeEvent} from 'react';
import s from './Dialogs.module.css'
import {DialogItem, DialogsType} from "./DialogItem/DialogItem";
import {Message, MessageType} from "./Message/Message";
import {DialogsPropsType} from "./DialogsContainer";


export function Dialogs(props: DialogsPropsType) {

    let dialogsElements = props.dialogsPage.dialogs.map((d) => <DialogItem name={d.name} id={d.id}/>)
    let messagesElements = props.dialogsPage.messages.map((m: MessageType) => <Message message={m.message}/>)
    let newMessageText = props.dialogsPage.newMessageText

    const onSendMessage = () => {
        props.sendMessage()
    }
    const updateMessageText = (e: ChangeEvent<HTMLTextAreaElement>) => {
        const newMessage = e.currentTarget.value
        props.updateNewMessageText(newMessage)
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
                        <button onClick={onSendMessage}>Send message</button>
                    </div>
                </div>
            </div>
        </div>
    )
}