import React from 'react'
const Header = (props) => {
 return <h1>{props.name}</h1>
}
const Part = (props) => {
  return <p>{props.name} {props.num1}</p>
}
const Content = (props) => {
  return(
    <div>
      <Part name={props.name[0]} num1={props.exercise[0]}/>
      <Part name={props.name[1]} num1={props.exercise[1]}/>
      <Part name={props.name[2]} num1={props.exercise[2]}/>
    </div>
  )
 }

 const Total = (props) => {
  return <p> Number of exercises {props.num1 + props.num2 +props.num3}</p>
 }

const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  return (
    <div>
      <Header name={course} />
      <Content name={[part1,part2,part3]} exercise={[exercises1,exercises2,exercises3]}/>
      <Total num1={exercises1} num2={exercises2} num3={exercises3}/>
    </div>
  )
}

export default App