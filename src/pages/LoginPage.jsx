import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { loginUser } from "../services/user";

import {
  LoginForm,
  LoginWrapper,
  Title,
  Input,
  Button,
  RegisterLink,
  ErrorText,
} from "./LoginPage.styled";

const LoginPage = ({ setIsAuth }) => {
  const navigate = useNavigate();

  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");

  const [error, setError] = useState("");
  const [loginError, setLoginError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();

    setError("");
    setLoginError(false);
    setPasswordError(false);

    if (!login || !password) {
      setError("Заполните все поля");
      if (!login) setLoginError(true);
      if (!password) setPasswordError(true);
      return;
    }

    try {
      setLoading(true);

      console.log("Данные для входа:", { login, password });
      const user = await loginUser({ login: login.trim(), password: password.trim() });


      localStorage.setItem("token", user.token);
      localStorage.setItem("userLogin", user.login);
      setIsAuth(true);

      navigate("/");
    } catch (err) {
      setError(err);
      setLoginError(true);
      setPasswordError(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <LoginForm>
      <LoginWrapper>
        <Title>Вход</Title>

        <form onSubmit={handleLogin}>
          <Input
            type="text"
            placeholder="Логин"
            value={login}
            onChange={(e) => setLogin(e.target.value)}
            $error={loginError}
          />

          <Input
            type="password"
            placeholder="Пароль"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            $error={passwordError}
          />

          <Button type="submit" disabled={loading}>
            {loading ? "Входим..." : "Войти"}
          </Button>
          
        </form>

        {error && <ErrorText>{error}</ErrorText>}

        <RegisterLink>
          Нужно зарегистрироваться?{" "}
          <Link to="/register">Регистрируйтесь здесь</Link>
        </RegisterLink>
      </LoginWrapper>
    </LoginForm>
  );
};

export default LoginPage;
