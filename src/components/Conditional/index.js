import "./styles.css";
import { useState } from "react";

const SayHi = () => {
  const [loading, setLoading] = useState(false);
  const [greeting, setGreeting] = useState("");
  const sayHi= ()=> {
    setGreeting("Hello!");
    setLoading(false);
  }
  const onButton = () =>{
    setTimeout(sayHi, 3000);
    setGreeting('');
    setLoading(true);
  }
  return (
    <div>
      <button
        onClick={onButton}
      >
        Say hi !
      </button>
      {loading && <div className="loader"></div>}
      {greeting !== "" && <p>{greeting}</p>}
    </div>
  );
};

export default SayHi;
