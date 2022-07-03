
import './App.css';

 const App = () =>{ 
  const course = 'Half Stack Application Development'
  const part1 = 'Fundamentals of React'
  const exercizes1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  return(
    <div>
      <Header course={course} />
      <Content part1={part1} exercizes1={exercises2} part2={part2} exercises2={exercises2} part3={part3} exercises3={exercises3} />
      <Total exercizes1={exercises2} exercises2={exercises2} exercises3={exercises3} />
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
      <Part part={props.part1} exercizes={props.exercizes1} />
      <Part part={props.part2} exercizes={props.exercizes2} />
      <Part part={props.part3} exercizes={props.exercizes3} />
    </div>
  )
}

const Total = (props) =>{
  return(
    <p>Total Number of Exercizes: {props.exercizes1+ props.exercises2 + props.exercises3}</p>
  )
}
export default App;

const Part = (props) =>{
  return(
    <p>
      {props.part} {props.exercizes}
    </p>
  )
}
