import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { loginUser, registerUser } from "../services/user";

import {
  Bg,
  Modal,
  Wrapper,
  Title,
  Form,
  InputWrapper,
  Input,
  Button,
  FormGroup,
} from "./AuthForm.styled";

const AuthForm = ({ isSignUp, setIsAuth }) => {
  const navigate = useNavigate();

  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");

  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    if (!login || !password || (isSignUp && !name)) {
      setError("Заполните все поля");
      return;
    }

    try {
      setLoading(true);

      let user;

      if (isSignUp) {
        user = await registerUser({
          login: login.trim(),
          password: password.trim(),
          name: name.trim(),
        });
      } else {
        user = await loginUser({
          login: login.trim(),
          password: password.trim(),
        });
      }

      localStorage.setItem("token", user.token);
      localStorage.setItem("userLogin", user.login);
      setIsAuth(true);
      navigate("/");
    } catch (err) {
      setError(typeof err === "string" ? err : "Ошибка сервера");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Bg>
      <Modal>
        <Wrapper>
          <Title>{isSignUp ? "Регистрация" : "Вход"}</Title>

          <Form onSubmit={handleSubmit}>
            <InputWrapper>
              {isSignUp && (
                <Input
                  type="text"
                  placeholder="Имя"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              )}

              <Input
                type="text"
                placeholder="Логин"
                value={login}
                onChange={(e) => setLogin(e.target.value)}
                autoComplete="username"
              />

              <Input
                type="password"
                placeholder="Пароль"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                autoComplete={isSignUp ? "new-password" : "current-password"}
              />
            </InputWrapper>

            <Button type="submit" disabled={loading}>
              {loading
                ? "Загрузка..."
                : isSignUp
                ? "Зарегистрироваться"
                : "Войти"}
            </Button>

            {error && <p>{error}</p>}

            {!isSignUp && (
              <FormGroup>
                Нужно зарегистрироваться?
                <Link to="/register">Регистрируйтесь здесь</Link>
              </FormGroup>
            )}

            {isSignUp && (
              <FormGroup>
                Есть аккаунт?
                <Link to="/login">Войдите здесь</Link>
              </FormGroup>
            )}
          </Form>
        </Wrapper>
      </Modal>
    </Bg>
  );
};

export default AuthForm;
