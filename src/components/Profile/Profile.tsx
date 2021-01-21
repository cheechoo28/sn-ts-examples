import React from 'react';
import {MyPosts} from "./MyPosts/MyPosts";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {StateType} from "../../index";

type PropsType = {
    state: StateType
}

export function Profile(props: PropsType) {

    return (
        <div>
            <ProfileInfo/>
            <MyPosts state={props.state} />
        </div>
    )
}