import { useState } from "react";

const DEFAULT_FORM_DATA = {
  username: "",
  password: "",
  firstName: "",
  lastName: "",
  email: "",
};

/** Show the sign up form and update the user state 
 * 
 * props:
 *  - signup: a function passed down from App component
 * 
 * state:
 *  - formData: {username, password, firstName, lastName, email}
 * 
 * Routes -> LoginForm
 */

function SignupForm({ signup }) {
  const [formData, setFormData] = useState(DEFAULT_FORM_DATA);

  function handleChange(evt) {
    const { name, value } = evt.target;

    setFormData(fData => ({
      ...fData,
      [name]: value,
    }));
  }

  function handleSubmit(evt) {
    evt.preventDefault();
    signup(formData);
    setFormData(DEFAULT_FORM_DATA);
  }

  return (
    <div class="SignupForm">
      <div className="container col-md-6 offset-md-3 col-lg-4 offset-lg-4">
        <h3 className="mb-3 text-primary">Sign Up</h3>
        <div class="card">
          <div class="card-body">
            <form onSubmit={handleSubmit}>
              <div class="mb-3">
                <label className="form-label" htmlFor="username">
                  Username
                </label>
                <input
                  className="ms-1"
                  id="username"
                  name="username"
                  value={formData.username}
                  required
                  onChange={handleChange}
                />
              </div>

              <div class="mb-3">
                <label className="form-label" htmlFor="password">
                  Password
                </label>
                <input
                  className="ms-2"
                  id="password"
                  name="password"
                  value={formData.password}
                  required
                  onChange={handleChange}
                  type="password"
                />
              </div>

              <div class="mb-3">
                <label className="form-label" htmlFor="firstName">
                  First name
                </label>
                <input
                  className="ms-1"
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
                  className="ms-1"
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
                  type="email"
                  value={formData.email}
                  required
                  onChange={handleChange}
                />
              </div>

              <button className="btn btn-primary">Submit</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignupForm;