import './App.css'
import { useState } from 'react'

function App() {
  const [name, setName] = useState('')

  return (
    <div className="App">
      <div className="slide">
        {[1].map(() => (
          <div className="slide_item"></div>
        ))}

        <div className="next_prev">
          <button> prev </button>
          <button> next </button>
        </div>
      </div>
    </div>
  )
}

export default App
