import { useState } from 'react';

import {
  Button,
  Card,
} from 'flowbite-react';

export const CounterApp = ({title}) => {
    const [state, setcounter] = useState({
        counter1: 10,
        counter2: 20,
        counter3: 30,
    })
const {counter1,counter2,counter3} = state

    const onNewCounterIncrement = () => {
setcounter({
    ...state,
    counter1: counter1 + 1
})
    }
    const onNewCounterDecrement = () => {
        setcounter({
            ...state,
            counter1: counter1 - 1
        })
            }

    return (
        <Card href="#" className="w-96 h-96 my-10 flex flex-col text-center">
            <h2 className='text-4xl font-extrabold dark:text-white'>
                {title}
            </h2>
            <div className='flex flex-col'>

            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white mb-5">
                Counter 1: {counter1}
            </h5>
            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white  mb-5">
                Counter 2: {counter2}
            </h5>
            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white  mb-5">
                Counter 3: {counter3}
            </h5>
            </div>
            <div className='flex gap-x-2 mt-auto'>
                <Button className='w-full' onClick={onNewCounterIncrement} pill>+1</Button>
                <Button className='w-full' onClick={onNewCounterDecrement} pill>-1</Button>
            </div>
        </Card>
    )
}