import { useState } from 'react';

import { Button } from 'flowbite-react';

export const AddTask = ({ onAddTask }) => {
    const className = 'bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
    const [text, setText] = useState('')

    return (


       
        <div className='flex flex-col items-center justify-center  mx-4 md:w-2/4 md:mx-auto my-10 h-10'>
            <input
                value={text}
                onChange={(e) => setText(e.target.value)}
                placeholder="Add tasks"
                type="text"
                id="default-input"
                className={className}
            />
            <Button
            className='w-auto mt-4 md:w-40 font-bold mx-2'
            onClick={() => {
                setText('')
                onAddTask(text)
            }}
            type='submit'>Add Task</Button>
        </div>
        
    )
}
