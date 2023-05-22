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
                <p className="font-bold text-3xl text-[#353839]">
                    Todo App
                </p>
            </div>

            <div className="flex items-center gap-2">
                <p className="text-lg font-semibold text-[#353839] md:hidden">
                    {user.email}
                </p>

                <button
                    className="py-1 border-2 px-4 rounded-lg bg-inherit border-[#ff9494] text-[#ff9494] transition-colors duration-200 hover:bg-[#ff9494] hover:text-white"
                    onClick={logout}
                >
                    Logout
                </button>
            </div>
        </header>
    );
};

export default Header;