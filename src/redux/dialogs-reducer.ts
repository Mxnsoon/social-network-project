const SEND_MESSAGE = 'SEND-MESSAGE';

type DialogType = {
    id: number
    name: string
}

type MessageType = {
    id: number
    message: string
}

let initialState = {
    messages: [
        {id: 1, message: 'Hi'},
        {id: 2, message: 'How is your site?'},
        {id: 3, message: 'Yo'},
        {id: 4, message: 'Yo'},
        {id: 5, message: 'Yo'}
    ] as Array<MessageType>,
    dialogs: [
        {id: 1, name: 'Dimych'},
        {id: 2, name: 'Andrey'},
        {id: 3, name: 'Sveta'},
        {id: 4, name: 'Sasha'},
        {id: 5, name: 'Viktor'},
        {id: 6, name: 'Valera'}
    ] as Array<DialogType>,
}

export type InitialStateType = typeof initialState

export const dialogsReducer = (state = initialState, action: any): InitialStateType => {

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

type SendMessageCreator = {
    type: typeof SEND_MESSAGE
    message: string
}

export const sendMessageCreator = (message: string): SendMessageCreator => ({type: SEND_MESSAGE, message})

export default dialogsReducer;