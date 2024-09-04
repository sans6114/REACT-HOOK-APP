import { useState } from 'react';

import {
  Button,
  Card,
} from 'flowbite-react';

import { useCounter } from '../../hooks/useCounter';
import { Small } from './Small';

export const MemoWithHook = ({ title }) => {

    const [show, setShow] = useState(false)
    const { counter, onIncrement, onDecrement } = useCounter()
console.log(show)
    return (

        <Card href="#" className="w-96 h-96 my-10 flex flex-col text-center">
            <h2 className='text-4xl font-extrabold dark:text-white'>
                {title}
                Coutnter: <Small value={counter} />
            </h2>

            <div className='flex gap-x-2 mt-auto'>
                <Button className='w-full' onClick={(e) => {
                    e.preventDefault()
                    onIncrement(1)
                }} pill>+2</Button>

                <Button className='w-full' onClick={(e) => {
                    e.preventDefault()
                    onDecrement(1)
                }} pill>-2</Button>
            </div>
            <Button

                onClick={(e) => {
                    e.preventDefault()
                    setShow(!show)
                }}
            >Show/hide {JSON.stringify(show)}</Button>

        </Card>
    )
}