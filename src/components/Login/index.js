import "./styles.css";
import { useState } from "react";

const Login = () => {
  const [isSignedIn, setIsSignedIn] = useState(false);
  const sayHi = () => {
    setIsSignedIn(!isSignedIn);
  };
  const onButton = () => {
    setTimeout(sayHi, 3000);
  };
  return (
    <div>
      {isSignedIn ? <p onClick={onButton}>Hello user!</p> :<button onClick={onButton}>Sign in</button>}
    </div>
  );
};

export default Login;
