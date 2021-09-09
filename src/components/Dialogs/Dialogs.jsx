import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {sendMessageCreator, updateNewMessageBodyCreator} from "../../redux/dialogs-reducer";

const Dialogs = (props) => {

    let state = props.store.getState().dialogsPage;

    let sendMessage = () => {
        props.store.dispatch(sendMessageCreator());
    }

    let onMessageChange = (e) => {
        let body = e.target.value
        props.store.dispatch(updateNewMessageBodyCreator(body));
    }

    let dialogsElements = state.dialogs.map( d => <DialogItem name={d.name} id={d.id} /> );
    let messagesElements = state.messages.map( m => <Message message={m.message} />  )
    let newMessageBody = state.newMessageText

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                { dialogsElements }
            </div>
            <div className={s.messages}>
                <div> { messagesElements } </div>
            </div>
            <div><textarea
                placeholder='Enter your message'
                onChange={onMessageChange}
                value={newMessageBody} />
            </div>
            <div><button onClick={sendMessage}>Отправить</button></div>
        </div>
    )
}

export default Dialogs;