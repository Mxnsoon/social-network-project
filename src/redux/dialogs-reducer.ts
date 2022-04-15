import {InferActionsTypes} from "./redux-store";

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

type ActionsType = InferActionsTypes<typeof actions>

export const dialogsReducer = (state = initialState, action: ActionsType): InitialStateType => {

    switch (action.type) {
        case 'SN/DIALOGS/SEND-MESSAGE': {
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

export const actions = {
    sendMessageCreator: (message: string) => ({type: 'SN/DIALOGS/SEND-MESSAGE', message} as const)
}

export default dialogsReducer;