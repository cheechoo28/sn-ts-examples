
const ADD_MESSAGE = "ADD-MESSAGE";
const UPDATE_NEW_MESSAGE_TEXT = "UPDATE-NEW-MESSAGE-TEXT";

type DialogsType = {
    id: number
    name: string
}
type MessageType = {
    id: number
    message: string
}


export type InitialStateType = {
    messages: Array<MessageType>
    dialogs: Array<DialogsType>
    newMessageText: string
}

let initialState: InitialStateType =  {
        dialogs: [
            {id: 1, name: "Dimych"},
            {id: 2, name: "Andrew"},
            {id: 3, name: "Sveta"},
            {id: 4, name: "Sasha"},
            {id: 5, name: "Viktor"},
            {id: 6, name: "Valera"}
        ],
        messages: [
            {id: 1, message: "Hi"},
            {id: 2, message: "How are you?"},
            {id: 3, message: "Yo"},
            {id: 4, message: "Yo"},
            {id: 5, message: "Yo"},
            {id: 6, message: "Yo"}
        ],
        newMessageText: ''
}

export const dialogsReducer = (state: InitialStateType = initialState, action: ActionsTypes): InitialStateType => {
    switch (action.type) {
        case ADD_MESSAGE:
            const newMessage: MessageType = {
                id: 8,
                message: state.newMessageText
            }
            return {
                ...state,
                messages: [
                    ...state.messages,
                    newMessage
                ],
                newMessageText: ''
            }
            // state.messages.push(newMessage)
            // state.newMessageText = ''
            return state
        case UPDATE_NEW_MESSAGE_TEXT:
            return {
                ...state,
                newMessageText: action.newMessage
            }
            //state.newMessageText = action.newMessage
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

export type ActionsTypes =
    | ReturnType<typeof addMessageAC>
    | ReturnType<typeof updateNewMessageTextActionCreator>