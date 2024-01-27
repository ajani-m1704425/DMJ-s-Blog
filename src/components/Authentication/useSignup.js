import { useState } from "react";
import UseAuthContext from "../Context/useAuthContext";
import { ToastContainer, toast } from "react-toastify";

const useSignup = () => {
  const [error, setError] = useState(null);
  const [isLoading, setLoading] = useState(false);
  const { dispatch } = UseAuthContext();

  const signup = async (email, password) => {
    setError(null);
    setLoading(true);

    const response = await fetch(
      "https://dmj-s-blog-backend.vercel.app/api/user/signup",
        {
        mode: 'no-cors',
        method: "POST",
        headers: {
          "Content-Type": "text/plain",
        },
        body: JSON.stringify({ email, password }),
      }
    );

      const json = await response.json();
      
    if (!response.ok && json.status === "00") {
      setError(json);
      setLoading(false);
    //   console.log("User", json);
      toast.error("Error Login in !", {
        position: toast.POSITION.TOP_RIGHT,
      });
    }

    if (response.ok && json.status !== "00") {
      localStorage.setItem("User", JSON.stringify(json));
    //   console.log("User", json);
      dispatch({ type: "LOGIN", payload: json });
      setLoading(false);
      toast.success("Login Success", {
        position: toast.POSITION.TOP_RIGHT,
      });
    }
    };
    
  return { signup, error, isLoading };
};

export default useSignup;
