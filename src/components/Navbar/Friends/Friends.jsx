import React from 'react';
import s from './Friends.module.css';

const Friends = (props) => {

    return (
        <div className={s.friends__block}>
            <img className={s.friends__avatar} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSq_I0JFO2DxoAV3J-sI7ajtx0qW0Q5neaY_A&usqp=CAU" />
            <div className={s.friends__name}>
                {props.name}
            </div>
        </div>
    )
}

export default Friends;