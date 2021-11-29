import React, {useState} from "react"

const Button = ()=>{
  const [button,setButton] = useState('No-repeat');
  const onButton = ()=> {
    switch(button){
      default:
        setButton('No-repeat')
        break;
      case 'No-repeat':
        setButton('Repeat All')
        break;
        case 'Repeat All':
          setButton('Repeat one')
          break;
    }  
  }

  return(
<button onClick={onButton}>{button}</button>)
}
export default Button;