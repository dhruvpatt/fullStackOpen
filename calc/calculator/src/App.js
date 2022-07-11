import './App.css';
import { useState } from 'react';




function App() {
  return (
    <div className="container">
    <div className="screen">
      <Screen className='screen-comp'/>
    </div>
    <div className='firstRow'>
      <Rows number1='7' number2='8' number3='9' operation='/' />
    </div>
    <div className="secondRow">
      <Rows number1='4' number2='5' number3='6' operation='X' />
    </div>
    <div className="thirdRow">
      <Rows number1='1' number2='2' number3='3' operation='-' />
    </div>
    <div className="fourthRow">
      <Rows number1='0' number2='.' number3='=' operation='+' />
    </div>
    </div>
  );
}

function Button(props) {
  const handleClick = (e) => {
     
  }
  return(
    <button onClick={handleClick}>{props.number}</button>
  )
}

function Rows(props) {
  return (
    <div className="buttonRows">
      <Button number={props.number1} />
      <Button number={props.number2} />
      <Button number={props.number3} />
      <Button number={props.operation} />
    </div>
  )
}

function Screen(props) {
  const [screen, setScreen] = useState('')

  const changeScreen = () => {


  }

  return(
    <div className="screenRow">
    <input type="text" readOnly className='screen-comp' />
    </div>
  )
}

export default App;
