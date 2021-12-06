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
      {!isSignedIn && <button onClick={onButton}>Sign in</button>}
      { isSignedIn && <p onClick={onButton}>Hello user!</p>}
    </div>
  );
};

export default Login;
