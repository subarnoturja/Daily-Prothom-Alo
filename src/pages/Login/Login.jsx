import Navbar from "../Shared/Navbar/Navbar";
import { FcGoogle } from "react-icons/fc";
import { BsGithub } from "react-icons/bs";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";

const Login = () => {
  const { userSignIn } = useContext(AuthContext);

  const location = useLocation();
  const navigate = useNavigate();
  console.log(location);

  const handleLogin = (e) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const email = form.get("email");
    const password = form.get("password");

    //  Sign In Method
    userSignIn(email, password)
      .then(result => {
        console.log(result.user);

        // Navigate after login
        navigate(location?.state ? location.state : "/");
      })
      .catch(error => {
        console.log(error.message);
      });
  };

  return (
    <div>
      <Navbar></Navbar>
      {/* <!-- component --> */}
      <div className="flex justify-center">
        <div className="container mt-12 max-w-md border-2 border-gray-200 dark:border-gray-700 p-3 dark:bg-gray-800 text-gray-900 dark:text-white">
          {/* <!-- header -->   */}
          <div className="text-center my-6">
            <h1 className="text-3xl font-semibold text-white">Sign in</h1>
            <p className="text-white">Sign in to access your account</p>
          </div>
          {/* <!-- sign-in --> */}
          <div className="m-6">
            <form onSubmit={handleLogin} className="mb-4">
              <div className="mb-6">
                <label className="block mb-2 text-sm text-gray-600 dark:text-white">
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  placeholder="Your email address"
                  className="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500"
                />
              </div>
              <div className="mb-6">
                <div className="flex justify-between mb-2">
                  <label className="text-sm text-gray-600 dark:text-white">
                    Password
                  </label>
                  <a
                    href="#!"
                    className="text-sm text-gray-400 focus:outline-none focus:text-indigo-500 hover:text-indigo-500 dark:hover:text-indigo-300"
                  >
                    Forgot password?
                  </a>
                </div>
                <input
                  type="password"
                  name="password"
                  required
                  placeholder="Your password"
                  className="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500"
                />
              </div>
              <div className="mb-6">
                <button className="btn w-full px-3 py-4 text-white bg-indigo-500 rounded-md hover:bg-indigo-600 focus:outline-none duration-100 ease-in-out">
                  Sign in
                </button>
              </div>
              <p className="text-sm text-center text-gray-400">
                Don&#x27;t have an account yet?
                <Link
                  to="/register"
                  className="font-semibold text-indigo-500 focus:text-indigo-600 focus:outline-none focus:underline">
                  Sign up
                </Link>
                .
              </p>
            </form>
            {/* <!-- seperator -->   */}
            <div className="flex flex-row justify-center mb-8">
              <span className="absolute bg-gray-300 px-4 text-black font-normal">
                or sign-in with
              </span>
              <div className="w-full bg-gray-200 mt-3 h-px"></div>
            </div>
            {/* <!-- alternate sign-in -->   */}
            <div className="flex flex-row gap-2">
              <button className="bg-gray-500 text-white w-full p-2 flex flex-row justify-center gap-2 items-center rounded-sm hover:bg-green-600 duration-100 ease-in-out">
                <FcGoogle className="text-2xl" />
                Google
              </button>
              <button className="bg-gray-500 text-white w-full p-2 flex flex-row justify-center gap-2 items-center rounded-sm hover:bg-gray-800 duration-100 ease-in-out">
                <BsGithub className="text-2xl" />
                Github
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
