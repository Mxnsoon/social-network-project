import React from 'react';
import styles from './Users.module.css';

const Users = (props) => {

    if (props.users.length === 0) {
        props.setUsers([
                {
                    id: 1, photoUrl: 'https://pbs.twimg.com/profile_images/1105124188476579840/vAo_ZPMt.jpg',
                    followed: false, fullName: 'Dmitry', status: 'i am a boss',
                    location: {city: 'Minsk', country: 'Belarus'}
                },
                {
                    id: 2, photoUrl: 'https://pbs.twimg.com/profile_images/1105124188476579840/vAo_ZPMt.jpg',
                    followed: true, fullName: 'Sasha', status: 'i am a boss too',
                    location: {city: 'Moscow', country: 'Russia'}
                },
                {
                    id: 3, photoUrl: 'https://pbs.twimg.com/profile_images/1105124188476579840/vAo_ZPMt.jpg',
                    followed: false, fullName: 'Andrew', status: 'i am a boss too',
                    location: {city: 'Kiev', country: 'Ukraine'}
                }
            ]
        )
        }

    return (
        <div>
            {props.users.map(u => <div key={u.id}>
                <span>
                    <div>
                        <img className={styles.avatar} src={u.photoUrl}/>
                    </div>
                    <div>
                        {u.followed
                            ? <button onClick={() => {
                                props.unfollow(u.id)
                            }}>Unfollow</button>
                            : <button onClick={() => {
                                props.follow(u.id)
                            }}>Follow</button>}
                    </div>
                </span>
                <span>
                    <span>
                        <div>{u.fullName}</div>
                        <div>{u.status}</div>
                    </span>
                    <span>
                        <div>{u.location.country}</div>
                        <div>{u.location.city}</div>
                    </span>
                </span>

            </div>)}
        </div>
    );
};

export default Users;