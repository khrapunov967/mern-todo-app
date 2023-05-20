import { useEffect } from "react";
import { Auth } from "../services/auth";
import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "../hooks/useAppDispatch";
import { useAppSelector } from "../hooks/useAppSelector";
import { fetchUserInfo } from "../store/slices/user";

const Header: React.FC = () => {

    const navigate = useNavigate();

    const user = useAppSelector(state => state.user);
    const dispatch = useAppDispatch();

    const logout = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.preventDefault();

        Auth.logout().then(() => {
            navigate("/sign-in");
        });
    };

    useEffect(() => {
        dispatch(fetchUserInfo());
    }, []);

    return (
        <header className="w-full mb-6 p-3 flex justify-between items-center">
            <div>
                <p className="font-bold text-3xl text-[#2c2c2c]">
                    Todo App
                </p>
            </div>

            <div className="flex items-center gap-2">
                <p className="text-lg font-semibold text-[#2c2c2c]">
                    {user.email}
                </p>

                <button
                    className="py-1 border-2 px-4 rounded-lg bg-red-400 border-red-500 text-white transition-colors duration-200 hover:bg-red-500"
                    onClick={logout}
                >
                    Logout
                </button>
            </div>
        </header>
    );
};

export default Header;