import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import api from "~/services/api";
import { userSelector } from "~/store/reducers/users";

import styled from "styled-components";

const Wrapper = styled.section`
  padding: 4em;
  background: papayawhip;
`;

export function Login(props) {
  const { isLogged } = useSelector(userSelector);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState("");
  const [error, setError] = useState("");
  const history = useHistory();

  if (isLogged) {
    history.push("/home");
  }

  async function onSubmit(event) {
    event.preventDefault();
    setLoading(true);
    setError("");

    try {
      let response = await api.post("/token/", { email, password });
      localStorage.setItem("access", response.data.access);

      history.push("/home");
    } catch (error) {
      setError("Unable to login in");
    } finally {
      setLoading(false);
    }
  }
  return (
    <Wrapper>
      <h1> Login </h1>
      <form onSubmit={onSubmit}>
        <label> Email:</label>
        <input
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          type="email"
        />
        <input
          value={password}
          onChange={(event) => setPassword(event.target.value)}
          type="password"
        />
        <label> Password </label>
        <button disabled={loading} type="submit">
          Login
        </button>
        {error}
        <a href="/login"> Forgot password</a>
        <Link to="/signup">Sign up</Link>
      </form>
    </Wrapper>
  );
}

export default Login;
