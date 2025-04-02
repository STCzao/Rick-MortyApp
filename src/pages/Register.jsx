import React, { useState } from "react";

const Register = () => {

  const [user, setUser] = useState({});

  const handleChange = (event) => {

  };
  //Cuando se dispara el evento OnChange en cualquier input, ejecutamos la funcion HandleChange


  return (
    <div className="container">
      <div className="row pt-5 justify-content-center">
        <form className="col-11 col-md-6 col-lg-4">
          <div className="mb-3">
            <label for="name" className="form-label">
              Name
            </label>
            <input
              type="text"
              className="form-control"
              id="name"
            />
            <label for="lastName" className="form-label">
              Lastname
            </label>
            <input
              type="text"
              className="form-control"
              id="lastName"
            />
            <label for="exampleInputEmail1" className="form-label">
              Email address
            </label>
            <input
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
            />
          </div>
          <div className="mb-3">
            <label for="pass" className="form-label">
              Password
            </label>
            <input
              type="password"
              className="form-control"
              id="pass"
            />
          </div>
          <div className="mb-3">
            <label for="repeatPass" className="form-label">
              Repeat password
            </label>
            <input
              type="password"
              className="form-control"
              id="repeatPass"
            />
          </div>
          <button type="submit" className="btn btn-primary w-100">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Register;
