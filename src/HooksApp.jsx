import { NavBar } from '../src/components/common/NavBar';
import { TareaSection } from './components/Tarea/TareaSection';
import { UseEffectSection } from './components/useEffect/UseEffectSection';
import {
  UseFecthSection,
} from './components/useFetchCustom/UseFetchCustomSection';
import { UseStateSection } from './components/UseState/UseStateSection';

function HooksApp() {


  return (
    <>
      <NavBar />
      <section className='flex flex-col md:flex-wrap '>

      <UseStateSection />
      <UseEffectSection />
      <UseFecthSection />
      {/* <UseRefSection /> esta seccion es para ver el uso de useRef Hook */}
      {/* <UseMemoSection/> esta seccion es para ver el uso de useMemo hook */}
      <TareaSection />
      </section>
    </>

  )
}

export default HooksApp
