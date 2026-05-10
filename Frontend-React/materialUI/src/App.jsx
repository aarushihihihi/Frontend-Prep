import { useState } from 'react'

import Buttons from './Components/Buttons'
import SearchBox from './Components/SearchBox'
import InfoBox from './Components/InfoBox'

import WeatherApp from './Components/WeatherApp'

function App() {
  const [count, setCount] = useState(0)

  return (
   <>
  <WeatherApp/>
   
   </>
  )
}

export default App
