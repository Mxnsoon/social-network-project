import React from 'react';
import s from './MyPosts.module.css';
import Post from "./Post/Post";
import {useFormik} from "formik";
import * as Yup from 'yup';
import {addPostValidator} from '../../../utils/validators/validators';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

const validationSchemaPost = Yup.object({
    post: Yup.string()
        .max(30, 'Max length is 30 symbols')
        .required('Required')
})

const MyPosts = (props) => {

    let postsElements = props.posts.map(p => <Post message={p.message} likesCount={p.likesCount}/>);

    let newPostElement = React.createRef();


    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            {postsElements}
            <AddPostForm addPost={props.addPost}/>
        </div>
    )
}

const AddPostForm = (props) => {
    const formik = useFormik({
        initialValues: {
            post: ''
        },
        validationSchema: addPostValidator,
        onSubmit: (values, actions) => {
            props.addPost(values.post)
            actions.resetForm()
        }
    })

    return (
        <form onSubmit={formik.handleSubmit}>
            <TextField
                variant="standard"
                name="post"
                type="text"
                placeholder="Напиши что нибудь :)"
                onChange={formik.handleChange}
                value={formik.values.post}
                onBlur={formik.handleBlur}
                error={formik.touched.post && Boolean(formik.errors.post)}
                helperText={formik.touched.post && formik.errors.post}
            />
                <Button type="submit" color="primary" variant="contained" >Add post</Button>
        </form>
    )
}

export default MyPosts;