import React from 'react';
import s from './Profile.module.css'
import {MyPosts} from "./MyPosts/MyPosts";

export function Profile() {
    return (
        <div>
            <div>
                <img src='https://www.talkwalker.com/images/2020/blog-headers/image-analysis.png'/>
            </div>
            <div>
                ava + description
            </div>
            <MyPosts/>
        </div>
    )
}