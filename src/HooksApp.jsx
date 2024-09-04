import { NavBar } from '../src/components/common/NavBar';
import { UseEffectSection } from './components/useEffect/UseEffectSection';
import {
  UseFecthSection,
} from './components/useFetchCustom/UseFetchCustomSection';
import { UseRefSection } from './components/UseRef/UseRefSection';
import { UseStateSection } from './components/UseState/UseStateSection';

function HooksApp() {


  return (
    <>
      <NavBar />
      <section className='flex flex-col md:flex-wrap '>

      <UseStateSection />
      <UseEffectSection />
      <UseFecthSection />
      <UseRefSection />
      </section>
    </>

  )
}

export default HooksApp
