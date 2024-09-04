import {
  useCallback,
  useState,
} from 'react';

import { Hijo } from './Hijo';

export const Padre = () => {

    const numeros = [2, 4, 6, 8, 10];
    const [valor, setValor] = useState(0);


    const incrementFather = useCallback(
        (value) => {
          setValor( (c) => c + value );
        },
        [],
      );




    return (
        <div>
            <h1 className='text-xl font-bold'>Padre</h1>
            <p className='font-bold'> Total: {valor} </p>

            <hr />
            <div className='flex gap-x-4'>
                {
                    numeros.map(n => (
                        <Hijo
                            key={n}
                            numero={n}
                            incrementar={incrementFather}
                        />
                    ))
                }

            </div>
            {/* <Hijo /> */}
        </div>
    )
}
