import { Link, useNavigate } from "react-router-dom";
import SocialLogin from "./SocialLogin";
import UseAuth from "../../Hooks/UseAuth";
import toast from "react-hot-toast";

const Login = () => {
  const { singIn } = UseAuth();
  const navigate = useNavigate();

  // sign in handler =======
  const handlerSingin = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    // password validation
    if (password.length < 6) {
      toast.error("password must be at least 6 characther");
      return;
    }

    // sing in user
    singIn(email, password)
      .then((res) => {
        toast.success("login successfull");
        navigate("/");
        console.log(res.user);
      })
      .catch((error) => toast.error(error.message));
  };

  return (
    <>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Login now!</h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handlerSingin} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="text"
                  name="email"
                  placeholder="email"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="text"
                  name="password"
                  placeholder="password"
                  className="input input-bordered"
                />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control mt-6 p-0">
                <button type="submit" className="btn btn-neutral">
                  Login
                </button>
              </div>
              <label className="label">
                New here?{" "}
                <Link to="/register" className="label-text-alt link link-hover">
                  Create an account
                </Link>
              </label>
              <SocialLogin />
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
