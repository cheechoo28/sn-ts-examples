import React, {ChangeEvent} from 'react';
import s from './MyPosts.module.css'
import {Post} from "./Post/Post";
import {StateType} from "../../../Redux/State";


type PropsType = {
    state: StateType
    addPost: () => void
    updateNewPostText: (newText: string) => void
}

export function MyPosts(props: PropsType) {

    let postsElements = props.state.profilePage.posts.map(p => <Post message={p.message} likesCount={p.likesCount}/>)

    const addPost = () => {
        props.addPost()
    }

    let onPostChange = (e: ChangeEvent<HTMLTextAreaElement>) => {props.updateNewPostText(e.currentTarget.value)}

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