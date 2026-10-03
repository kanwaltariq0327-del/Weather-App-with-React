import { useState } from 'react'
import WeatherInfo from './Components/WeatherInfo'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <WeatherInfo />
    </>
  )
}

export default App
