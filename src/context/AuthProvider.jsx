    import { useEffect, useState } from "react";
    import { AuthContext } from "./AuthContext";
    import { loginUser, registerUser } from "../services/user";

    export const AuthProvider = ({ children }) => {
    const [isAuth, setIsAuth] = useState(
        localStorage.getItem("isAuth") === "true"
    );

    const [user, setUser] = useState(
        localStorage.getItem("userLogin")
        ? { login: localStorage.getItem("userLogin") }
        : null
    );

    useEffect(() => {
        localStorage.setItem("isAuth", isAuth);
    }, [isAuth]);

    const login = async ({ login, password }) => {
        const userData = await loginUser({ login, password });

        localStorage.setItem("token", userData.token);
        localStorage.setItem("userLogin", userData.login);

        setUser({ login: userData.login });
        setIsAuth(true);
    };

    const register = async ({ login, password, name }) => {
        const userData = await registerUser({ login, password, name });

        localStorage.setItem("token", userData.token);
        localStorage.setItem("userLogin", userData.login);

        setUser({ login: userData.login });
        setIsAuth(true);
    };

    const logout = () => {
        localStorage.clear();
        setUser(null);
        setIsAuth(false);
    };

    return (
        <AuthContext.Provider value={{ isAuth, user, login, register, logout }}>
        {children}
        </AuthContext.Provider>
    );
    };
