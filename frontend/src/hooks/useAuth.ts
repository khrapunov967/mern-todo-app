import { useState, useEffect } from "react";
import { Auth } from "../services/auth";

export const useAuth = () => {
    const [isAuth, setIsAuth] = useState(false);

    useEffect(() => {
        (async () => {
            const isLoggedIn = await Auth.isLoggedIn();
            return isLoggedIn;

        })()
        .then((value) => {
            setIsAuth(value);
            console.log(isAuth)

        }).catch((reason) => {
            console.log(reason);
        })
    }, []);

    return {
        isAuth
    }
};