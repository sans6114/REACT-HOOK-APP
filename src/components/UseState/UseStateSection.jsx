import { CounterApp } from './CounterApp';
import { CounterWithCustom } from './CounterWithCustomHook';

export const UseStateSection = () => {

    return (

    <section className='flex items-center justify-center gap-x-2 bg-gray-400 p-4 rounded-3xl mx-40 my-5'>
    <CounterApp title={'UseState'} />
    <CounterWithCustom title={'Use Custom Hook'}/>

  </section>
    )
}