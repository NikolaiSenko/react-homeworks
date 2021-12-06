import "./styles.css";
import { useState } from "react";
const INGREDIENTS = ['пеперони','анчоусы','ананасы','сыр чеддр','шампиньоны']
const Dropdown = () => {
  const [prove, setProve] = useState(false)
  const element = INGREDIENTS.map((ing) =>{
    return(
    <p key={ing}>{ing}</p>
    )
  })
  return (
    <div>
      <h3 onClick={()=>setProve(!prove)}>Ингридиенты</h3>
      {prove && element}
    </div>
  )
};

export default Dropdown;
