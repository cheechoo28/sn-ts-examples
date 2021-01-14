import React from 'react';
import s from './Post.module.css'

type PostPropsType = {
    message: string
    likesCount: number
}
export function Post (props: PostPropsType)  {
    return (
        <div className={s.item}>
            <img src='https://klike.net/uploads/posts/2019-03/1551511784_4.jpg'/>
            {props.message}
            <div>
                <span>like</span> {props.likesCount}
            </div>
        </div>
    )
}