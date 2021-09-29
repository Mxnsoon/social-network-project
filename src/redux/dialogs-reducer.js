const SEND_MESSAGE = 'SEND-MESSAGE';

let initialState = {
    messages: [
        {id: 1, message: 'Hi'},
        {id: 2, message: 'How is your site?'},
        {id: 3, message: 'Yo'},
        {id: 4, message: 'Yo'},
        {id: 5, message: 'Yo'}
    ],
    dialogs: [
        {id: 1, name: 'Dimych'},
        {id: 2, name: 'Andrey'},
        {id: 3, name: 'Sveta'},
        {id: 4, name: 'Sasha'},
        {id: 5, name: 'Viktor'},
        {id: 6, name: 'Valera'}
    ],
}

export const dialogsReducer = (state = initialState, action) => {

    switch (action.type) {
        case SEND_MESSAGE: {
            let body = action.message;
            return {
                ...state,
                messages: [...state.messages, {id: 10, message: body}],
            }
        }
        default:
            return state;
    }
}

export const sendMessageCreator = (message) => ({type: SEND_MESSAGE, message})

export default dialogsReducer;