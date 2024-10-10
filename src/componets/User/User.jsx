import React, { useState } from "react";
import Login from "./Login";
import SignUp from "./SignUp";

const User = () => {
  const [hasAccount, setHasAccount] = useState(true); // true for Login, false for SignUp

  const toggleAccount = () => {
    setHasAccount(!hasAccount); // Toggle between Login and SignUp
  };
  return (
    <div className="">
      {hasAccount ? (
        <>
          <Login />
          <p className="flex ">
            Don't have an account?{" "}
            <button
              onClick={toggleAccount}
              class="ml-1 block underline font-sans text-sm font-bold leading-normal text-cyan-500 antialiased"
            >
              Sign Up
            </button>
          </p>
        </>
      ) : (
        <>
          <SignUp />
          <p class="ml-1 block font-sans text-sm font-bold leading-normal text-cyan-500 antialiased">
            Already have an account?{" "}
            <button onClick={toggleAccount} className="text-blue-500 underline">
              Log In
            </button>
          </p>
        </>
      )}
    </div>
  );
};

export default User;
