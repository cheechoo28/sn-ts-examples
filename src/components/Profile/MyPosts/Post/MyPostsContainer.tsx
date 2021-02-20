import React from 'react';
import {MyPosts} from "../MyPosts";
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../../Redux/profile-reducer";

type PropsType = {
    store: any
}

export function MyPostsContainer (props: PropsType) {

    const state = props.store.getState()
    const addPost = () => {
        props.store.dispatch(addPostActionCreator())
    }

    let onPostChange = (newText: string) => {
        props.store.dispatch(updateNewPostTextActionCreator(newText))
    }

    return (
        <MyPosts updateNewPostText={onPostChange} addPost={addPost} profilePage={state.profilePage}/>
    )
}