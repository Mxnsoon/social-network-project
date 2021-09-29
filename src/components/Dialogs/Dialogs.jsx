import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {Redirect} from "react-router-dom";
import {useFormik} from "formik";

const Dialogs = (props) => {

    let state = props.dialogsPage;

    if (!props.isAuth) return <Redirect to={"/login"}/>;

    let dialogsElements = state.dialogs.map(d => <DialogItem name={d.name} key={d.id} id={d.id}/>);
    let messagesElements = state.messages.map(m => <Message message={m.message} key={m.id}/>)
    let newMessageBody = state.newMessageText

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                <div> {messagesElements} </div>
            </div>
            <AddMessageForm sendMessage={props.sendMessage} />
        </div>
    )
}

const AddMessageForm = (props) => {

    const formik = useFormik({
        initialValues: {
            message: '',
        },
        onSubmit: values => {
            props.sendMessage(values.message)
        }
    })

    return (
        <form onSubmit={formik.handleSubmit}>
            <input
                id="message"
                name="message"
                type="text"
                placeholder='Enter your message'
                onChange={formik.handleChange}
                value={formik.values.message}/>
            <div>
                <button>Отправить</button>
            </div>
        </form>
    )
}



export default Dialogs;