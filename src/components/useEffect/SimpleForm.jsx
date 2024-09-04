import {
  useEffect,
  useState,
} from 'react';

import {
  Button,
  Card,
} from 'flowbite-react';

import { Message } from './Message';

export const SimpleForm = ({ title }) => {

    const [formState, setFormState] = useState({
        username: 'santiago',
        email: 'santiago@gmail.com'
    })
    const { username, email } = formState


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
    };

    useEffect(() => {
        console.log('useeffect used')
    }, [formState])

    
    useEffect(() => {
        console.log('useeffect used with email')
    }, [email])


    const className = 'bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'

    return (
        <Card href="#" className="my-10 flex flex-col text-center">
            <h2 className='text-4xl font-extrabold dark:text-white'>
                {title}
            </h2>
            <div className='flex flex-col'>
                <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white mb-5">
                    Formulario:
                </h5>
            </div>


            <form
                aria-label='form'
                className='flex flex-col gap-y-2'
                onSubmit={onSubmit}
            >

                <input
                    onChange={onInputChange}
                    name='username'
                    value={username}
                    placeholder="Search category"
                    type="text"
                    id="default-input"
                    className={className}
                />

                <input
                    onChange={onInputChange}
                    name='email'
                    value={email}
                    placeholder="Search category"
                    type="text"
                    id="default-input"
                    className={className}
                />


                <Button type='submit'>Search</Button>
            </form>
            <h5 className="text-sm font-bold tracking-tight text-gray-900 dark:text-white mb-5">
                    if you put santiago2, in Username you will have message
                </h5>
            {
                (username === 'santiago2' && <Message/>)
            }



        </Card>
    )
}