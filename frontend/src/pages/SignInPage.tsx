import { useState } from "react";
import { Auth } from "../services/auth";
import { Link, useNavigate } from "react-router-dom";

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
            <div className="p-2 rounded-lg bg-yellow-200 border-2 border-yellow-300">
                <h1 className="font-bold text-2xl text-center mb-4 text-[#2c2c2c]">
                    Sign In
                </h1>

                <form className="flex flex-col gap-2 bg-transparent">
                    <input 
                        type="email" 
                        placeholder="Email"
                        className="text-[#2c2c2c] outline-none border-2 border-black p-1 rounded-md"
                        value={user.email}
                        onChange={(e) => setUser({...user, email: e.target.value})} 
                    />

                    <input 
                        type="password" 
                        placeholder="Password"
                        className="text-[#2c2c2c] outline-none border-2 border-black p-1 rounded-md"
                        value={user.password}
                        onChange={(e) => setUser({...user, password: e.target.value})} 
                    />

                    <button
                        className="border-2 border-black bg-[#2c2c2c] rounded-md text-white p-1 bg-black"
                        onClick={(e) => {
                            e.preventDefault();
                            signIn();
                        }}
                    >
                        Sign In
                    </button>

                    <div className="flex items-center w-full justify-center gap-2">
                        <p className="text-sm">
                            Don't have an account?
                        </p>

                        <Link 
                            to={"/sign-up"}
                            className="text-sm text-blue-800 underline"
                        >
                            Sign Up
                        </Link>
                    </div>
                </form>
            </div>
        </section>
    );
};

export default SignInPage;