import { useState,useRef,useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Button } from 'react-bootstrap'
import { Alert } from 'react-bootstrap'
function App() {
  const inputRef= useRef('blue');
  const [count, setCount] = useState(0);
  const arr=['kunal','sachin','priyanshu'];
    const handleClick=()=>{
      setCount(count + 1);
      inputRef.current = 'green'; // This will not trigger a re-render
    };
  useEffect(() => {
    inputRef.current = 'red'; 
  });
  return (
    <div>
       {/* <h1>welcome: {inputRef.current}</h1> */}
       <div>{count}</div>
        <Button variant="danger" style={{color: 'black', backgroundColor: '#6e6'}} onClick={handleClick}>Click Me</Button>
       <button style={{color: inputRef.current}} onClick={handleClick}>on click</button>
    </div>
  )
}

export default App
