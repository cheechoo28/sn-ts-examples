
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
}
export  type ProfilePageType = {
    posts: Array<PostsType>
    newPostText: string
}
export type StateType = {
    profilePage: ProfilePageType
    dialogsPage: DialogsPageType
}
type AddPostActionType = {
    type: "ADD-POST"
}
type UpdateNewPostTextActionType = {
    type: "ADD-POST" | "UPDATE-NEW-POST-TEXT"
    newText: string
}

export type ActionsTypes =  AddPostActionType | UpdateNewPostTextActionType


export type StoreType = {
    _state: StateType
    subscribe: (observer: () => void) => void
    getState: () => StateType
    _callSubscriber: () => void
    dispatch: (action: ActionsTypes) => void

}
export let store: StoreType = {
    _state: {
        profilePage: {
            posts: [
                {id: 1, message: "Hi, how are you?", likesCount: 12},
                {id: 2, message: "It's my first post", likesCount: 11}
            ],
            newPostText: ''
        },
        dialogsPage: {
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
            ]
        }
    },
    _callSubscriber() {
        console.log('State changed')
    },
    subscribe(observer) {
        this._callSubscriber = observer
    },
    getState() {
        return this._state
    },
    dispatch(action) {
        if (action.type === "ADD-POST") {
            const newPost: PostsType = {
                id: 3,
                message: this._state.profilePage.newPostText,
                likesCount: 0
            }
            this._state.profilePage.posts.push(newPost)
            this._state.profilePage.newPostText = ''
            this._callSubscriber()
        } else if (action.type === "UPDATE-NEW-POST-TEXT") {
            this._state.profilePage.newPostText = action.newText
            this._callSubscriber()
        }
    }

}


