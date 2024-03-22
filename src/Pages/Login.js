import { useState } from "react";
import useLogin from "../components/Authentication/useLogin";
import { Link } from "react-router-dom";
import TwitterSignin from "../components/socialAuth/TwitterSignin";
import GoogleSignin from "../components/socialAuth/GoogleSignin";

const Login = (props) => {
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");
    const { login, error, isLoading } = useLogin();

    const handlesubmit = async (e) => {
        e.preventDefault();

        await login(email, password);

        console.log("error at login: ", error);
    };


    return (
        <div className=" w-screen h-screen flex flex-col justify-center items-center">
            <div className=" bg-[#f8efef] py-[1.875rem] w-[80%] h-fit rounded-lg sm:w-[55%] md:w-[50%] lg:w-[35%] xl:w-[30%] ">
                    <form >
                    <label className="mb-[20px] block text-2xl text-center font-bold text-#546270 md:text-2xl md:mb-5">
                        Login
                    </label>

                    <input
                        onChange={(e) => setEmail(e.target.value)}
                        value={email}
                        placeholder="Enter Your Email"
                        type="email"
                        className="px-4 py-2.5 text-center block w-3/4 mx-auto border-2 border-[#708090] rounded-md mb-4 md:px-6 md:py-3.5"
                    />
                    <input
                        onChange={(e) => setPassword(e.target.value)}
                        value={password}
                        placeholder="Enter password"
                        type="password"
                        className="px-4 py-2.5 text-center block w-3/4 mx-auto border-2 border-[#708090] rounded-md md:px-6 md:py-3.5"
                    />
                    {error && <div className="text-base text-[#f1356d] pt-2 text-center ">{error.error}</div>}
                    <button
                        onClick={handlesubmit}
                        disabled={error ? false : isLoading}
                        className="block text-lg text-white font-bold bg-[#f1356d] py-1.5 px-4 mx-auto mt-5 rounded-md md:mt-6 md:text-lg md:py-1.5 md:px-6"
                    >
                        {isLoading ? "Loading..." : "Submit"}
                    </button>
                    
                </form>
            </div>
            <p className="py-6 text-[#f1356d]">OR</p>
            <div className="">
                <GoogleSignin />
                <TwitterSignin />
            </div>
            <div className="mt-4">
                <p>No account? <Link to="/signup"><span className="text-[#f1356d] cursor-pointer" >Create one</span>
                </Link></p>
            </div>
        </div>
    );
}

export default Login;