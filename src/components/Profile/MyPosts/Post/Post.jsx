import React from 'react'
import s from './Post.module.css';

const Post = () => {
    return (
        <div className={s.item}>
            <img src="https://i.pinimg.com/originals/23/4a/21/234a218c200ea9a5fc85bc9363cf2f2e.jpg" alt=""/>
            Post1
            <div>
                <span>like</span>
            </div>
        </div>
    )
}

export default Post;