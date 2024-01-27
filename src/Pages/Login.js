import { FcGoogle } from "react-icons/fc";
import twitter from "../resources/images/twitter.png"

const login = (props) => {
    return (
        <div className=" w-screen h-screen flex flex-col justify-center items-center">
            <div className=" bg-[#f8efef] py-[1.875rem] w-[80%] h-fit rounded-lg sm:w-[55%] md:w-[50%] lg:w-[35%] xl:w-[30%] ">
                    <form >
                    <label className="mb-[20px] block text-2xl text-center font-bold text-#546270 md:text-2xl md:mb-5">
                        Login
                    </label>

                    <input
                        // value={email}
                        placeholder="Enter Your Email"
                        type="email"
                        className="px-4 py-2.5 text-center block w-3/4 mx-auto border-2 border-[#708090] rounded-md mb-4 md:px-6 md:py-3.5"
                    />
                    <input
                        // onChange={(e) => setAccess(e.target.value)}
                        // value={accessCode}
                        placeholder="Enter access password"
                        type="password"
                        className="px-4 py-2.5 text-center block w-3/4 mx-auto border-2 border-[#708090] rounded-md md:px-6 md:py-3.5"
                    />
                    <button
                        // disabled={error ? false : isLoading}
                        className="block text-lg text-white font-bold bg-[#f1356d] py-1.5 px-4 mx-auto mt-5 rounded-md md:mt-6 md:text-lg md:py-1.5 md:px-6"
                    >
                        {/* {loading ? "Loading..." : "Submit"} */}
                        Submit
                    </button>
                </form>
            </div>
            <p className="py-6 text-[#f1356d]">OR</p>
            <div className="">
                <div className="flex w-fit items-center cursor-pointer py-3 px-10 border rounded-3xl border-[#3b3737]">
                    <div className="text-xl pr-4">
                        <FcGoogle />
                    </div>
                    Sign in with Google
                </div>
                <div className="flex w-fit items-center mt-5 cursor-pointer py-3 px-10 border rounded-3xl border-[#3b3737]">
                    <div className="text-xl pr-4">
                        <img src={twitter} alt="" className="w-[20px]"/>
                    </div>
                    Sign in with Twitter
                </div>
            </div>
            <div className="mt-4">
                <p>No account? <span className="text-[#f1356d]">Create one</span></p>
            </div>
        </div>
    );
}

export default login;