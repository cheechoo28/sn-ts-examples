import React from "react";
import {connect} from "react-redux";

import {StateType} from "../../Redux/redux-store";
import {followAC, InitialStateType, setUsersAC, unFollowAC, UsersType} from "../../Redux/users-reducer";
import {Dispatch} from "redux";
import {Users} from "./Users";

export type UsersPropsType = MapStatePropsType & MapDispatchPropsType

type MapStatePropsType = {
    users: Array<UsersType>
}

type MapDispatchPropsType = {
    follow: (userId: number) => void
    unFollow: (userId: number) => void
    setUsers: (users: Array<UsersType>) => void
}

const mapStateToProps = (state: StateType): MapStatePropsType => {
    return {
        users: state.usersPage.users,
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
        }
    }
}



export const UsersContainer = connect(mapStateToProps, mapDispatchToProps) (Users)