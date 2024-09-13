import React, { useRef, useState } from "react";
import Header from "./Header";
import { checkValidateData } from "../utils/validate";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../utils/firebase";
const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);

  const [errorMessage, setErrorMessage] = useState(null);

  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);

  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };

  const handleButtonClick = (e) => {
    e.preventDefault();
    //validate form data
    const message = checkValidateData(
      email.current.value,
      password.current.value
    );
    setErrorMessage(message);

    if (message) return;

    //sign in and sign up

    if (!isSignInForm) {
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;
          console.log(user);
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + "-" + errorMessage);
          // ..
        });
    } else {
      // signIn
    }
  };

  return (
    <div className="relative h-screen w-screen">
      <Header />
      <div className="absolute top-0 left-0 w-full h-full z-0">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/85ff76db-39e5-423a-afbc-97d3e74db71b/null/IN-en-20240909-TRIFECTA-perspective_b22117e0-4610-4d57-a695-20f77d241a4a_small.jpg"
          alt="background-img"
          className="w-full h-full object-cover"
        />
      </div>

      <form className="absolute max-w-md px-14 bg-black bg-opacity-70 m-32 mx-auto inset-x-0 rounded-md z-10 text-white">
        <h1 className="text-3xl font-bold py-6">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>

        {!isSignInForm && (
          <input
            ref={name}
            type="text"
            placeholder="Name"
            className="p-4 m-2 w-full rounded bg-slate-700 outline-none bg-opacity-85"
          />
        )}

        <input
          ref={email}
          type="text"
          placeholder="Email Address"
          className="p-4 m-2 w-full rounded bg-slate-700 outline-none bg-opacity-85"
        />
        <input
          ref={password}
          type="password"
          placeholder="Password"
          className="p-4 m-2 w-full rounded bg-slate-700 outline-none bg-opacity-85"
        />

        <p className="text-red-500 text-sm mx-2">{errorMessage}</p>

        <button
          className="p-2 m-2 w-full bg-red-600 text-white rounded"
          onClick={handleButtonClick}
        >
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>

        <p className="m-3 text-center text-gray-400">OR</p>

        <button className="p-2 m-2 w-full text-white rounded bg-zinc-500 bg-opacity-80">
          Use a sign-in code
        </button>

        <p className="m-3 text-center text-sm">Forgot password</p>

        <div className="flex items-center">
          <input type="checkbox" className="m-3" />
          <p>Remember me</p>
        </div>

        <p
          className="m-3 cursor-pointer rounded p-1"
          onClick={toggleSignInForm}
        >
          {isSignInForm ? (
            <span className="text-gray-400">New to Netflix? </span>
          ) : (
            <span className="text-gray-400">Already a user? </span>
          )}
          <span>{isSignInForm ? "Sign Up now" : "Sign in"}</span>
        </p>

        <p className="m-3 text-xs text-gray-400">
          This page is protected by Google reCAPTCHA to ensure you're not a bot.
          <span className="text-blue-700">Learn more</span>
        </p>
      </form>
    </div>
  );
};

export default Login;
