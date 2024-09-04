import { useState } from 'react';

export const useForm = (initialForm = {}) => {
    // {
    //     username: '',
    //     email: '',
    //     password: ''
     // }


    const [formState, setFormState] = useState(initialForm)
    


    const onInputChange = ({ target }) => {
        const { name, value } = target
        setFormState({
            ...formState,
            [name]: value
        })
    }
    const onSubmit = (event) => {
        event.preventDefault();
        console.log('Form submitted with:', formState);
        setFormState('')
    };
const onReset = () => {
    event.preventDefault()
    setFormState(initialForm)
}
    return {
        ...formState,
        formState,
        onInputChange,
        onSubmit,
        onReset
    }
}