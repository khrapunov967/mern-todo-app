import { Outlet, Navigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth"

const PrivateRoute = () => {
    const { isAuth } = useAuth();

    if (isAuth === undefined) return <p>loading...</p>;

    return isAuth ? <Outlet /> : <Navigate to={"/sign-up"} />;
};

export default PrivateRoute;