import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import { useNavigate } from "react-router-dom";

const SocialLogin = () => {
  const { auth, googleLogin, githubLogin } = useContext(AuthContext);
  const navigate = useNavigate();

  // social handler login ==========
  const handleSocialLogin = (media) => {
    media()
      .then((res) => {
        toast.success("login successfull");
        navigate("/");
      })
      .catch((error) => toast.error(error.message));
  };

  return (
    <>
      <div className="divider">continue with</div>
      <div className=" flex justify-around gap-3">
        <button
          onClick={() => handleSocialLogin(googleLogin)}
          className="btn btn-neutral btn-sm ">
          Google
        </button>
        <button
          onClick={() => handleSocialLogin(githubLogin)}
          className="btn btn-neutral btn-sm ">
          GitHub
        </button>
      </div>
    </>
  );
};

export default SocialLogin;
