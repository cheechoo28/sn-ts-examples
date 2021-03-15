const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";
const SET_USER_PROFILE = "SET-USER-PROFILE";

type PostsType = {
    id: number
    message: string
    likesCount: number
}

type ContactsType = {
    facebook: string
    website: string,
    vk: string
    twitter: string
    instagram: string
    youtube: string,
    github: string
    mainLink: string
}

type PhotosType = {
    small: string
    large: string

}

export type ProfileType = {
    aboutMe: string
    contacts: ContactsType
    lookingForAJob: boolean
    lookingForAJobDescription: string
    fullName: string
    userId: number
    photos: PhotosType
}

export type InitialStateType = {
    posts: Array<PostsType>
    newPostText: string
    profile: ProfileType
}


let initialState: InitialStateType = {
    profile: {} as ProfileType,
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
        case SET_USER_PROFILE:
            return {
                ...state,
                profile: action.profile
            }
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

export const setUserProfile = (profile: any) => {
    return {
        type: SET_USER_PROFILE,
        profile
    } as const
}

export type ActionsTypes =
    ReturnType<typeof addPostActionCreator>
    | ReturnType<typeof updateNewPostTextActionCreator>
    | ReturnType<typeof setUserProfile>
