import React from 'react'
import s from './Profile.module.css';
import MyPosts from "./MyPosts/MyPosts";

const Profile = () => {
    return (
        <div className={s.content}>
            <div>
                <img src="https://i.pinimg.com/originals/23/4a/21/234a218c200ea9a5fc85bc9363cf2f2e.jpg" alt=""/>
            </div>
            <div>
                avatar + disc
            </div>
            <MyPosts />
        </div>
    )
}

export default Profile;