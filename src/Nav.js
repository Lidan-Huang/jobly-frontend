import { useContext } from "react";
import { NavLink } from "react-router-dom";
import "./Nav.css";
import UserContext from "./userContext";

/** Nav for navigation between resources
 * 
 * Props: 
 *  -logout: a function passed down from App component
 * 
 * Context: 
 * - user: {}
 * - token: {}
 * State: none
 * 
 * App -> Nav 
 */

function Nav({ logout }) {
  const {user, token} = useContext(UserContext);
  console.log("user from nav", user);

  return (
    <>
      { !token
        ?
        <nav className="Nav">
          <div className="Nav-left">
            <NavLink exact to="/" className="Nav-jobly">Jobly</NavLink>
          </div>
          <div className="Nav-right">
            <NavLink to="/login" className="Nav-login text-primary">Login</NavLink>
            <NavLink to="/signup" className="Nav-signup text-primary">Signup</NavLink>
          </div>
        </nav>
        :
        <nav className="Nav navbar">
          <div className="Nav-left">
            <NavLink exact to="/" className="Nav-jobly">Jobly</NavLink>
          </div>
          <div className="Nav-right">
            <NavLink to="/companies" className="fs-5 text-primary me-5">Companies</NavLink>
            <NavLink to="/jobs" className="fs-5 text-primary me-5">Jobs</NavLink>
            <NavLink to="/profile" className="fs-5 text-primary me-5">Profile</NavLink>
            <button className="btn btn-primary fs-5text-primary" onClick={logout}>Logout {user.username}</button>
          </div>
        </nav>
      }
    </>
  );
}

export default Nav;