import React from "react";

export default function Login() {
  return (
    <div>
      <h1> Login </h1>
      <form>
        <label> Email:</label>
        <input type="email" />
        <input type="password" />
        <label> Password </label>
        <button type="submit"> Login </button>
        <a href="#"> Esqueceu sua senha ?</a>
        <a href="#">Cadastrar</a>
      </form>
    </div>
  );
}
