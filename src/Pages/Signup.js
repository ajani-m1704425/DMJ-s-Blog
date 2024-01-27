import { FcGoogle } from "react-icons/fc";
import twitter from "../resources/images/twitter.png";
import React, { useEffect, useState } from "react";
import UseAuthContext from "../components/Context/useAuthContext";
import { ToastContainer, toast } from "react-toastify";
import useSignup from "../components/Authentication/useSignup";

const Signup = (props) => {
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");
    // const [loading, setLoading] = useState(0);
    const { dispatch } = UseAuthContext();
    const { signup, error, isLoading } = useSignup();

    const handlesubmit = async (e) => {
        // setLoading(1);
        e.preventDefault();

        await signup(email, password);
        
        console.log("error at login: ", error);
        // setLoading(0);
    };

    // useEffect(() => {
    //     dispatch({ type: "AUTH" });
    // }, [dispatch]);


    return (
        <div className=" w-screen h-screen flex flex-col justify-center items-center">
            <div className=" bg-[#f8efef] py-[1.875rem] w-[80%] h-fit rounded-lg sm:w-[55%] md:w-[50%] lg:w-[35%] xl:w-[30%] ">
                    <form >
                    <label className="mb-[20px] block text-2xl text-center font-bold text-#546270 md:text-2xl md:mb-5">
                        Create Account
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
                        placeholder="Enter access password"
                        type="password"
                        className="px-4 py-2.5 text-center block w-3/4 mx-auto border-2 border-[#708090] rounded-md md:px-6 md:py-3.5"
                    />
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
                <div className="flex w-fit items-center cursor-pointer py-3 px-10 border rounded-3xl border-[#3b3737]">
                    <div className="text-xl pr-4">
                        <FcGoogle />
                    </div>
                    Sign up with Google
                </div>
                <div className="flex w-fit items-center mt-5 cursor-pointer py-3 px-10 border rounded-3xl border-[#3b3737]">
                    <div className="text-xl pr-4">
                        <img src={twitter} alt="" className="w-[20px]"/>
                    </div>
                    Sign up with Twitter
                </div>
            </div>
            <div className="mt-4">
                <p>Already have an account? <span className="text-[#f1356d]">Sign in</span></p>
            </div>
        </div>
    );
}

export default Signup;