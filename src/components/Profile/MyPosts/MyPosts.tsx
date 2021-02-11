import React, {ChangeEvent} from 'react';
import s from './MyPosts.module.css'
import {Post} from "./Post/Post";
import {ActionsTypes, StateType} from "../../../Redux/State";


type PropsType = {
    state: StateType
    dispatch: (action: ActionsTypes) => void
}

export function MyPosts(props: PropsType) {

    let postsElements = props.state.profilePage.posts.map(p => <Post message={p.message} likesCount={p.likesCount}/>)

    const addPost = () => {
        props.dispatch({type: "ADD-POST"})
    }

    let onPostChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        const newText = e.currentTarget.value
        props.dispatch({type: "UPDATE-NEW-POST-TEXT", newText})
    }

    return (
        <div>
            my posts
            <div>
                <textarea value={props.state.profilePage.newPostText} onChange={onPostChange}/>
                <div>
                    <button onClick={addPost}>Add post</button>
                </div>
            </div>
            <div className={s.posts}>
                {postsElements}
            </div>
        </div>
    )
}