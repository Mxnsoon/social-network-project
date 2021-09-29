import React from 'react';
import s from './MyPosts.module.css';
import Post from "./Post/Post";
import {useFormik} from "formik";

const MyPosts = (props) => {

    let postsElements = props.posts.map(p => <Post message={p.message} likesCount={p.likesCount}/>);

    let newPostElement = React.createRef();



    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            {postsElements}
            <AddPostForm addPost={props.addPost} />
        </div>
    )
}

const AddPostForm = (props) => {
    const formik = useFormik({
        initialValues: {
            post: ''
        },
        onSubmit: values => {
            props.addPost(values.post)
        }
    })

    return (
        <form onSubmit={formik.handleSubmit}>
            <input
                name="post"
                type="text"
                placeholder="Напиши что нибудь :)"
                onChange={formik.handleChange}
                value={formik.values.post}
            />
            <div>
                <button type="submit" >Add post</button>
            </div>
        </form>
    )
}

export default MyPosts;