import "./styles.css";

const Square= ({cssClass, label }) => {
  return (
  <div className={cssClass}>
    {label}
  </div>
  )};

export default Square;
