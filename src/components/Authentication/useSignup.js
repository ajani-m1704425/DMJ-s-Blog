import { useState } from "react";
import UseAuthContext from "../Context/useAuthContext";
import { toast } from "react-toastify";


const useSignup = () => {
  const [error, setError] = useState(null);
  const [isLoading, setLoading] = useState(false);
    const { dispatch } = UseAuthContext();
    const baseUrl = "https://dmj-s-blog-backend.vercel.app/api/user/signup";

  const signup = async (email, password) => {
    setError(null);
    setLoading(true);

    const response = await fetch( baseUrl, {
        method: "POST",
        // mode: 'no-cors',        
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ email, password }),
      });
      
    //   const response = await axios.post("https://dmj-s-blog-backend.vercel.app/api/user/signup", { email, password });

      const result = await response.json();
      console.log(result)
      
      if (!response.ok && response.status === 400 ) {
        console.log(response)
      setError(result);
      setLoading(false);
    //   console.log("User", json);
      toast.error("Error Login in !", {
        position: 'top-right',
      });
    }

    if (response.ok && result.status !== 400) {
      localStorage.setItem("User", JSON.stringify(result));
    //   console.log("User", json);
      dispatch({ type: "LOGIN", payload: result });
      setLoading(false);
      toast.success("Login Success", {
        position: 'top-right',
      });
    }
    };
    
  return { signup, error, isLoading };
};

export default useSignup;
