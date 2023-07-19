import { useContext } from "react";
// //Provider
import FormBaseContext from "../context/FormBaseContext";
// //formik
// //Schema
// import { formBaseSchema } from "../schemas/formBaseSchema";

// Valores iniciales

const FormInit = () => {
  const { setStep } = useContext(FormBaseContext);
  return (
    <main>
      <h3>Bienvenido al formulario correspondiente modulo 7!</h3>
      <div className="card">
        <h3>Seleccione alguna de las siguientes acciones</h3>
      </div>
      <p>
        <span
          onClick={() => {
            setStep("formconsulta");
          }}
        >
          {" "}
          Consultar
        </span>
        <span
          onClick={() => {
            setStep("formbase");
            // console.log(localStorage.getItem("respuestas") || "error");
          }}
        >
          {" "}
          Nueva Respuesta
        </span>
      </p>
    </main>
  );
};

export default FormInit;
