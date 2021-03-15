import React from 'react';
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {MyPostsContainer} from "./MyPosts/Post/MyPostsContainer";
import {Preloader} from "../common/Preloader/Preloader";
import {ProfileType} from "../../Redux/profile-reducer";


type PropsType = {
    profile: ProfileType
}

export function Profile(props: PropsType) {
    return (
        <div>
            <ProfileInfo profile={props.profile}/>
            <MyPostsContainer/>
        </div>
    )
}