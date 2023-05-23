import { Outlet, Navigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth"

const PrivateRoute = () => {
    const { isAuth } = useAuth();

    if (isAuth === undefined) return (
        <div className="z-10 w-full min-h-screen bg-[#000] bg-opacity-50 flex justify-center items-center transition-all duration-200">
            <div className="text-white text-3xl p-3 flex gap-4 bg-[#1c1c1c] rounded-lg">
                Downloading...
            </div>
        </div>
    );

    return isAuth ? <Outlet /> : <Navigate to={"/sign-up"} />;
};

export default PrivateRoute;