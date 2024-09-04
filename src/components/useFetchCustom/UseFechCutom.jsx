import {
  Button,
  Card,
} from 'flowbite-react';

import { useCounter } from '../../hooks/useCounter';
import { useFetch } from '../../hooks/useFetchHook';
import { PokemonCard } from './PokemonCard';

export const UseFetchWithCustom = ({ title }) => {

    const { counter, onIncrement, onDecrement, enabled } = useCounter(1)
    const { data, isLoad, hasError } = useFetch(`https://pokeapi.co/api/v2/pokemon/${counter}`)

    const classDisabled = enabled ? 'cursor-not-allowed bg-gray-500' : '';



    return (
        <div className='w-full mx-4'>
            {isLoad ? (
                <Card href="#" className="flex flex-col text-center w-3/4 mx-auto">
                    <h2 className='text-4xl font-extrabold dark:text-white'>
                        Loading...
                    </h2>
                </Card>
            ) : (
                <PokemonCard id={data.id} name={data.name} sprites={[
                    data.sprites.front_default,
                    data.sprites.front_shiny,
                    data.sprites.front_shiny,
                    data.sprites.back_shiny
                ]} />
            )}

            <div className='flex gap-x-2 mt-10'>
                <Button onClick={(e) => {
                    e.preventDefault();
                    onIncrement(1);
                }}>Siguiente</Button>

                <Button
                    disabled={enabled}
                    className={classDisabled}
                    onClick={(e) => {
                        e.preventDefault();
                        onDecrement(1);
                    }}>Anteriores</Button>
            </div>
        </div>
    )
}