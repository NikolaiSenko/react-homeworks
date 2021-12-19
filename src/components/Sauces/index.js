import { useState } from "react";
import "./styles.css";
const SAUCES = [
  {
    image: "https://app.pzzby.com/uploads/photos/jZIGfgJfBy.jpg",
    name: "Пармеджано",
    price: 0.8,
    id: 1,
  },
  {
    image: "https://app.pzzby.com/uploads/photos/LNO0Qbtn7F.jpg",
    name: "Чесночный",
    price: 0.9,
    id: 2,
  },
  {
    image: "https://app.pzzby.com/uploads/photos/7GvxxQcWms.jpg",
    name: "Терияки",
    price: 0.76,
    id: 3,
  },
  {
    image: "https://app.pzzby.com/uploads/photos/qH6e61tx6q.jpg",
    name: "Кисло-сладкий",
    price: 0.99,
    id: 4,
  },
];
const Sauces = () => {
  const [total, setTotal] = useState(0);
  const onChangeSauceCount = (price) => {
      setTotal(total + price)
  };

  return (
    <div className="wrapper">
      <div className="sauces-header">Выберите соусы:</div>
      <div className="total">Итого: {total.toFixed(2)} руб</div>
      <div className="sauce-list">
        {SAUCES.map((sauce) => {
          return (
            <Sauce
              image={sauce.image}
              name={sauce.name}
              price={sauce.price}
              key={sauce.id}
              onChangeSauceCount={onChangeSauceCount}
            />
          );
        })}
      </div>
      <button className="btn-submit" onClick={() => console.log(total)}>
        Подтвердить заказ
      </button>
    </div>
  );
};

export default Sauces;

const Sauce = ({ image, name = "нет названия", price = 0, onChangeSauceCount}, ) => {
  const [count, setCount] = useState(0);

  const onMinus = () => {
    if (!count) {
      return;
    }
    setCount(count - 1);
    onChangeSauceCount(-price)
  };
  const onPlus = () => {
    setCount(count + 1);
    onChangeSauceCount(price)
  };
  return (
    <div className="sauce">
      <img src={image} alt={name} />
      <h4>Соус {name}</h4>
      <h5>{price} руб</h5>
      <div>
        <button onClick={onMinus} className="btn">
          ➖
        </button>
        <span className="counter">{count}</span>
        <button onClick={onPlus} className="btn">
          ➕
        </button>
      </div>
    </div>
  );
};
