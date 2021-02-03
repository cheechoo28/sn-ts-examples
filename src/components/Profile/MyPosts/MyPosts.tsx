import React from 'react';
import s from './MyPosts.module.css'
import {Post} from "./Post/Post";
import {StateType} from "../../../Redux/State";



type PropsType = {
    state: StateType
    addPost: (postMassage: string) => void
}

export function MyPosts(props: PropsType) {


    let postsElement = props.state.profilePage.posts.map(p => <Post message={p.message} likesCount={p.likesCount}/>)

    let newPostElement = React.createRef<HTMLTextAreaElement>()

    const addPost = () => {
        if (newPostElement.current) {
            props.addPost(newPostElement.current.value)
            newPostElement.current.value = ''
        }
    }

        return (
            <div>
                my posts
                <div>
                    <textarea ref={newPostElement}></textarea>
                    <div>
                        <button onClick={addPost}>Add post</button>
                    </div>
                </div>
                <div className={s.posts}>
                    {postsElement}
                </div>
            </div>
        )
}