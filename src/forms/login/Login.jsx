import { useContext } from "react";
import { LockClosedIcon } from "@heroicons/react/solid";
import { UseAuthReg } from "../../context/auth-reg";
import { NavLink, useNavigate } from "react-router-dom";
import { FaGoogle, FaFacebook, FaTwitter } from "react-icons/fa";

export default function Login() {
  const { state, dispatch, signInWithEmailAndPassword, signInWithGoogle } =
    useContext(UseAuthReg);

  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    try {
      signInWithEmailAndPassword(state.email, state.password);
      navigate("/");
    } catch (err) {
      alert("wax ka jiro maleh");
    }
  };

  const signIn = () => {
    signInWithGoogle().then((user) => navigate("/"));
  };

  return (
    <>
      <div className="min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full space-y-8">
          <div>
            <img
              className="mx-auto h-12 w-auto"
              src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
              alt="Workflow"
            />
            <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
              Sign in to your account
            </h2>
          </div>
          <form
            className="space-y-4 shadow-lg py-8 px-6 rounded-md shadow-indigo-50"
            action="#"
            method="POST"
            onSubmit={handleLogin}
          >
            <input type="hidden" name="remember" defaultValue="true" />
            <div className="rounded-md shadow-sm -space-y-px">
              <div>
                <label htmlFor="email-address" className="sr-only">
                  Email address
                </label>
                <input
                  id="email-address"
                  name="email"
                  type="email"
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="Email address"
                  value={state.email}
                  onChange={(e) =>
                    dispatch({
                      type: "SET_EMAIL",
                      payload: e.target.value,
                    })
                  }
                />
              </div>
              <div>
                <label htmlFor="password" className="sr-only">
                  Password
                </label>
                <input
                  id="password"
                  name="password"
                  type="password"
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="Password"
                  value={state.password}
                  onChange={(e) =>
                    dispatch({
                      type: "SET_PASSWORD",
                      payload: e.target.value,
                    })
                  }
                />
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input
                  id="remember-me"
                  name="remember-me"
                  type="checkbox"
                  className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                />
                <label
                  htmlFor="remember-me"
                  className="ml-2 block text-sm text-gray-900"
                >
                  Remember me
                </label>
              </div>

              <div className="text-sm">
                <a
                  href="#"
                  className="font-medium text-indigo-600 hover:text-indigo-500"
                >
                  Forgot your password?
                </a>
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                  <LockClosedIcon
                    className="h-5 w-5 text-indigo-500 group-hover:text-indigo-400"
                    aria-hidden="true"
                  />
                </span>
                Sign in
              </button>
            </div>
            <div className="text-center">
              <span className="">
                or
                <NavLink
                  to="/register"
                  className="text-indigo-600 hover:underline"
                >
                  {" "}
                  Create new account
                </NavLink>
              </span>
            </div>
            <div className="text-center">
              <span className="">-------- or ----------</span>
              <div className="flex gap-10 justify-center my-2 ">
                <span
                  className="border px-6 py-1 cursor-pointer"
                  onClick={signIn}
                >
                  <FaGoogle className=" w-5 h-5" />
                </span>
                <span className="border px-6 py-1 cursor-pointer">
                  <FaFacebook className="w-5 h-5" />
                </span>
                <span className="border px-6 py-1 cursor-pointer">
                  <FaTwitter className="w-5 h-5" />
                </span>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
