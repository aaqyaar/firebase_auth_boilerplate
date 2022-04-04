import React from "react";
import { useContext } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { UseAuthReg } from "../../context/auth-reg";
import { actionTypes } from "../../reducers/FormRegReducers";

function Register() {
  const { state, dispatch, createUserWithEmailAndPassword } =
    useContext(UseAuthReg);

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (state.email.length >= 6 && state.password) {
      createUserWithEmailAndPassword(state.email, state.password);
      state.email = "";
      state.password = "";
      state.name = "";
      state.conFirmPassword = "";
      navigate("/login");
    }
  };

  return (
    <div className="min-h-full flex items-center justify-center px-4 sm:px-6 lg:px-8">
      <div className="px-8 py-5 mt-2 mx-4 text-left bg-white shadow-2xl shadow-indigo-100 rounded-lg max-w-md w-full">
        <div className="flex items-center my-4">
          <img
            className="mx-auto h-12 w-auto"
            src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
            alt="Workflow"
          />
          <h3 className="text-2xl font-bold text-center">
            Create a new Account.
          </h3>
        </div>
        <form action="" onSubmit={handleSubmit}>
          <div>
            <label className="block mt-2" htmlFor="">
              Name
            </label>

            <input
              type="text"
              placeholder="Name"
              className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
              value={state.name}
              onChange={(e) =>
                dispatch({
                  type: actionTypes.SET_NAME,
                  payload: e.target.value,
                })
              }
            />
            <div>
              <label className="block mt-2" htmlFor="email">
                Email
              </label>
              <input
                type="email"
                placeholder="Email"
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                value={state.email}
                onChange={(e) => {
                  dispatch({
                    type: actionTypes.SET_EMAIL,
                    payload: e.target.value,
                  });
                }}
              />
              {!state.error ? (
                <span className="text-xs text-red-400">
                  Your Email Address is not Valid.!
                </span>
              ) : (
                " "
              )}
            </div>
            <div>
              <label className="block mt-2">Password</label>
              <input
                type="password"
                placeholder="Password"
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                value={state.password}
                onChange={(e) => {
                  dispatch({
                    type: actionTypes.SET_PASSWORD,
                    payload: e.target.value,
                  });
                }}
              />
            </div>
            <div>
              <label className="block mt-2">Confirm Password</label>
              <input
                type="password"
                placeholder="Password"
                value={state.conFirmPassword}
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                onChange={(e) => {
                  dispatch({
                    type: actionTypes.SET_CONFIRM_PASSWORD,
                    payload: e.target.value,
                  });
                }}
              />
            </div>
            {!state.PassError && (
              <span className="text-xs text-red-400">
                Password must be same!
              </span>
            )}
            <div className="flex">
              <button
                className="w-full px-6 py-2 mt-4 text-white bg-blue-600 rounded-lg hover:bg-blue-900"
                type="submit"
              >
                Create Account
              </button>
            </div>
            <div className="mt-6 text-grey-dark">
              Already have an account?
              <NavLink
                to="/login"
                className="text-blue-600 hover:underline"
                href="#"
              >
                Log in
              </NavLink>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Register;
