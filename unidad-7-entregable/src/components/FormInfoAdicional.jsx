import { useContext } from "react";
// //Provider
import FormBaseContext from "../context/FormBaseContext";
// //formik
import { Formik, Form, Field, ErrorMessage } from "formik";
// //SchemaformFamiliarSchema
import { formAdicionalSchema } from "../schemas/formAdicionalSchema";
import { agregarRespuestasAPI } from "../api/respuestasApi";
import respuestasReducer from "../reducers/RespuestasReducer";
import { useReducer } from "react";

// Valores iniciales

const FormInfoAdicional = () => {
  const initialValues = {
    adicional: JSON.parse(localStorage.getItem("respuestas")).adicional || "",
  };
  const [, dispatch] = useReducer(respuestasReducer, []);

  const publicar = (values) => {
    console.log(values);
    var anterior = JSON.parse(localStorage.getItem("respuestas"));
    const mergedDict = { ...values, ...anterior };
    var jsonString = JSON.stringify(mergedDict);
    localStorage.setItem("respuestas", jsonString);

    const nuevaRespuesta = agregarRespuestasAPI(mergedDict);
    console.log(nuevaRespuesta);
    dispatch({ type: "AGREGAR", nuevaRespuesta });

    // alert("Formulario subido con exito al servidor");
  };
  const { setStep } = useContext(FormBaseContext);
  return (
    <main>
      <h3>Comentarios Adicionales</h3>
      <div className="card">
        <Formik
          initialValues={initialValues}
          validationSchema={formAdicionalSchema}
          onSubmit={publicar}
        >
          <Form autoComplete="off">
            <fieldset>
              <label htmlFor="adicional">
                Ingrese observaciones adicionales
              </label>
              <Field id="adicional" name="adicional" as="textarea" />

              <ErrorMessage
                name="adicional"
                component="p"
                className="error-message"
              />
            </fieldset>
            <button
              type="submit"
              onDoubleClick={() => {
                setStep("forminit");
                localStorage.clear();
              }}
            >
              Registrar
            </button>
          </Form>
        </Formik>
      </div>
      <p>
        <span
          onClick={() => {
            setStep("formsocioeconomica");
          }}
        >
          Volver
        </span>
      </p>
    </main>
  );
};

export default FormInfoAdicional;
