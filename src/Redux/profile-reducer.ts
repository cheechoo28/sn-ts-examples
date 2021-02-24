import {ActionsTypes} from "./store";


const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";

type PostsType = {
    id: number
    message: string
    likesCount: number
}

export type InitialStateType = {
    posts: Array<PostsType>
    newPostText: string
}


let initialState: InitialStateType = {
        posts: [
            {id: 1, message: "Hi, how are you?", likesCount: 12},
            {id: 2, message: "It's my first post", likesCount: 11}
        ],
        newPostText: ''
    }

export const profileReducer = (state: InitialStateType = initialState, action: ActionsTypes): InitialStateType => {

    switch (action.type) {
        case ADD_POST:
            if (state.newPostText.trim() !== '') {
                const newPost: PostsType = {
                    id: 3,
                    message: state.newPostText,
                    likesCount: 0
                }
                // state.posts.push(newPost)
                // state.newPostText = ''
                return {
                    ...state,
                    posts: [
                        ...state.posts,
                        newPost
                    ],
                    newPostText: ''
                }
            } else {
                alert('Error')
            }
            return state
        case UPDATE_NEW_POST_TEXT:
            return {
                ...state,
                newPostText: action.newText
            }
            // state.newPostText = action.newText
            // return state
        default:
            return state
    }
}

export const addPostActionCreator = () => {
    return {
        type: ADD_POST,
    } as const
}
export const updateNewPostTextActionCreator = (newText: string) => {

    return {
        type: UPDATE_NEW_POST_TEXT,
        newText
    } as const
}
