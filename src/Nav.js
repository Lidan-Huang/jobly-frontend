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
            <NavLink exact to="/">Jobly</NavLink>
          </div>
          <div className="Nav-right">
            <NavLink to="/login">Login</NavLink>
            <NavLink to="/signup">Signup</NavLink>
          </div>
        </nav>
        :
        <nav className="Nav">
          <div className="Nav-left">
            <NavLink exact to="/">Jobly</NavLink>
          </div>
          <div className="Nav-right">
            <NavLink to="/companies">Companies</NavLink>
            <NavLink to="/jobs">Jobs</NavLink>
            <NavLink to="/profile">Profile</NavLink>
            <button className="btn btn-primary" onClick={logout}>Logout {user.username}</button>
          </div>
        </nav>
      }
    </>
  );
}

export default Nav;