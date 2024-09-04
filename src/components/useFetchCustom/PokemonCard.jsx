import React from 'react';

import {
  Card,
  Carousel,
} from 'flowbite-react';

export const PokemonCard = ({ id, name, sprites = [] }) => {



    console.log(sprites)
    return (
        <Card>
            <div className="h-56 sm:h-64">
                <Carousel slideInterval={5000}>
                    {
                        sprites.map(img => (
                            <img
                                className='w-3/4 h-full object-contain mx-auto'
                                key={img}
                                src={img}
                                alt={`${name} sprite`}
                            />
                        ))
                    }
                </Carousel>
            </div>


            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                #{id} - {name}
            </h5>

        </Card>
    )
}
