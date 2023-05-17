import { useState } from "react";
import { Auth } from "../services/auth";
import { useNavigate } from "react-router-dom";

const SignInPage: React.FC = () => {

    const [user, setUser] = useState({
        email: "",
        password: ""
    });

    const navigate = useNavigate();

    const signIn = async () => {
        try {
            await Auth.signIn(user).then(() => {
                navigate("/")
            })

        } catch (error) {
            console.log(error);
        }
    };

    return (
        <section className="w-full flex flex-col justify-center items-center h-[100vh]">
            <div className="p-2 rounded-lg bg-gray-400">
                <h1 className="font-bold text-2xl text-center mb-4">
                    Sign In
                </h1>

                <form className="flex flex-col gap-2">
                    <input 
                        type="email" 
                        placeholder="Email"
                        className="outline-none border-2 border-black p-1 rounded-md"
                        value={user.email}
                        onChange={(e) => setUser({...user, email: e.target.value})} 
                    />

                    <input 
                        type="password" 
                        placeholder="Password"
                        className="outline-none border-2 border-black p-1 rounded-md"
                        value={user.password}
                        onChange={(e) => setUser({...user, password: e.target.value})} 
                    />

                    <button
                        className="border-2 border-black rounded-md text-white p-1 bg-black"
                        onClick={(e) => {
                            e.preventDefault();
                            signIn();
                        }}
                    >
                        Sign In
                    </button>
                </form>
            </div>
        </section>
    );
};

export default SignInPage;