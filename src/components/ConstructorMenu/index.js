import { useState } from "react";
import "./styles.css";
import Constructor from "../Constructor";
const ConstructorMenu = () => {
    const [total, setTotal] = useState([]);
    const onChangeOrder = (order) => {
        setTotal(order)
    }
    return (
      <div className="container">
        <h2 className="header">Выберите ингредиенты для пиццы:</h2>
        <Constructor onChangeOrder={onChangeOrder} />
        <div className="total">Ваш выбор: {total.join(' , ')}</div>
        <button className="btn-submit" onClick={() => console.log(total)}>
          Подтвердить заказ
        </button>
      </div>
    );
  };
  
  export default ConstructorMenu;
  