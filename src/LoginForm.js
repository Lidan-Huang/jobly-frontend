import { useState } from "react";

/** Show the login form and update the user state 
 * 
 * props:
 *  - login: a function passed down from App component
 * 
 * state:
 *  - formData: {username, password}
 * 
 * Routes -> LoginForm
 */
const DEFAULT_FORM_DATA = { username: "", password: "" };

function LoginForm({ login }) {
  const [formData, setFormData] = useState(DEFAULT_FORM_DATA);
  const [formErrors, setFormErrors] = useState([]);

  function handleChange(evt) {
    const { name, value } = evt.target;

    setFormData(fData => ({
      ...fData,
      [name]: value,
    }));
  }

  async function handleSubmit(evt) {
    evt.preventDefault();
    try {
      await login(formData);
      setFormData(DEFAULT_FORM_DATA);
    } catch (err) {
      setFormErrors(err);
    }
  }

  return (
    <div className="LoginForm">
      <div className="container col-md-6 offset-md-3 col-lg-4 offset-lg-4">
        <h3 className="mb-3 text-primary">Log In</h3>
        <div class="card">
          <div class="card-body">
            <form onSubmit={handleSubmit}>
              <div class="mb-3">
                <label className="form-label me-2" htmlFor="username">
                  Username
                </label>
                <input
                  id="username"
                  name="username"
                  value={formData.username}
                  required
                  onChange={handleChange}
                />
              </div>

              <div class="mb-3">
                <label className="form-label me-2" htmlFor="password">
                  Password
                </label>
                <input
                  className="ms-1"
                  id="password"
                  name="password"
                  value={formData.password}
                  required
                  onChange={handleChange}
                  type="password"
                />
              </div>


              {formErrors.length
                ? <p className="text-danger">{formErrors[0]}</p>
                : null}
              <button className="btn btn-primary">Submit</button>
            </form>
          </div>
        </div>
      </div>
    </div>

  );
}

export default LoginForm;