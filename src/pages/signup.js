import React from "react";

export default function SignUp() {
  return (
    <div>
      <h1> Cadastrar </h1>
      <form>
        <label> Name:</label>
        <input type="text" />
        <label> Date of Birth:</label>
        <input type="" />

        <label> Email:</label>
        <input type="email" />
        <input type="password" />
        <label> Password </label>
        <button type="submit"> Cadastrar </button>
      </form>
    </div>
  );
}
