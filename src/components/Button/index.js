import React, {useState} from "react"
const array = ['No-repeat', 'Repeat All', 'Repeat one'];
const Button = ()=>{
  const [index,setIndex] = useState(0);
  const onButton = ()=> {
    if (index === array.length - 1){
      setIndex(0)
    } else {
      setIndex(index + 1);
    }
  }
  return(
<button onClick={onButton}>{array[index]}</button>)
}
export default Button;