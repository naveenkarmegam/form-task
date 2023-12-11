import { useFormik } from "formik";
import "./App.css";
import { useState } from "react";
import Table from "./Table";

function App() {
  const [tableData, setTableData] = useState([])
  const formik = useFormik({
    initialValues: {
      username: "",
      email: "",
      country: "",
      gender: "",
      status: "",
      fav: [],
      dob: "",
      message: "",
    },
    validate: (values) => {
      let errors = {};
      if (values.username === "") {
        errors.username = "* Username will be must";
      } else if (values.username.length <= 3 || values.username.length > 15) {
        errors.username = "User Name should be between 3 to 15";
      }

      if (values.email === '') {
        errors.email = "* Please enter the email"
      } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
        errors.email = 'Invalid email address';
      }
      if (values.country === "") {
        errors.country = "* Required";
      }
      if (values.gender === "") {
        errors.gender = "* Required";
      }

      if (values.status === "") {
        errors.status = "* Required";
      }

      if (values.fav.length === 0) {
        errors.fav = "* At least one checkbox must be selected";
      }

      if (values.dob === "") {
        errors.dob = "* Required";
      }

      let userDo = new Date(values.dob);
      let currentDate = new Date();
      if (currentDate.getFullYear() - userDo.getFullYear() <= 18) {
        errors.dob = "Age should greater than 18";
      }
      if (values.message === "") {
        errors.message = "* Give me meassage atleast 120 words";
      }

      return errors;

    },
    onSubmit: (values) => {
      setTableData([...tableData, values]);
      formik.resetForm();
    }
  });
  return (
    <div className="container-fluid">
      <div className="row main-box mt-5 mx-2" >
        <div className="col-lg-6 px-4 py-5 ">
          <form action="" onSubmit={formik.handleSubmit}>
            <div className="mb-3">
              <label htmlFor="username" className="form-label">
                Name
              </label>
              <input
                type="text"
                className="form-control"
                id="username"
                name="username"
                value={formik.values.username}
                onChange={formik.handleChange}

              />
              <div className="form-text text-danger">{formik.errors.username}</div>
            </div>

            <div className="mb-3">
              <label htmlFor="email" className="form-label">
                Email
              </label>
              <input
                type="text"
                className="form-control"
                id="email"
                name="email"
                value={formik.values.email}
                onChange={formik.handleChange}

              />
              <div className="form-text text-danger">{formik.errors.email}</div>
            </div>

            <div className="mb-3">
              <label htmlFor="country" className="form-label">
                Country
              </label>
              <select
                className="form-select"
                id="country"
                name="country"
                value={formik.values.country}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              >
                <option value="">Select Country</option>
                <option value="India">India</option>
                <option value="Canada">Canada</option>
                <option value="France">France</option>
                <option value="Spain">Spain</option>
              </select>
              <div className="form-text text-danger">
                {formik.touched.country && formik.errors.country}
              </div>
            </div>

            <div className="mb-3">
              <div className="row">
                <div className="col-6">
                  <div className="form-check form-check-inline">
                    <input
                      className="form-check-input"
                      type="radio"
                      id="male"
                      name="gender"
                      value="male"
                      checked={formik.values.gender === "male"}
                      onChange={formik.handleChange}
                    />
                    <label className="form-check-label" htmlFor="male">
                      Male
                    </label>

                  </div>
                  <div className="form-check form-check-inline">
                    <input
                      className="form-check-input"
                      type="radio"
                      id="female"
                      name="gender"
                      value="female"
                      checked={formik.values.gender === "female"}
                      onChange={formik.handleChange}
                    />
                    <label className="form-check-label" htmlFor="female">
                      Female
                    </label>
                  </div>
                  <div className="form-text text-danger">
                    {formik.errors.gender}

                  </div>
                </div>
                <div className="col-6 text-end">
                  <div className="form-check form-check-inline">
                    <input
                      className="form-check-input"
                      type="radio"
                      id="married"
                      name="status"
                      value="married"
                      checked={formik.values.status === "married"}
                      onChange={formik.handleChange}
                    />
                    <label className="form-check-label" htmlFor="married">
                      Married
                    </label>
                  </div>
                  <div className="form-check form-check-inline">
                    <input
                      className="form-check-input"
                      type="radio"
                      id="unmarried"
                      name="status"
                      value="unmarried"
                      checked={formik.values.status === "unmarried"}
                      onChange={formik.handleChange}
                    />
                    <label className="form-check-label" htmlFor="unmarried">
                      Unmarried
                    </label>
                  </div>
                  <div className="form-text text-danger text-center">
                    {formik.errors.status}
                  </div>
                </div>
              </div>
              <div className="form-text"></div>
            </div>


            <div className="mb-3">
              <div className="form-check form-check-inline">
                <input
                  className="form-check-input"
                  type="checkbox"
                  id="apple"
                  name="fav"
                  value="Apple"
                  checked={formik.values.fav.includes("Apple")}
                  onChange={formik.handleChange}
                />
                <label className="form-check-label" htmlFor="apple">
                  Apple
                </label>
              </div>
              <div className="form-check form-check-inline">
                <input
                  className="form-check-input"
                  type="checkbox"
                  id="orange"
                  name="fav"
                  value="Orange"
                  checked={formik.values.fav.includes("Orange")}
                  onChange={formik.handleChange}
                />
                <label className="form-check-label" htmlFor="orange">
                  Orange
                </label>
              </div>
              <div className="form-check form-check-inline">
                <input
                  className="form-check-input"
                  type="checkbox"
                  id="grapes"
                  name="fav"
                  value="Grapes"
                  checked={formik.values.fav.includes("Grapes")}
                  onChange={formik.handleChange}
                />
                <label className="form-check-label" htmlFor="grapes">
                  Grapes
                </label>
              </div>
              <div className="form-text text-danger">{formik.errors.fav}</div>
            </div>

            <div className="mb-3">
              <label htmlFor="dob" className="form-label">
                Date of Birth
              </label>
              <input
                type="date"
                className="form-control"
                name="dob"
                id="dob"
                value={formik.values.dob}
                onChange={formik.handleChange}
              />
              <div className="form-text text-danger">{formik.errors.dob}</div>
            </div>

            <div className="mb-3">
              <label htmlFor="message" className="form-label">Message</label>
              <textarea
                className="form-control"
                placeholder="Leave a comment here"
                id="message"
                name="message"
                value={formik.values.message}
                onChange={formik.handleChange}
              />
              <div className="form-text text-danger">{formik.errors.message}</div>
            </div>

            <div className="col-lg-12 text-end">
              <button className="btn btn-primary px-5" type="submit">Submit</button>
            </div>
          </form>
        </div>

        <div className="col-lg-6 table-responsive px-4 py-5">
        <Table tableData={tableData} />
        </div>
      </div>
    </div>
  );
}

export default App;
