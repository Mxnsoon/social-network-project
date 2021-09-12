import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";

const Dialogs = (props) => {

    let state = props.dialogsPage;

    let onSendMessageClick = () => {
        props.sendMessage();
    }

    let onMessageChange = (e) => {
        let body = e.target.value
        props.updateNewMessageBody(body);
    }

    let dialogsElements = state.dialogs.map( d => <DialogItem name={d.name} key={d.id} id={d.id} /> );
    let messagesElements = state.messages.map( m => <Message message={m.message} key={m.id} />  )
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
            <div><button onClick={onSendMessageClick}>Отправить</button></div>
        </div>
    )
}

export default Dialogs;