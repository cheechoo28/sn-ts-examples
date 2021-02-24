import React from 'react';
import {MyPosts} from "../MyPosts";
import {
    addPostActionCreator,
    InitialStateType,
    updateNewPostTextActionCreator
} from "../../../../Redux/profile-reducer";
import {connect} from "react-redux";
import {StateType} from "../../../../Redux/redux-store";
import {Dispatch} from "redux";


type mapStatePropsType = {
    profilePage: InitialStateType
}

type mapDispatchPropsType = {
    addPost: () => void
    updateNewPostText: (newText: string) => void
}

export type MyPostsPropsType = mapStatePropsType & mapDispatchPropsType

const mapStateToProps = (state: StateType): mapStatePropsType => {
    return {
        profilePage: state.profilePage
    }
}

const mapDispatchToProps = (dispatch: Dispatch): mapDispatchPropsType => {
    return {
        addPost: () => {
            dispatch(addPostActionCreator())
        },
        updateNewPostText: (newText: string) => {
            dispatch(updateNewPostTextActionCreator(newText))
        }
    }
}

export const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)