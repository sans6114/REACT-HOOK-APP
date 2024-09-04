import { useRef } from 'react';

import {
  Button,
  Card,
} from 'flowbite-react';

export const FocusScreen = ({ title }) => {


    const inputRef = useRef()
const setFocus = () => {
    inputRef.current.select()
}


    const className = 'bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
    return (
        <Card href="#" className="w-96 h-96 my-10 flex flex-col text-center">
                <input
                    // onChange={onInputChange}
                    name='username'
                    ref={inputRef}
                    placeholder="Ingrese su nombre"
                    type="text"
                    id="default-input"
                    className={className}
                />
                <Button onClick={setFocus}>Set focus</Button>
            
        </Card>
    )
}