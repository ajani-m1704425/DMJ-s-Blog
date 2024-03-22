import { useState } from "react";
import UseAuthContext from "../Context/useAuthContext";
import { toast } from "react-toastify";

const useLogin = () => {
  const [error, setError] = useState(null);
  const [isLoading, setLoading] = useState(false);
    const { dispatch } = UseAuthContext();
    const baseUrl = "https://dmj-s-blog-backend.vercel.app/api/user/login";

  const login = async (email, password) => {
    setError(null);
    setLoading(true);

    const response = await fetch(baseUrl,{
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      }
    );

    const json = await response.json();
    if (!response.ok && response.status === 400) {
        setError(json);
      setLoading(false);
    //   console.log("User", json);
      toast.error("Error Login in !", {
        position: 'top-right',
      });
    }

    if (response.ok && response.status !== 400) {
      localStorage.setItem("User", JSON.stringify(json));
    //   console.log("User", json);
      dispatch({ type: "LOGIN", payload: json });
      setLoading(false);
      toast.success("Login Success", {
        position: 'top-right',
      });
    }
  };
  return { login, error, isLoading };
};

export default useLogin;
