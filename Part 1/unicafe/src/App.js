import React, { useState } from 'react'

const Button = (props) => (
  <button onClick={props.handleClick}>
    {props.text}
  </button>
)

const Display = (props) => (
  <div>
    {props.info} {props.text} {props.units}
  </div>
)

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const handleClickFunc = (rating) => {
    if (rating === "good") setGood(good+1);
    else if (rating === "neutral") setNeutral(neutral+1);
    else  setBad(bad+1);
  }

  const Sum = () => (good+neutral+bad);
  const average = () => ((good+neutral+bad)/3)
  const percentPositive = () => ((good/(neutral+bad+good))*100)

  return (
    <div>
      <h1>Feedback Sheet</h1>
        <Button handleClick={() => handleClickFunc("good")} text="good"/>
        <Button handleClick={() => handleClickFunc("neutral")} text="neutral"/>
        <Button handleClick={() => handleClickFunc("bad")} text="bad"/>
      <h2>Statistics</h2>
        <Display text={good} info="good"/>
        <Display text={neutral} info="neutral"/>
        <Display text={bad} info="bad"/>
        <Display text={Sum()} info="all"/>
        <Display text={average()} info="average"/>
        <Display text={percentPositive()} info="positive" units="%"/>
    </div>
  )
}

export default App