import { Wrapper } from '../common/Envoltorio';
import { FormWithCustom } from './FormWithCustomHook';
import { SimpleForm } from './SimpleForm';

export const UseEffectSection = () => {

    return (

        <Wrapper>
            <SimpleForm title={'Use Effect'} />
            <FormWithCustom title={'Form with custom HOOK'}/>
        </Wrapper>

        
    )
}