import {ActionsTypes, DialogsPageType, MessageType} from "./State";

const ADD_MESSAGE = "ADD-MESSAGE";
const UPDATE_NEW_MESSAGE_TEXT = "UPDATE-NEW-MESSAGE-TEXT";

export const dialogsReducer = (state: DialogsPageType, action: ActionsTypes) => {
    switch (action.type) {
        case ADD_MESSAGE:
            const newMessage: MessageType = {
                id: 8,
                message: state.newMessageText
            }
            state.messages.push(newMessage)
            state.newMessageText = ''
            return state
        case UPDATE_NEW_MESSAGE_TEXT:
            state.newMessageText = action.newMessage
            return state
        default:
            return state
    }
}

export const addMessageAC = () => {
    return {
        type: ADD_MESSAGE,
    } as const
}
export const updateNewMessageTextActionCreator = (newMessage: string) => {

    return {
        type: UPDATE_NEW_MESSAGE_TEXT,
        newMessage
    } as const
}