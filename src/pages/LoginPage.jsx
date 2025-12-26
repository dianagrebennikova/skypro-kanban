import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import {
    LoginForm,
  LoginWrapper,
  Title,
  Input,
  Button,
  RegisterLink,
} from "./LoginPage.styled";

const LoginPage = ({ setIsAuth }) => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    setIsAuth(true);
    localStorage.setItem("isAuth", "true");
    navigate("/");
  };

  return (
    <LoginForm>
      <LoginWrapper>
        <Title>Вход</Title>
        <form onSubmit={handleLogin}>
          <Input
            type="email"
            placeholder="Эл. почта"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <Input
            type="password"
            placeholder="Пароль"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button type="submit">Войти</Button>
        </form>
        <RegisterLink>
          Нужно зарегистрироваться?{" "}
          <Link to="/register">Регистрируйтесь здесь</Link>
        </RegisterLink>
      </LoginWrapper>
    </LoginForm>
  );
};

export default LoginPage;
