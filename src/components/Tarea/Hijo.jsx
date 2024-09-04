import React from 'react';

import { Button } from 'flowbite-react';

export const Hijo = React.memo(({ numero, incrementar }) => {

    console.log('  Me volví a generar :(  ');

    return (
        <>
        
        <Button className='my-3' onClick={ () => incrementar( numero ) }>
            { numero }
        </Button>
        </>

    )
})
