import React from 'react'
import s from './Profile.module.css';

const Profile = () => {
    return (
        <div className={s.content}>
            <div>
                <img src="https://i.pinimg.com/originals/23/4a/21/234a218c200ea9a5fc85bc9363cf2f2e.jpg" alt=""/>
            </div>
            <div>
                avatar + disc
            </div>
            <div>
                My posts
                <div>
                    New Post
                </div>
                <div className={s.posts}>
                    <div className={s.item}>Post1</div>
                    <div className={s.item}>Post2</div>
                </div>

            </div>
        </div>
    )
}

export default Profile;