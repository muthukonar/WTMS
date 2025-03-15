import Dashboard from "../components/Dashboard";
import { useState, 
  // useEffect, 
  // useLayoutEffect
 } from "react";
import auth from "../utils/auth";
import ErrorPage from "./Error";
import { UserLogin } from "../interfaces/UserLogin";
import { retrieveUser } from "../utils/login";



const Landing = () => {
 const [loginCheck, setLoginCheck] = useState(false);
 const [user, setUser] = useState<UserLogin | null>(null);

 //Todo: check auth status and get user info from local storage or cookie
 //Todo: replace code below with auth logic
 //* Imports for auth login logic should be made in /utils/login.tsx



  return (
    <main>
      <h1>Landing</h1>
      {auth.loggedIn() ? (
        <Dashboard />
      ) : (
        <>
          <p>Welcome to the Landing Page</p>
          <p>Please log in or sign up to continue.</p>
        </>
      )}
      {loginCheck && !user ? (
        <ErrorPage />
      ) : null}
      {loginCheck && user ? (
        <div className="dashboard">
          <h1>Dashboard</h1>
          <p>Welcome, {user.username}!</p>
        </div>
      ) : null}
    </main>
  );
};

export default Landing;
