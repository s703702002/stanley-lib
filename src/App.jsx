import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0)

  return (
    <button data-testid="main-btn" type="button" onClick={() => setCount((count) => count + 1)}>
      count is: {count}
    </button>
  )
}

export default App
