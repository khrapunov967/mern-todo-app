import { useState } from "react";
import { Auth } from "../services/auth";
import { Link, useNavigate } from "react-router-dom";
import { useNotification } from "../hooks/useNotification";
import Loader from "../components/Loader";

const SignInPage: React.FC = () => {

    const [user, setUser] = useState({
        name: "",
        email: "",
        password: ""
    });

    const [isAuthProcessing, setIsAuthProcessing] = useState(false);

    const navigate = useNavigate();

    const { errorNotification } = useNotification();

    const signUp = async () => {
        try {
            setIsAuthProcessing(true);

            await Auth.signUp(user)
                .then(() => {
                    Auth.signIn({email: user.email, password: user.password})
                        .then(() => {
                            navigate("/");
                        })
                        .catch(() => {
                            errorNotification("Something went wrong!");
                        })
                        .finally(() => {
                            setIsAuthProcessing(false);
                        })
                })
                .catch((reason) => {
                    errorNotification(reason.response.data);

                })
                .finally(() => {
                    setIsAuthProcessing(false);
                })

        } catch (error) {
            errorNotification("Something went wrong!");
        
        } finally {
            setIsAuthProcessing(false);
        }
    };

    return (
        <section className="w-full flex flex-col justify-center items-center h-[100vh]">
            <div className="p-2 rounded-lg bg-inherit border-2 border-[#c5bbe4] w-full max-w-[341px] sm:max-w-[95%]">
                <h1 className="font-bold text-2xl text-center mb-4 text-[#353839]">
                    Sign Up
                </h1>

                <form className="flex flex-col gap-2">
                    <input 
                        type="text" 
                        placeholder="Name"
                        className="text-[#2c2c2c] outline-none border-2 border-[#353839] p-1 rounded-md"
                        value={user.name}
                        onChange={(e) => setUser({...user, name: e.target.value})} 
                    />

                    <input 
                        type="email" 
                        placeholder="Email"
                        className="text-[#2c2c2c] outline-none border-2 border-[#353839] p-1 rounded-md"
                        value={user.email}
                        onChange={(e) => setUser({...user, email: e.target.value})} 
                    />

                    <input 
                        type="password" 
                        placeholder="Password"
                        className="text-[#2c2c2c] outline-none border-2 border-[#353839] p-1 rounded-md"
                        value={user.password}
                        onChange={(e) => setUser({...user, password: e.target.value})} 
                    />

                    <button
                        className="flex w-full justify-center border-2 border-[#2c2c2c] bg-[#353839] rounded-md text-white p-1 transition-colors duration-200 hover:bg-[#2c2c2c]"
                        onClick={(e) => {
                            e.preventDefault();
                            signUp();
                        }}
                    >
                        {isAuthProcessing ? <Loader /> : "Sign Up"}
                    </button>

                    <div className="flex items-center w-full justify-center gap-2">
                        <p className="text-sm">
                            Already have an account?
                        </p>

                        <Link 
                            to={"/sign-in"}
                            className="text-sm text-blue-800 underline"
                        >
                            Sign In
                        </Link>
                    </div>
                </form>
            </div>
        </section>
    );
};

export default SignInPage;