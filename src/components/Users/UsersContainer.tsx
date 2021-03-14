import React from "react";
import {connect} from "react-redux";

import {StateType} from "../../Redux/redux-store";
import {
    followAC,
    InitialStateType,
    setCurrentPageAC, setTotalUsersCountAC,
    setUsersAC,
    unFollowAC,
    UsersType
} from "../../Redux/users-reducer";
import {Dispatch} from "redux";
import {Users} from "./Users";

export type UsersPropsType = MapStatePropsType & MapDispatchPropsType

type MapStatePropsType = {
    users: Array<UsersType>
    pageSize: number
    totalUserCount: number
    currentPage: number
}

type MapDispatchPropsType = {
    follow: (userId: number) => void
    unFollow: (userId: number) => void
    setUsers: (users: Array<UsersType>) => void
    setCurrentPage: (currentPage: number) => void
    setTotalUsersCount: (userCount: number) => void
}

const mapStateToProps = (state: StateType): MapStatePropsType => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUserCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage
    }
}

const mapDispatchToProps = (dispatch: Dispatch): MapDispatchPropsType => {
    return {
        follow: (userId: number) => {
            dispatch(followAC(userId))
        },
        unFollow: (userId: number) => {
            dispatch(unFollowAC(userId))
        },
        setUsers: (users: Array<UsersType>) => {
            dispatch(setUsersAC(users))
        },
        setCurrentPage: (currentPage: number) => {
            dispatch(setCurrentPageAC(currentPage))
        },
        setTotalUsersCount: (userCount: number) => {
            dispatch(setTotalUsersCountAC(userCount))
        }
    }
}




export const UsersContainer = connect(mapStateToProps, mapDispatchToProps) (Users)