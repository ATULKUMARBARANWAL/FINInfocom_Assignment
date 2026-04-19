import { useState } from 'react'
 
import HeroSection from './components/sections/HeroSection'
import FeaturesSection from './components/sections/FeaturesSection'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
           <HeroSection />
      <FeaturesSection />
    </>
  )
}

export default App
