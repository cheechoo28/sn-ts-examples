const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET-USERS"
const SET_CURRENT_PAGE = "SET-CURRENT-PAGE"
const SET_TOTAL_USER_COUNT = "SET-TOTAL-USER-COUNT"
const SET_TOGGLE_IS_FETCHING = "TOGGLE-IS-FETCHING"

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
    pageSize: number
    totalUsersCount: number
    currentPage: number
    isFetching: boolean
}


let initialState: InitialStateType = {
    users: [],
    pageSize: 100,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: false

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
                users: [...action.users]
            }
        case SET_CURRENT_PAGE:
            return  {
                ...state,
                currentPage: action.currentPage
            }
        case SET_TOTAL_USER_COUNT:
            return {
                ...state,
                totalUsersCount: action.totalUsersCount
            }
        case SET_TOGGLE_IS_FETCHING:
            return {
                ...state,
                isFetching: action.value
            }
        default:
            return state
    }
}

export const follow = (userId: number) => {
    return {
        type: FOLLOW,
        userId
    } as const
}
export const unFollow = (userId: number) => {
    return {
        type: UNFOLLOW,
        userId
    } as const
}
export const setUsers = (users: Array<UsersType>) => {
    return {
        type: SET_USERS,
        users
    } as const
}
export const setCurrentPage = (currentPage: number) => {
    return {
        type: SET_CURRENT_PAGE,
        currentPage
    } as const
}
export const setTotalUsersCount = (totalUsersCount: number) => {
    return {
        type: SET_TOTAL_USER_COUNT,
        totalUsersCount
    } as const
}
export const setToggleIsFetchingValue = (value: boolean) => {
    return {
        type: SET_TOGGLE_IS_FETCHING,
        value
    } as const
}

type FollowTypeAC = ReturnType<typeof follow>
type UnFollowTypeAC = ReturnType<typeof unFollow>
type setUsersTypeAC = ReturnType<typeof setUsers>
type SetCurrentPageAC = ReturnType<typeof setCurrentPage>
type SetTotalUsersCountAC = ReturnType<typeof setTotalUsersCount>
type SetToggleIsFetchingValueAC = ReturnType<typeof setToggleIsFetchingValue>

type ActionsTypes = FollowTypeAC | UnFollowTypeAC | setUsersTypeAC | SetCurrentPageAC | SetTotalUsersCountAC | SetToggleIsFetchingValueAC