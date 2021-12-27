import "./styles.css";
import { useState } from "react";
const INGREDIENTS = [
  "пеперони",
  "анчоусы",
  "ананасы",
  "сыр чеддр",
  "шампиньоны",
];
const Constructor = () => {
  const [prove, setProve] = useState(false);
  const element = INGREDIENTS.map((ing) => {
    return (
      <div className= 'ingredient' key={ing} onClick={() => setProve(!prove)}>
        <span>{prove ? '✔️' : '❌'}</span>
        <p>{ing}</p>
      </div>
    );
  });
  return (
    <div>
      <h3>Ингридиенты</h3>
      {element}
    </div>
  );
};

export default Constructor;
