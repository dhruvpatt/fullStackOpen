
import './App.css';

 const App = () =>{ 
  const course = 'Half Stack Application Development'
  const parts = [
    {
      name:'Fundamentals of React',
      exercises: 10,
    },
    {
      name: 'Using props to pass data',
      exercises: 7,
    },
    {
      name:'State of a component',
      exercises: 14,
    }]
  return(
    <div>
      <Header course={course} />
      <Content part1={parts[0].name} exercises1={parts[0].exercises} part2={parts[1].name} exercises2={parts[1].exercises} part3={parts[2].name} exercises3={parts[2].exercises} />
      <Total exercises1={parts[0].exercises} exercises2={parts[1].exercises} exercises3={parts[2].exercises} />
    </div>
  )  
  }

const Header = (props) =>{ 
  return (
    <h1>{props.course}</h1>
  )
}

const Content = (props) =>{
  return(
    <div>
      <Part part={props.part1} exercises={props.exercises1} />
      <Part part={props.part2} exercises={props.exercises2} />
      <Part part={props.part3} exercises={props.exercises3} />
    </div>
  )
}

const Part = (props) =>{
  return(
    <p>
      {props.part} {props.exercises}
    </p>
  )
}

const Total = (props) =>{
  const total = props.exercises1 + props.exercises2 + props.exercises3
  console.log(total)
  return(
    <p>Total Number of Exercises: {total}</p>
  )
}

export default App;