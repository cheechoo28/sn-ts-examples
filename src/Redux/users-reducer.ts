const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET-USERS"

type LocationType = {
    city: string
    country: string
}

type PhotosType = {
    small: string
    large: string
}
export type UsersType = {
    id: number
    name: string
    status: string
    location: LocationType
    followed: boolean
    photos: PhotosType
}

export type InitialStateType = {
    users: Array<UsersType>
}


let initialState: InitialStateType = {
    users: []
}

export const usersReducer = (state: InitialStateType = initialState, action: ActionsTypes): InitialStateType => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: true}
                    }
                    return u
                })
            }
        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: false}
                    }
                    return u
                })
            }
        case SET_USERS:
            return {
                ...state,
                users: [...state.users, ...action.users]
            }
        default:
            return state
    }
}

export const followAC = (userId: number) => {
    return {
        type: FOLLOW,
        userId
    } as const
}
export const unFollowAC = (userId: number) => {

    return {
        type: UNFOLLOW,
        userId
    } as const
}
export const setUsersAC = (users: Array<UsersType>) => {
    return {
        type: SET_USERS,
        users
    } as const
}

type FollowTypeAC = ReturnType<typeof followAC>
type UnFollowTypeAC = ReturnType<typeof unFollowAC>
type setUsersTypeAC = ReturnType<typeof setUsersAC>

type ActionsTypes = FollowTypeAC | UnFollowTypeAC | setUsersTypeAC