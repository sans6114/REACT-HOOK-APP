import {
  Button,
  Card,
} from 'flowbite-react';

import { useCounter } from '../../hooks/useCounter';

export const CounterWithCustom = ({ title }) => {
    const { counter, onIncrement, onDecrement, onReset } = useCounter()

    return (
        <Card href="#" className="w-96 h-96 my-10 flex flex-col text-center">
            <h2 className='text-4xl font-extrabold dark:text-white'>
                {title}
            </h2>
            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white  mb-5">
                {counter}
            </h5>
            

            <div className='flex gap-x-2 mt-auto'>
                <Button className='w-full' onClick={() => onIncrement(2)} pill>+2</Button>
                <Button className='w-full' onClick={onReset} pill>Reset</Button>
                <Button className='w-full' onClick={() => onDecrement(2)} pill>-2</Button>
            </div>
        </Card>
    )
}