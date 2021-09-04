import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";

const Dialogs = (props) => {

    let newMessage = React.createRef();

    let addMessage = () => {
        props.addMessage();
    }

    let onMessageChange = () => {
        let text = newMessage.current.value;
        props.updateNewMessageText(text);
    }

    let dialogsElements = props.dialogsPage.dialogs.map( d => <DialogItem name={d.name} id={d.id} /> );
    let messagesElements = props.dialogsPage.messages.map( m => <Message message={m.message} />  )

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                { dialogsElements }
            </div>
            <div className={s.messages}>
                { messagesElements }
            </div>
            <textarea onChange={onMessageChange} ref={newMessage} value={props.newMessageText} />
            <button onClick={addMessage}>Отправить</button>
        </div>
    )
}

export default Dialogs;