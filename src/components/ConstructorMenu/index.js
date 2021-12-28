import { useState, useEffect } from "react";
import "./styles.css";
import Constructor from "../Constructor";
import Caution from "../Caution";
const ConstructorMenu = () => {
  const [caution, setCaution] = useState(false);
  const [total, setTotal] = useState([]);
  const [disabled, setDisabled] = useState(false);
  useEffect(() => {
    if (total.length === 5) {
      setCaution(true);
      setDisabled(true)
    } else {
      setCaution(false);
      setDisabled(false);
    }
  }, [total]);
  const onClose = () => {
    setCaution(false);
  };
  const onChangeOrder = (order) => {
    setTotal(order);
  };
  return (
    <div className="container">
      <h2 className="header">Выберите ингредиенты для пиццы:</h2>
      <Constructor onChangeOrder={onChangeOrder} disabled={disabled} />
      <div className="total">Ваш выбор: {total.join(" , ")}</div>
      <button className="btn-submit" onClick={() => console.log(total)}>
        Подтвердить заказ
      </button>
      {caution && <Caution onClose={onClose} />}
    </div>
  );
};

export default ConstructorMenu;
