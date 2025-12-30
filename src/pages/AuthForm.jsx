import { Link, useNavigate } from "react-router-dom";
import {Bg, Modal, Wrapper, Title, Form, InputWrapper, Input, Button, FormGroup} from "./AuthForm.styled"

const AuthForm = ({ isSignUp, setIsAuth }) => {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsAuth(true);
    localStorage.setItem("isAuth", "true");
    navigate("/");
  };

  return (
    <Bg>
      <Modal>
        <Wrapper>
          <Title>{isSignUp ? "Регистрация" : "Вход"}</Title>

          <Form onSubmit={handleSubmit}>
            <InputWrapper>
              {isSignUp && <Input type="text" placeholder="Имя" />}

              <Input type="email" placeholder="Эл. почта" />
              <Input type="password" placeholder="Пароль" />
            </InputWrapper>

            <Button type="submit">
              {isSignUp ? "Зарегистрироваться" : "Войти"}
            </Button>

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
