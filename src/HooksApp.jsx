import { NavBar } from './components/NavBar';
import { UseEffectSection } from './components/useEffect/UseEffectSection';
import { UseStateSection } from './components/UseState/UseStateSection';

function HooksApp() {


  return (
    <>
      <NavBar />
      <UseStateSection />
      <UseEffectSection />
    </>

  )
}

export default HooksApp
