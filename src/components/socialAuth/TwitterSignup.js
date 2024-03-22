import UseAuthContext from "../Context/useAuthContext";
import twitter from "../../resources/images/twitter.png";
import { toast } from "react-toastify";

const TwitterSignup = (props) => {
    const { dispatch } = UseAuthContext();
    const handleTwitter = async () => {
    const twitterAuthWindow = window.open("http://localhost:3002/api/user/auth/twitter", "_blank");
    const checkWindowLocation = setInterval(() => {
      try {
        // Check if the Twitter authentication process is complete
        if (twitterAuthWindow.location.href.startsWith('http://localhost:3000')) {
          // Parse URL parameters to extract user details
          const urlParams = new URLSearchParams(twitterAuthWindow.location.search);
          const userJson = urlParams.get('user');

          if (userJson) {
            const user = JSON.parse(decodeURIComponent(userJson));

            // Store user details in localStorage
            localStorage.setItem('User', JSON.stringify(user));
              dispatch({ type: "LOGIN", payload: user });
          
            // Close the authentication window
            twitterAuthWindow.close();              
            }
            
        }
      } catch (error) {
          console.log(error)
      }
    }, 500);

            toast.success("Login Success", {
        position: 'top-right',
      });
    // Clear the interval after 60 seconds
    setTimeout(() => {
      clearInterval(checkWindowLocation);
    }, 60000);
    

    }
    return (
        <div onClick={handleTwitter} className="flex w-fit items-center mt-5 cursor-pointer py-3 px-10 border rounded-3xl border-[#3b3737]">
            <div className="text-xl pr-4">
                <img src={twitter} alt="" className="w-[20px]"/>
            </div>
            Sign up with Twitter
        </div>
    );
}

export default TwitterSignup;