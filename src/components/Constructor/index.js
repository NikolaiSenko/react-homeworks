import "./styles.css";
import { useState } from "react";
const INGREDIENTS = [
  "Пеперони",
  "Анчоусы",
  "Ананасы",
  "Сыр чеддр",
  "Шампиньоны",
  "Перчик халапеньо",
  "Опята",
  "Ветчина",
];
const Constructor = () => {
  const [prove, setProve] = useState(INGREDIENTS.map(() => false));
  const onIngredient = (position) => {
    setProve(prove.map((el, i) => (i === position ? !el : el)));
  };
  const element = INGREDIENTS.map((ing, index) => {
    return (
      <div className="ingredient" key={ing} onClick={() => onIngredient(index)}>
        <span>{prove[index] ? "✔️" : "❌"}</span>
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
