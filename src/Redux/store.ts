import {addPostActionCreator, profileReducer, updateNewPostTextActionCreator} from "./profile-reducer";
import {addMessageAC, dialogsReducer, updateNewMessageTextActionCreator} from "./dialogs-reducer";
import {sidebarReducer} from "./sidebar-reducer";


export type PostsType = {
    id: number
    message: string
    likesCount: number
}
export type DialogsType = {
    id: number
    name: string
}
export type MessageType = {
    id: number
    message: string
}
export type DialogsPageType = {
    messages: Array<MessageType>
    dialogs: Array<DialogsType>
    newMessageText: string
}
export  type ProfilePageType = {
    posts: Array<PostsType>
    newPostText: string
}

export type sideBarType = {}
export type StateType = {
    profilePage: ProfilePageType
    dialogsPage: DialogsPageType
    sidebar: Object
}


export type ActionsTypes =
    ReturnType<typeof addPostActionCreator>
    | ReturnType<typeof updateNewPostTextActionCreator>
    | ReturnType<typeof addMessageAC>
    | ReturnType<typeof updateNewMessageTextActionCreator>


export type StoreType = {
    _state: StateType
    subscribe: (observer: () => void) => void
    getState: () => StateType
    _callSubscriber: () => void
    dispatch: (action: ActionsTypes) => void

 }
// export let store: StoreType = {
//     _state: {
//         profilePage: {
//             posts: [
//                 {id: 1, message: "Hi, how are you?", likesCount: 12},
//                 {id: 2, message: "It's my first post", likesCount: 11}
//             ],
//             newPostText: ''
//         },
//         dialogsPage: {
//             dialogs: [
//                 {id: 1, name: "Dimych"},
//                 {id: 2, name: "Andrew"},
//                 {id: 3, name: "Sveta"},
//                 {id: 4, name: "Sasha"},
//                 {id: 5, name: "Viktor"},
//                 {id: 6, name: "Valera"}
//             ],
//             messages: [
//                 {id: 1, message: "Hi"},
//                 {id: 2, message: "How are you?"},
//                 {id: 3, message: "Yo"},
//                 {id: 4, message: "Yo"},
//                 {id: 5, message: "Yo"},
//                 {id: 6, message: "Yo"}
//             ],
//             newMessageText: ''
//         },
//         sidebar: {}
//     },
//     _callSubscriber() {
//         console.log('State changed')
//     },
//     subscribe(observer) {
//         this._callSubscriber = observer
//     },
//     getState() {
//         return this._state
//     },
//     dispatch(action) {
//         this._state.profilePage = profileReducer(this._state.profilePage, action)
//         this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action)
//         this._state.sidebar = sidebarReducer(this._state.sidebar, action)
//
//         this._callSubscriber()
//     }
// }

