import React, { Fragment, useState } from "react";

const Registro = () => {
  {
    /* creacion de un objeto */
  }
  const [datos, setDatos] = useState({
    nombre: "",
    correo: "",
    rut: "",
  });
  /* creacion de un funcion que reaccionará al evento */
  const handleInpuntChange = (event) =>{
    console.log('funcion')

  }

  return (
    <Fragment>
      <>
        <form>
          <div className="col-md-3">
            <h1>Registro estudiantes</h1>
            <label>
              Nombre y Apellido:
              <input type="text" name="nombre" className="form-control" onChange={handleInpuntChange}  />
            </label>
          </div>

          <div className="col-md-3">
            <label>
              Correo:
              <input type="email" name="apellido" className="form-control" onChange={handleInpuntChange} />
            </label>
          </div>

          <div className="col-md-3">
            <label>
              Rut:
              <input type="text" name="rut" className="form-control" onChange={handleInpuntChange} />
            </label>
          </div>

          <div className="col-md-3">
            <button className="btn btn-primary" type="submit">
              Ingresar estudiante
            </button>
          </div>
        </form>
      </>
    </Fragment>
  );
};

export default Registro;
