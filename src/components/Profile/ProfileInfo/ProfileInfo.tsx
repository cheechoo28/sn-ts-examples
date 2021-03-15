import React from 'react';
import {Preloader} from "../../common/Preloader/Preloader";
import {ProfileType} from "../../../Redux/profile-reducer";

type ProfileInfoPropsType = {
    profile: ProfileType
}

export function ProfileInfo(props: ProfileInfoPropsType) {
    if (!props.profile) {
        return <Preloader/>
    }
    return (
        <div>
            <div>
                <img alt={''} src='https://www.talkwalker.com/images/2020/blog-headers/image-analysis.png'/>
            </div>
            <div>
                <div>{props.profile.fullName}</div>
                <img alt={''} src={props.profile.photos?.large}/>

            </div>
        </div>
    )
}