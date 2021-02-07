import React, {ChangeEvent} from 'react';
import s from './MyPosts.module.css'
import {Post} from "./Post/Post";
import {PostsType, ProfilePageType} from "../../../Redux/State";


type PropsType = {
    newPostText: string
    posts: Array<PostsType>
    addPost: (postText: string) => void
    updateNewPostText: (newText: string) => void
}

export function MyPosts(props: PropsType) {

    let postsElements = props.posts.map(p => <Post message={p.message} likesCount={p.likesCount}/>)

    const addPost = () => {
        props.addPost(props.newPostText)
    }

    let onPostChange = (e: ChangeEvent<HTMLTextAreaElement>) => {props.updateNewPostText(e.currentTarget.value)}

    return (
        <div>
            my posts
            <div>
                <textarea value={props.newPostText} onChange={onPostChange}/>
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