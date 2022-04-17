import { useState, useContext } from "react";
import UserContext from "./userContext";

/** Show the profile form and update the user state 
 * useContext: user object {username, firstName, lastName, email}
 * props:
 *  - editUser: a function passed down from App component
 * 
 * state:
 *  - profileEdited: {username, firstName, lastName, email}
 * 
 * Routes -> LoginForm
 */

function ProfileForm({ editUser }) {
  const { user } = useContext(UserContext);
  const [profileEdited, setProfileEdited] = useState(false);

  const [formData, setFormData] = useState(
    {
      username: user.username,
      firstName: user.firstName,
      lastName: user.lastName,
      email: user.email,
    }
  );

  function handleChange(evt) {
    const { name, value } = evt.target;

    setFormData(fData => ({
      ...fData,
      [name]: value,
    }));
  }

  function handleSubmit(evt) {
    evt.preventDefault();
    editUser(formData);
    setProfileEdited(true);
  }

  return (
    <div className="ProfileForm col-md-6 col-lg-4 offset-md-3 offset-lg-4">
      <h3 className="mb-3 text-primary">Profile</h3>
      <div className="card">
        <div className="card-body">
          <form onSubmit={handleSubmit}>
            <div class="mb-3">
              <label className="form-label" htmlFor="username">
                Username
              </label>
              <input
              className="ms-2"
                id="username"
                name="username"
                value={formData.username}
                disabled
                onChange={handleChange}
              />
            </div>

            <div class="mb-3">
              <label className="form-label" htmlFor="firstName">
                First name
              </label>
              <input
              className="ms-2"
                id="firstName"
                name="firstName"
                value={formData.firstName}
                required
                onChange={handleChange}
              />
            </div>

            <div class="mb-3">
              <label className="form-label" htmlFor="lastName">
                Last name
              </label>
              <input
              className="ms-2"
                id="lastName"
                name="lastName"
                value={formData.lastName}
                required
                onChange={handleChange}
              />
            </div>

            <div class="mb-3">
              <label className="form-label ms-2 me-2" htmlFor="email">
                Email
              </label>
              <input
                className="ms-4"
                id="email"
                name="email"
                value={formData.email}
                required
                onChange={handleChange}
              />
            </div>

            <button className="btn btn-primary">Submit</button>
          </form>
          {profileEdited &&
            <p>Profile successfully changed!</p>
          }
        </div>
      </div>

    </div>
  );

}


export default ProfileForm;


