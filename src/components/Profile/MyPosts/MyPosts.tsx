import React, {ChangeEvent} from 'react';
import s from './MyPosts.module.css'
import {Post} from "./Post/Post";
import {ActionsTypes, StateType} from "../../../Redux/store";
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../Redux/profile-reducer";


type PropsType = {
    state: StateType
    dispatch: (action: ActionsTypes) => void
}

// let addPostActionCreator = () => {
//     return {
//         type: 'ADD-POST'
//     }
// }

export function MyPosts(props: PropsType) {

    let postsElements = props.state.profilePage.posts.map(p => <Post message={p.message} likesCount={p.likesCount}/>)

    const addPost = () => {
        props.dispatch(addPostActionCreator())
    }

    let onPostChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        const newText = e.currentTarget.value
        props.dispatch(updateNewPostTextActionCreator(newText))
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