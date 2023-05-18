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
        <header className="w-full border-2 p-3 flex justify-between items-center">
            <div>
                <p className="font-bold text-3xl">
                    Todo App
                </p>
            </div>

            <div className="flex items-center gap-2">
                <p>
                    {user.email}
                </p>

                <button
                    className="border-2 p-1 rounded-lg"
                    onClick={logout}
                >
                    Logout
                </button>
            </div>
        </header>
    );
};

export default Header;