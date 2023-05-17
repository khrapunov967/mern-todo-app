import { Outlet, Navigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth"

const PrivateRoute = () => {
    const { isAuth } = useAuth();

    return isAuth ? <Outlet /> : <Navigate to={"/sign-up"} />;
};

export default PrivateRoute;