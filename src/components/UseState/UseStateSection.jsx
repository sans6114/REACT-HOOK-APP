import { Wrapper } from '../common/Envoltorio';
import { CounterApp } from './CounterApp';
import { CounterWithCustom } from './CounterWithCustomHook';

export const UseStateSection = () => {

    return (

    <Wrapper>

      <CounterApp title={'UseState'} />
      <CounterWithCustom title={'Use Custom Hook'}/>
    </Wrapper>
 
    )
}