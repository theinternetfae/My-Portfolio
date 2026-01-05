import { useState } from 'react'
import Body from "./Body.jsx";

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='test'>
      <Body />
    </div>
  )
}

export default App