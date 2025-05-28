import React from "react";
import { Link } from "react-router-dom";

const [userName, setUsername] = React.useState("");
const [password, setPassword] = React.useState("");

const LoginForm = () => {
  return (
    <section>
      <h1>Login</h1>
      <form action="">
        <input
          type="text"
          value={userName}
          onChange={({ target }) => setUsername(target.value)}
        />
      </form>
      <Link to={"/login/criar"}>Cadastro</Link>
    </section>
  );
};

export default LoginForm;
