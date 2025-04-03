import React, { useState, useEffect } from "react";
import { preconnect } from "react-dom";

const Register = () => {

  const [user, setUser] = useState({});
  const [btnDisabled, setBtnDisabled] = useState(false)
  const handleChange = (event) => {
    const {id, value} = event.target; 
    setUser((prevState) => ({
      ...prevState,
      [id] : value
    }));
  };
  
  useEffect(() => {
    const handleValidations = () => {
      if(!user.name || user?.name?.length === 0) {
        setBtnDisabled(true)
      } else {
        setBtnDisabled(false)
      }
    }
    handleValidations();
  }, [user])
  

  //Cuando se dispara el evento OnChange en cualquier input, ejecutamos la funcion HandleChange
  //La constante de handleChange a utilizamos para desestructurar event, luego ingresamos a target y buscamos los valores de ID y Value
  //Incorporamos el Spread Operator para traer los valores previos que almacenados en el string y guardarlos en vez de sobrescribirlos. El ID almacena el valor que paso el usuario
  //En vez de onChange, utilizaremos onBlur. Con onChange el valor cambia por cada caracter ingresado al input y con onBlur cambia solo cuando le quitamos el foco al input
  return (
    <div className="container">
      <div className="row pt-5 justify-content-center">
        <form className="col-11 col-md-6 col-lg-4">
          <div className="mb-3">
            <label htmlFor="name" className="form-label">
              Name
            </label>
            <input
              type="text"
              className="form-control"
              id="name"
              onBlur={handleChange}
            /> 
            <label htmlFor="lastName" className="form-label">
              Lastname
            </label>
            <input
              type="text"
              className="form-control"
              id="lastName"
              onBlur={handleChange}
            />
            <label htmlFor="exampleInputEmail1" className="form-label">
              Email address
            </label>
            <input
              type="email"
              className="form-control"
              id="email"
              onBlur={handleChange}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="pass" className="form-label">
              Password
            </label>
            <input
              type="password"
              className="form-control"
              id="pass"
              onBlur={handleChange}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="repeatPass" className="form-label">
              Repeat password
            </label>
            <input
              type="password"
              className="form-control"
              id="repeatPass"
              onBlur={handleChange}
            />
          </div>
          <button type="submit" className="btn btn-primary w-100" disabled={btnDisabled}>
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Register;
