import AuthForm from "./AuthForm";

const RegisterPage = ({ setIsAuth }) => {
  return <AuthForm isSignUp={true} setIsAuth={setIsAuth} />;
};

export default RegisterPage;
