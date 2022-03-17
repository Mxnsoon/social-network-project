import * as Yup from "yup";

export const addPostValidator = Yup.object({
    post: Yup.string()
        .max(30, 'Вы превысили максимальное длинну символов(30)')
        .required('Нельзя отправить пустое сообщение')
})

export const sendMessageValidator = Yup.object({
    message: Yup.string()
        .max(30, 'Вы превысили максимальное длинну символов(30)')
        .required('Нельзя отправить пустое сообщение')
})

export const loginValidator = Yup.object({
    email: Yup.string().email('Неправильный email').required('Заполните это поле'),
    password: Yup.string()
        .required('Введите пароль'),
    captcha: Yup.string()
})