import {
  Button,
  Card,
} from 'flowbite-react';

import { useForm } from '../../hooks/useFormHook';

export const FormWithCustom = ({ title }) => {
    const { formState, onInputChange, onSubmit, username, email, password, onReset } = useForm({ username: '', email: '', password: '' })

    // const { username, email, password } = formState

    const className = 'bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'

    return (
        <Card href="#" className="my-10 flex flex-col text-center">
            <h2 className='text-4xl font-extrabold dark:text-white'>
                {title}
            </h2>

            <form
                aria-label='form'
                className='flex flex-col gap-y-2'
                onSubmit={onSubmit}
            >

                <input
                    onChange={onInputChange}
                    name='username'
                    value={username}
                    placeholder="username"
                    type="text"
                    id="default-input"
                    className={className}
                />

                <input
                    onChange={onInputChange}
                    name='email'
                    value={email}
                    placeholder="email@ejemplo.com"
                    type="text"
                    id="default-input"
                    className={className}
                />
                <input
                    onChange={onInputChange}
                    name='password'
                    value={password}
                    placeholder="password"
                    type="text"
                    id="default-input"
                    className={className}
                />

                <Button type='submit'>Submit</Button>
                <Button onClick={onReset} type='submit'>reset</Button>
            </form>
        </Card>
    )
}