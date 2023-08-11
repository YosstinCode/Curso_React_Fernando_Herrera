import propTypes from 'prop-types'
import { useState } from 'react'
import './styles.css'

const CounterApp = ({ initialCount }) => {
  const [count, setCount] = useState(initialCount)

  const handleAdd = () => setCount(count + 1)

  const handleReset = () => setCount(initialCount)

  const handleSubtract = () => setCount(count - 1)

  return (
    <>
      <h1>Counte App</h1>
      <h2>{count}</h2>
      <button className="btn" onClick={handleAdd}>
        add
      </button>
      <button className="btn btn-yellow" onClick={handleReset}>
        reset
      </button>
      <button className="btn btn-red" onClick={handleSubtract}>
        subtract
      </button>
    </>
  )
}

CounterApp.propTypes = {
  initialCount: propTypes.number.isRequired
}

export default CounterApp
