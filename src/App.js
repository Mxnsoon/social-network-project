import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Dialogs from "./components/Dialogs/Dialogs";
import {Route} from "react-router-dom";

const App = (props) => {

    return (
        <div className='app-wrapper'>
            <Header/>
            <Navbar state={props.state.sidebar.friends}/>
            <div className='app-wrapper-content'>
                <Route path='/dialogs' render={() => <Dialogs
                    newMessageText={props.state.dialogsPage.newMessageText}
                    dialogsPage={props.state.dialogsPage}
                    updateNewMessageText={props.updateNewMessageText}
                    addMessage={props.addMessage}/>}/>
                <Route path='/profile' render={() => <Profile
                    profilePage={props.state.profilePage}
                    updateNewPostText={props.updateNewPostText}
                    addPost={props.addPost}/>}/>

            </div>
        </div>
    );
}

export default App;