import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "./providers/AuthProviders";

const Header = () => {
  const {user, logOut} = useContext(AuthContext)
  
  const handleSignOut = () => {
    logOut()
    .then(() => {})
    .catch(error => {
      console.log(error.message)
    })
  }
  return (
    <div className="navbar bg-base-100">
      <a className="btn btn-ghost normal-case text-xl">Auth Master</a>
      <Link to='/' className="btn btn-ghost normal-case text-xl">Home</Link>
      <Link to='/login' className="btn btn-ghost normal-case text-xl">Login</Link>
      <Link to='/register' className="btn btn-ghost normal-case text-xl">Register</Link>
      {
        user ? <>
        <span>{user.email}</span>
        <button onClick={handleSignOut} className="btn btn-xs ml-4">Sign out</button>
        </>
        : <Link to='/login' className="btn btn-ghost normal-case text-xl">Login</Link>
      }
    </div>
  );
};

export default Header;
