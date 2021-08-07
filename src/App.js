import './App.css'
import { useState } from 'react'

function App() {
  const [current, setCUrrent] = useState(0)
  const arr = ['red', 'green', 'orange'] //total number of slider

  const nextSlide = () => {
    //set current value with condition when current is "last slide" then set the current value "fist slide"
    setCUrrent(current === arr.length - 1 ? 0 : current + 1)
  }

  const prevSlide = () => {
    //set current value with condition when current is "fist slide" then set the current value "last slide"
    setCUrrent(current === 0 ? arr.length - 1 : current - 1)
  }

  setInterval(() => {}, 3000)

  console.log(current)
  return (
    <div className="App">
      <div className="slide">
        {arr.map((data, index) => (
          <div
            className={index === current ? 'active_slide' : 'de_active_slide'}
          >
            {/* render div with current value */}

            {index === current && (
              <div
                style={{ backgroundColor: data }}
                key={index}
                className="slide_item"
              >
                {index + 1}
              </div>
            )}
          </div>
        ))}

        <div className="next_prev">
          <button onClick={prevSlide}>prev</button>
          <button onClick={nextSlide}>next</button>
        </div>
      </div>
    </div>
  )
}

export default App
