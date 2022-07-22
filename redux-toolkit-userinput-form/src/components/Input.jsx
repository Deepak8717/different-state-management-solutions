import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setUser } from "../modules/user";
const Input = () => {
  const userInfo = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const [name, setName] = useState(userInfo.name);
  const [email, setEmail] = useState(userInfo.email);
  const submit = () => {
    dispatch(setUser({ name: name, email: email }));
  };
  return (
    <div
      style={{
        border: "1px solid #444",
        borderRadius: "8px",
        padding: "12px",
        margin: "6px",
      }}
    >
      <h2>Input</h2>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <br />
      <input
        type="text"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <br />
      <button onClick={submit}>Submit</button>
    </div>
  );
};

export default Input;
