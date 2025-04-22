import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import AIChatbotDemo from './Component/chatbot'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <AIChatbotDemo />
    </>
  )
}

export default App
