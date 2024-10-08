import React, { useEffect, useState } from "react";
import netflixLogo from "../assets/Netflix_Logo.png";
import { auth } from "../utils/firebase";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { toggleGptSearchView } from "../utils/gptSlice";
import { SUPPORTED_LANG } from "../utils/constants";
import { changeLanguage } from "../utils/configSlice";

const Header = () => {
  const dispatch = useDispatch();
  const [show, setShow] = useState(false);
  const navigate = useNavigate();

  const user = useSelector((store) => store.user);
  const showGptSearch = useSelector((store) => store.gpt.showGptSearch);
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {})
      .catch((error) => {
        navigate("/error");
      });
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName, photoURL } = user;
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL,
          })
        );
        navigate("/browse");
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });

    //unsubscribe when component unmounts
    return () => unsubscribe();
  }, []);

  const handleGptSearch = () => {
    //Toggle GPT Search button
    dispatch(toggleGptSearchView());
  };

  const handleLangChange = (e) => {
    dispatch(changeLanguage(e.target.value));
  };

  return (
    <div className="w-screen absolute px-1 py-2 bg-gradient-to-b from-black z-10 flex justify-between items-center">
      <div>
        <img src={netflixLogo} alt="logo" className="w-44" />
      </div>

      {user && (
        <div className="flex gap-1 items-center">
          {showGptSearch && (
            <select
              className="outline-none px-2 py-1 bg-gray-900 text-white rounded-md"
              onChange={handleLangChange}
            >
              {SUPPORTED_LANG.map((lang) => (
                <option key={lang.identifier} value={lang.identifier}>
                  {lang.name}
                </option>
              ))}
            </select>
          )}
          <button
            onClick={handleGptSearch}
            className="px-2 py-1 bg-purple-900 text-white rounded-lg mx-3 hover:scale-110 hover:bg-opacity-80 duration-200 "
          >
            {showGptSearch ? "HomePage" : "GPT Search"}
          </button>

          <div className="flex p-2 relative cursor-pointer hover:scale-110 duration-300 rounded-md mr-3">
            <div
              onClick={() => {
                setShow(!show);
              }}
            >
              <img
                src={user?.photoURL}
                alt="userIcon"
                className="w-12 rounded-md"
              />
            </div>

            <div
              className={`absolute px-5 py-2 mt-2 bg-gray-700 bg-opacity-60 text-white top-12 right-0 rounded font-bold flex flex-col items-start ${
                show ? "flex" : "hidden"
              }`}
            >
              <h2 className="w-full mb-2 underline">{user.displayName}</h2>
              <button
                onClick={handleSignOut}
                className="border border-red-500 px-2 py-1 rounded text-white hover:bg-red-700 transition-colors duration-300 text-nowrap"
              >
                Sign Out
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;
