import PropTypes from "prop-types";
import { FaTrashAlt } from "react-icons/fa";

// import { useState } from "react";

function FormRespuestas({ respuestas, onDelete, onClick }) {
  return (
    <>
      <li>
        <div className="respuesta">
          <div className="contenido">
            <h3
              onClick={() => {
                onClick(respuestas);
                // setStep("forminspect");
              }}
            >
              {respuestas.nombreCompleto}
            </h3>
            <p>Correo:{respuestas.correo}</p>
            <p>Carrera deseada: {respuestas.carreaDeseada}</p>
          </div>
          <div className="icono-o">
            <FaTrashAlt
              className="icono"
              onClick={() => onDelete(respuestas.id)}
            />
          </div>
        </div>
      </li>
    </>
  );
}

FormRespuestas.propTypes = {
  respuestas: PropTypes.object,
  onDelete: PropTypes.func,
  onClick: PropTypes.func,
};

export default FormRespuestas;
