import React from 'react';
import {MyPosts} from "./MyPosts/MyPosts";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {StateType} from "../../Redux/State";


type PropsType = {
    state: StateType
    addPost: (postMassage: string) => void
}

export function Profile(props: PropsType) {

    return (
        <div>
            <ProfileInfo/>
            <MyPosts state={props.state} addPost={props.addPost}/>
        </div>
    )
}