import React, {useEffect,useState } from "react";
import "./styles.css";
import axios from "axios";
const UserLogin = () => {

  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [user, setUser] = useState({});

  const fullname = user._id ? `${user.name.first} ${user.name.last}` : '';

   const onSubmit = async () => {
    try {
      const response = await axios.post('http://localhost:3001/auth/sign-in', {
        phone,
        password,
      });
      setUser(response.data);

    } catch (err) {
      setError(err.response.data);
    }
  }

  useEffect(() => {
    if (password.length === 3) {
      onSubmit();
    }
  }, [password]);

  useEffect(() => {
    if (
        phone.length === 13 &&
        !/(^\+)(375)(29|25|17|33|44)([0-9]{7})/.test(phone) &&
        !error
      ) {
        setError("Проверьте правильность номера телефона");
      }
  }, [phone, error]);

  const onChangePassword = (event) => {
    setPassword(event.target.value);
  }

  const onReset = () => {
    setPassword("");
    setPhone("");
  }

  // +19254223749

  return (
    <div className="page">
      <input
        type="text"
        onChange={(event) => setPhone(event.target.value)}
        placeholder="phone"
        value={phone}
      />
      <input
        type="text"
        placeholder="password"
        onChange={onChangePassword}
        value={password}
      />
      <div>
        Hello, {fullname}
      </div>
      <div>
        {error}
      </div>
      <button onClick={onReset}>Reset</button>
    </div>
  )
}

export default UserLogin;
