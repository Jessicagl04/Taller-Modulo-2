import React, { useState } from "react";
import "./App.scss";
import data from "./data.json";

function App() {
  const [citas, setCitas] = useState(data.citas);
  const [nuevaCita, setNuevaCita] = useState({
    nombreMascota: "",
    edad: "",
    genero: "",
    diaCita: "",
    nombreDueno: "",
  });
  const [errores, setErrores] = useState({});

  const validarFormulario = () => {
    const nuevosErrores = {};
    if (!nuevaCita.nombreMascota) {
      nuevosErrores.nombreMascota = "El nombre de la mascota es requerido";
    }
    if (!nuevaCita.edad) {
      nuevosErrores.edad = "La edad es requerida";
    }
    if (!nuevaCita.genero) {
      nuevosErrores.genero = "El género es requerido";
    }
    if (!nuevaCita.diaCita) {
      nuevosErrores.diaCita = "El día de la cita es requerido";
    }
    if (!nuevaCita.nombreDueno) {
      nuevosErrores.nombreDueno = "El nombre del dueño es requerido";
    }
    setErrores(nuevosErrores);
    return Object.keys(nuevosErrores).length === 0;
  };

  const agregarCita = () => {
    if (validarFormulario()) {
      const nuevasCitas = [...citas, nuevaCita];
      setCitas(nuevasCitas);
      setNuevaCita({
        nombreMascota: "",
        edad: "",
        genero: "",
        diaCita: "",
        nombreDueno: "",
      });
    }
  };

  return (
    <div className="App">
      <h1>Formulario de Cita de Mascotas</h1>
      <div className="formulario">
        <input
          type="text"
          placeholder="Nombre Mascota"
          value={nuevaCita.nombreMascota}
          onChange={(e) =>
            setNuevaCita({ ...nuevaCita, nombreMascota: e.target.value })
          }
        />
        {errores.nombreMascota && (
          <p className="error">{errores.nombreMascota}</p>
        )}

        <input
          type="text"
          placeholder="Edad"
          value={nuevaCita.edad}
          onChange={(e) => setNuevaCita({ ...nuevaCita, edad: e.target.value })}
        />
        {errores.edad && <p className="error">{errores.edad}</p>}

        <input
          type="text"
          placeholder="Género"
          value={nuevaCita.genero}
          onChange={(e) =>
            setNuevaCita({ ...nuevaCita, genero: e.target.value })
          }
        />
        {errores.genero && <p className="error">{errores.genero}</p>}

        <input
          type="text"
          placeholder="Día de la Cita"
          value={nuevaCita.diaCita}
          onChange={(e) =>
            setNuevaCita({ ...nuevaCita, diaCita: e.target.value })
          }
        />
        {errores.diaCita && <p className="error">{errores.diaCita}</p>}

        <input
          type="text"
          placeholder="Nombre del Dueño"
          value={nuevaCita.nombreDueno}
          onChange={(e) =>
            setNuevaCita({ ...nuevaCita, nombreDueno: e.target.value })
          }
        />
        {errores.nombreDueno && <p className="error">{errores.nombreDueno}</p>}

        <button onClick={agregarCita}>Agendar Cita</button>
      </div>
      <div className="citas">
        {citas.map((cita, index) => (
          <div key={index} className="cita">
            <h2>{cita.nombreMascota}</h2>
            <p>Edad: {cita.edad}</p>
            <p>Género: {cita.genero}</p>
            <p>Día de la Cita: {cita.diaCita}</p>
            <p>Dueño: {cita.nombreDueno}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
