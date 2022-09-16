import React, { Fragment, useState } from 'react';
import { useForm }from "react-hook-form";

const Login = () => {

  const { register, handleSubmit} = useForm ();

  const onSubmit = data =>{
    console.log(data);
  }

  const [datos, setDatos] = useState({
    email: " ",
    password: " "
  });

  const manejoFormulario = (event) => {
      setDatos({
        ...datos,
        [event.target.name] : event.target.value,

      })
    }

   // const ingresar = (event)=> {
     //   event.preventDefault();
       // console.log(datos.email + ' ' + datos.password )
    //}
    return (  

        <Fragment>
  
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="col-md-3">
              <h1>Login</h1>
              <label>
                Correo:
                <input type="email" name="email" 
                className="form-control" {...register('email',{required:true})} />
              </label>
            </div>
  
            <div className="col-md-3">
              <label>
                Password:
                <input type="password" name="password" 
                className="form-control" {...register('password', {required:true})} />
              </label>
            </div>

            <div className="col-md-3">
              <button className="btn btn-primary" type="submit">
                Ingresar 
              </button>
            </div>
          </form>
          
      </Fragment>
    );
}
 
export default Login;