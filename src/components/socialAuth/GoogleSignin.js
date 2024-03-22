import UseAuthContext from "../Context/useAuthContext";
import { FcGoogle } from "react-icons/fc";

const GoogleSignin = (props) => {

    const {dispatch } = UseAuthContext();
    const handleGoogle =  () => {
    const GoogleAuthWindow = window.open("https://dmj-s-blog-backend.vercel.app/api/user/auth/google", "_blank");

    const checkWindowLocation = setInterval(() => {
      try {
        // Check if the Twitter authentication process is complete
        if (GoogleAuthWindow.location.href.startsWith('http://localhost:3000')) {
          // Parse URL parameters to extract user details
          const urlParams = new URLSearchParams(GoogleAuthWindow.location.search);
          const userJson = urlParams.get('user');

          if (userJson) {
            const user = JSON.parse(decodeURIComponent(userJson));

            // Store user details in localStorage
            localStorage.setItem('User', JSON.stringify(user));
              dispatch({ type: "LOGIN", payload: user });
            // Close the authentication window
            GoogleAuthWindow.close(); 
            dispatch({ type: "TWISUCCESS" });
            clearInterval(checkWindowLocation);
          } else {
            dispatch({ type: "TWIFAIL" });
            clearInterval(checkWindowLocation);
            }
            
        }
      } catch (error) {
          console.log(error)
      }
    }, 500);
      
    // Clear the interval after 60 seconds
    setTimeout(() => {
      clearInterval(checkWindowLocation);
    }, 60000); 

    }

    return (
        <div onClick={handleGoogle} className="flex w-fit items-center cursor-pointer py-3 px-10 border rounded-3xl border-[#3b3737]">
                    <div className="text-xl pr-4">
                        <FcGoogle />
                    </div>
                    Sign in with Google
        </div>
    );
}

export default GoogleSignin;