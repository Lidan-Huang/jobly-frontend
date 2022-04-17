import "./Homepage.css";
import UserContext from "./userContext";
import { useContext } from "react";
import { Link } from "react-router-dom";

/** Presentational of showing home page
 * useContext: 
 * - user object {username, firstName, lastName, email}
 * - token object {token}
 * props: none
 * state: none
 * 
 * Routes -> HomePage
 */

function HomePage() {
  const { user, token } = useContext(UserContext);
  return (
    <div className="Homepage">
      <div className="container text-center">
        <h1 className="mb-4 fw-bold text-dark display-3">Jobly</h1>
        <p className="Homepage-text display-6">All the jobs in one, convenient place.</p>
        {
          token
            ?
            <h2 className="Homepage-text"> Welcome back, {user.firstName}!</h2>
            : (
              <p>
                <Link className="btn btn-primary fw-bold me-3"
                  to="/login">
                  Log in
                </Link>
                <Link className="btn btn-primary fw-bold" to="/signup">
                  Sign up
                </Link>
              </p>
            )}
      </div>
    </div>
  );
}

export default HomePage;