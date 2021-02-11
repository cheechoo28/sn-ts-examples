import React from 'react';
import {MyPosts} from "./MyPosts/MyPosts";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {ActionsTypes, StateType} from "../../Redux/State";


type PropsType = {
    state: StateType
    dispatch: (action: ActionsTypes) => void
}

export function Profile(props: PropsType) {

    return (
        <div>
            <ProfileInfo/>
            <MyPosts state={props.state} dispatch={props.dispatch}/>
        </div>
    )
}