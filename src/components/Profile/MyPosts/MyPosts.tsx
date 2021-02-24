import React, {ChangeEvent} from 'react';
import s from './MyPosts.module.css'
import {Post} from "./Post/Post";
import {MyPostsPropsType} from "./Post/MyPostsContainer";

export function MyPosts(props: MyPostsPropsType) {
debugger
    let postsElements = props.profilePage.posts.map(p => <Post message={p.message} likesCount={p.likesCount}/>)

    const onAddPost = () => {
        props.addPost()
    }

    let onPostChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
debugger
        const newText = e.currentTarget.value
        props.updateNewPostText(newText)
    }

    return (
        <div>
            my posts
            <div>
                <textarea value={props.profilePage.newPostText} onChange={onPostChange}/>
                <div>
                    <button onClick={onAddPost}>Add post</button>
                </div>
            </div>
            <div className={s.posts}>
                {postsElements}
            </div>
        </div>
    )
}