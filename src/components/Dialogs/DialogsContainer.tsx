import React from 'react';
import {addMessageAC, updateNewMessageTextActionCreator} from "../../Redux/dialogs-reducer";
import {Dialogs} from "./Dialogs";


type PropsType = {
   store: any
}

export function DialogsContainer(props: PropsType) {

    const state = props.store.getState().dialogsPage

    const onSendMessage = () => {
        props.store.dispatch(addMessageAC())
    }
    const onUpdateMessageText = (newMessage: string) => {
        props.store.dispatch(updateNewMessageTextActionCreator(newMessage))
    }

    return (
        <Dialogs updateNewMessageText={onUpdateMessageText} sendMessage={onSendMessage} dialogsPage={state}/>
    )
}