import React, { useState, useEffect } from 'react'
import './slide.css'
export const Slide = () => {
  const [current, setCurrent] = useState(0)
  const arr = [
    '#dee2e3',
    '#bac0c2',
    '#dee2e3',
    '#bac0c2',
    '#dee2e3',
    '#bac0c2',
    '#dee2e3',
    '#bac0c2',
  ] //total number of slider
  let interval = null
  const nextSlide = () => {
    //set current value with condition when current is "last slide" then set the current value "fist slide"
    clearInterval(interval)
    setCurrent(current === arr.length - 1 ? 0 : current + 1)
  }

  const prevSlide = () => {
    //set current value with condition when current is "fist slide" then set the current value "last slide"
    clearInterval(interval)
    setCurrent(current === 0 ? arr.length - 1 : current - 1)
  }

  useEffect(() => {
    interval = setTimeout(
      () => setCurrent(current === arr.length - 1 ? 0 : current + 1),
      2000,
    )
  }, [current])

  //change current state when click on dot
  const handle = (index) => {
    clearInterval(interval)
    setCurrent(index)
  }

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
                style={{ backgroundColor: data }} ///data contains like : background color which is available inside arr
                key={index}
                className="slide_item"
              >
                {index + 1} th Slider
              </div>
            )}
          </div>
        ))}

        <div className="next_prev">
          {/* previous slide arrow (left arrow) */}
          <button onClick={prevSlide}>&#10094;</button>

          {/* next slide arrow (right arrow) */}
          <button onClick={nextSlide}>&#10095;</button>
        </div>

        {/* this div use for show dots when click on dot then jum specific slide */}

        <div className="dot_container">
          {arr.map((data, index) => (
            <div
              onClick={() => handle(index)} //pass the active index for set the current state
              // condtional className use for change backgoround active dot
              className={index === current ? 'active_dot' : 'de_active_dot'}
            ></div>
          ))}
        </div>
      </div>
    </div>
  )
}
