import { Wrapper } from '../common/Envoltorio';
import { MemoComponent } from './MemoComponent';
import { MemoWithHook } from './MemoHook';

export const UseMemoSection = () => {



  return (

    <Wrapper>
      <MemoComponent title={'Memo'} />
      <MemoWithHook title={'useMemo'} />
    </Wrapper>

  )
}