import React from 'react';
import s from './MyPosts.module.css'
import {Post} from "./Post/Post";
import {PostsType, StateType} from "../../../index";


type PropsType = {
    state: StateType
}

export function MyPosts(props: PropsType) {


    let postsElement = props.state.posts.map(p => <Post message={p.message} likesCount={p.likesCount}/>)

    return (
        <div>
            my posts
            <div>
                <textarea></textarea>
                <div>
                    <button>Add post</button>
                </div>
            </div>
            <div className={s.posts}>
                {postsElement}
            </div>
        </div>
    )
}