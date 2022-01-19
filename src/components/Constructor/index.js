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
const Constructor = ({ onChangeOrder, disabled }) => {
  const [visible, setVisible] = useState(false);
  const [prove, setProve] = useState(INGREDIENTS.map(() => false));
  useEffect(() => {
    const order = INGREDIENTS.filter((el, i) => prove[i]);
    onChangeOrder(order);
  }, [prove]);

  const onIngredient = (position) => {
    setProve(prove.map((el, i) => (i === position ? !el : el)));
  };
  const onList = () => {
    setVisible(!visible);
  };

  return (
    <div className="wrapper">
      <button className="list-btn" onClick={onList}>
        Ингредиенты {visible ? "⬆️" : "⬇️"}
      </button>
      <div className="list">
        {visible &&
          INGREDIENTS.map((ing, index) => {
            return (
              <div
                className="ingredient"
                key={ing}
                onClick={() => onIngredient(index)}
              >
                <button className={prove[index] ? "btn choosed" : "btn"} disabled={!prove[index] && disabled} >
                  <span>{prove[index] ? "✔️" : "❌"}</span>
                  {ing}
                </button>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default Constructor;
