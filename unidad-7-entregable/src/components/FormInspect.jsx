import PropTypes from "prop-types";

import FormInspectContext from "../context/FormInspectContext";
import { useContext } from "react";

function FormInspect() {
  const { setStep } = useContext(FormInspectContext);
  const opcionSeleccionada = useContext(FormInspectContext);
  return (
    <main>
      <div>{opcionSeleccionada.nombreCompleto}</div>
      <p>
        <span
          onClick={() => {
            setStep("formconsulta");
          }}
        >
          {" "}
          Volver
        </span>
      </p>
    </main>
  );
}
//definicion de propiedades

FormInspect.propTypes = {
  opcion: PropTypes.object,
};

export default FormInspect;
