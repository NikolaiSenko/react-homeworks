import "./styles.css";
import React,{useState} from "react";

const Counter= () => {
  const [index,setIndex] = useState(0);
  const onMinus =() =>{
    setIndex(index - 1);
  }
  const onPlus =() =>{
    setIndex(index + 1);
  }
  return (<div className='wrapper'>
    <button onClick={onMinus} className='btn'>➖</button>
    <span>{index}</span>
    <button onClick={onPlus} className='btn'>➕</button>
  </div>
  )};

export default Counter;
