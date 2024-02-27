import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import JSInterview1 from './Components/JavascriptInterviews/JSInterview1'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <JSInterview1/>
    </>
  )
}

export default App
