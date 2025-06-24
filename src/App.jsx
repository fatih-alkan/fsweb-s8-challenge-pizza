import { useState } from 'react'
import './App.css'
import SiparisForm from './components/SiparisForm.'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <SiparisForm/>
    </>
  )
}

export default App
