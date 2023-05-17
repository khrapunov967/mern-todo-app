import { Auth } from "../services/auth";
import { useNavigate } from "react-router-dom";

const Header: React.FC = () => {

    const navigate = useNavigate();

    const logout = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.preventDefault();

        Auth.logout().then(() => {
            navigate("/sign-in");
        });
    };

    return (
        <header className="w-full border-2 p-3 flex justify-between items-center">
            <div>
                <p className="font-bold text-3xl">
                    Todo App
                </p>
            </div>

            <button
                className="border-2 p-1 rounded-lg"
                onClick={logout}
            >
                Logout
            </button>
        </header>
    );
};

export default Header;