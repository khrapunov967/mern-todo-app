import { useState, useEffect } from "react";
import { Auth } from "../services/auth";

export const useAuth = () => {
    const [isAuth, setIsAuth] = useState<boolean>();

    useEffect(() => {
        (async () => {
            const isLoggedIn = await Auth.isLoggedIn();
            return isLoggedIn;

        })()
        .then((value) => {
            setIsAuth(value);

        }).catch((reason) => {
            setIsAuth(false);
        })
    }, []);

    return {
        isAuth
    }
};