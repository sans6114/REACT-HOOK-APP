import { NavBar } from '../src/components/common/NavBar';
import { UseReducerSection } from './components/useReducer/useReducerSection';

function HooksApp() {
const title = 'Tasks useReducer'

  return (
    <main>
      <NavBar />
      <section className='flex flex-col md:flex-wrap'>
<UseReducerSection  title={title}/>
      {/* <UseStateSection />
      <UseEffectSection />
      <UseFecthSection /> */}
      {/* <UseRefSection /> esta seccion es para ver el uso de useRef Hook */}
      {/* <UseMemoSection/> esta seccion es para ver el uso de useMemo hook */}
      {/* <TareaSection /> */}
      </section>
    </main>

  )
}

export default HooksApp
