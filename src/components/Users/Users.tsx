import React from "react";
import s from './Users.module.css'
import {UsersPropsType} from "./UsersContainer";


export function Users (props: UsersPropsType) {

    if (props.users.length === 0) {
        props.setUsers([{
            id: 1,
            photoUrl: 'https://what-is-app.ru/wp-content/uploads/2019/02/muzhchina_kapyushon_33779.jpg',
            followed: false,
            fullName: 'Denis',
            status: 'I am a boss',
            location: {city: 'Minsk', country: 'Belarus'}
        },
            {
                id: 2,
                photoUrl: 'https://s.mediasalt.ru/images/0/5178/original.jpg',
                followed: true,
                fullName: "Nastya",
                status: 'I am a boss',
                location: {city: 'Moscow', country: 'Russia'}
            },
            {
                id: 3,
                photoUrl: 'https://i.pinimg.com/originals/45/f0/0d/45f00d92a829fb4df7d2f31447f11add.png',
                followed: false,
                fullName: "Luna",
                status: 'I am a boss',
                location: {city: 'Kiev', country: 'Ukraine'}
            },])
    }


    return (
        <div>
            {props.users.map(u => <div key={u.id}>
                <span>
                    <div>
                        <img src={u.photoUrl} className={s.userPhoto}/>
                    </div>
                    <div>
                        {u.followed === true ?
                            <button onClick={() => {props.unFollow(u.id)}}>Unfollow</button>
                            : <button onClick={() => {props.follow(u.id)}}>Follow</button>}
                    </div>
                </span>
                <span>
                    <span>
                        <div>
                            {u.fullName}
                        </div>
                        <div>
                            {u.status}
                        </div>
                    </span>
                    <span>
                        <div>
                            {u.location.country}
                        </div>
                        <div>
                            {u.location.city}
                        </div>
                    </span>
                </span>
            </div>)}
        </div>
    )
}