import "./styles.css";
import { useState, useEffect } from "react";
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
const Constructor = ({onChangeOrder}) => {
  const [visible,setVisible] = useState(false)
  const [prove, setProve] = useState(INGREDIENTS.map(() => false));
  useEffect(() => {
    const order = INGREDIENTS.filter((el,i) => prove[i])
    onChangeOrder(order)
  },[prove])

  const onIngredient = (position) => {
    setProve(prove.map((el, i) => (i === position ? !el : el)));
  };
  const onList = () => {
    setVisible(!visible)
  }

  return (
    <div className="list">
      <button className="list-btn" onClick={onList}>Ингридиенты {visible ? '⬆️':'⬇️' }</button>
      {visible && INGREDIENTS.map((ing, index) => {
    return (
      <div className="ingredient" key={ing} onClick={() => onIngredient(index)}>
        <span>{prove[index] ? "✔️" : "❌"}</span>
        <p className={prove[index] ? "choosed" : ""}>{ing}</p>
      </div>
    );  
  })}
    </div>
  );
};

export default Constructor;
