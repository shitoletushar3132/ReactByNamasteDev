import React, { useRef, useState } from "react";
import Header from "./Header";
import { checkValidateData } from "../utils/validate";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addUser } from "../utils/userSlice"; // Assuming you have this action in your Redux store
import { github_Profile_Img, login_BG_Url } from "../utils/constants";

const Login = () => {
  const selector = useSelector((state) => state.user);
  const dispatch = useDispatch();

  console.log(selector);
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);

  const navigate = useNavigate();
  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);

  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };

  const handleButtonClick = (e) => {
    e.preventDefault();
    // Validate form data
    const message = checkValidateData(
      email.current.value,
      password.current.value
    );
    setErrorMessage(message);

    if (message) return;

    // Sign up or sign in
    if (!isSignInForm) {
      // Sign up
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          const user = userCredential.user;
          // Update the profile with name and photo URL
          updateProfile(user, {
            displayName: name.current.value,
            photoURL: { github_Profile_Img },
          })
            .then(() => {
              // Fetch the updated user object after profile update
              const updatedUser = auth.currentUser;
              const { uid, email, displayName, photoURL } = updatedUser;

              // Dispatch with updated user details
              dispatch(
                addUser({
                  uid: uid,
                  email: email,
                  displayName: displayName,
                  photoURL: photoURL,
                })
              );
            })
            .catch((error) => {
              setErrorMessage(error.code + " - " + error.message);
            });
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + " - " + errorMessage);
        });
    } else {
      // Sign in
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          const user = userCredential.user;

          // Optionally, dispatch the user data into Redux store
          const { uid, email, displayName, photoURL } = user;
          dispatch(
            addUser({
              uid: uid,
              email: email,
              displayName: displayName,
              photoURL: photoURL,
            })
          );
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + " - " + errorMessage);
        });
    }
  };

  return (
    <div className="relative h-screen w-screen">
      <Header />
      <div className="absolute top-0 left-0 w-full h-full z-0">
        <img
          src={login_BG_Url}
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
