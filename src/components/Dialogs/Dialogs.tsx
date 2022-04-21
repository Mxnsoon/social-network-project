import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {FormikProps, useFormik} from "formik";
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import {sendMessageValidator} from "../../utils/validators/validators";
import {InitialStateType} from "../../redux/dialogs-reducer";

type PropsType = {
    dialogsPage: InitialStateType
    sendMessage: (message: string) => void
}

const Dialogs: React.FC<PropsType> = (props) => {

    let state = props.dialogsPage;

    let dialogsElements = state.dialogs.map(d => <DialogItem name={d.name} key={d.id} id={d.id}/>);
    let messagesElements = state.messages.map(m => <Message message={m.message} key={m.id}/>)

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

type DialogsValuesType = {
    message: string
}

type AddMessageFormType = {
    sendMessage: (message: string) => void
}

const AddMessageForm: React.FC<AddMessageFormType> = (props) => {

    const formik: FormikProps<DialogsValuesType> = useFormik<DialogsValuesType>({
        initialValues: {
            message: '',
        },
        validationSchema: sendMessageValidator,
        onSubmit: (values, actions) => {
            props.sendMessage(values.message)
            actions.resetForm()
        }
    })

    return (
        <form onSubmit={formik.handleSubmit}>
            <TextField
                variant="standard"
                id="message"
                name="message"
                type="text"
                placeholder='Enter your message'
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={formik.touched.message && Boolean(formik.errors.message)}
                helperText={formik.touched.message && formik.errors.message}
                value={formik.values.message}/>
                <Button type="submit" color="primary" variant="contained" >Отправить</Button>
        </form>
    )
}



export default Dialogs;