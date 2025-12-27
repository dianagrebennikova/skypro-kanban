import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
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

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [error, setError] = useState("");
  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);

  const CORRECT_EMAIL = "test@test.com";
  const CORRECT_PASSWORD = "123456";

  const handleLogin = (e) => {
    e.preventDefault();

    setError("");
    setEmailError(false);
    setPasswordError(false);

    if (email !== CORRECT_EMAIL || password !== CORRECT_PASSWORD) {
      setError(
        "Введенные вами данные не распознаны. Проверьте свой логин и пароль и повторите попытку входа"
      );

      if (email !== CORRECT_EMAIL) setEmailError(true);
      if (password !== CORRECT_PASSWORD) setPasswordError(true);

      return;
    }

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
            $error={emailError}
          />

          <Input
            type="password"
            placeholder="Пароль"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            $error={passwordError}
          />

          <Button type="submit" disabled={!!error}>
            Войти
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
