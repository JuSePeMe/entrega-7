import { useContext } from "react";
// //Provider
import FormBaseContext from "../context/FormBaseContext";
// //formik
import { Formik, Form, Field, ErrorMessage } from "formik";
// //Schema
import { formFamiliarSchema } from "../schemas/formFamiliarSchema";

// Valores iniciales

const FormFamiliar = () => {
  const initialValues = {
    nivelEducativoPa:
      JSON.parse(localStorage.getItem("respuestas")).nivelEducativoPa || "",
    nivelEducativoMa:
      JSON.parse(localStorage.getItem("respuestas")).nivelEducativoMa || "",
    ocupacionPa:
      JSON.parse(localStorage.getItem("respuestas")).ocupacionPa || "",
    ocupacionMa:
      JSON.parse(localStorage.getItem("respuestas")).ocupacionMa || "",
    numeroHermanos:
      JSON.parse(localStorage.getItem("respuestas")).numeroHermanos || "",
    posicionEntre:
      JSON.parse(localStorage.getItem("respuestas")).posicionEntre || "",
    hermanosEducacion:
      JSON.parse(localStorage.getItem("respuestas")).hermanosEducacion || "",
  };
  const publicar = (values) => {
    let anterior = JSON.parse(localStorage.getItem("respuestas"));

    const mergedDict = { ...values, ...anterior };
    let jsonString = JSON.stringify(mergedDict);
    localStorage.setItem("respuestas", jsonString);
  };
  const { setStep } = useContext(FormBaseContext);
  return (
    <main>
      <h3>Informacion Familiar</h3>
      <div className="card">
        <Formik
          initialValues={initialValues}
          validationSchema={formFamiliarSchema}
          onSubmit={publicar}
        >
          <Form autoComplete="off">
            <fieldset>
              <label htmlFor="nivelEducativoPa">
                Nivel educativo de su padre{" "}
              </label>
              <Field id="nivelEducativoPa" name="nivelEducativoPa" as="select">
                <option value="">--Seleccione--</option>
                <option value="Basica Primaria">Basico Primaria</option>
                <option value="Secundaria">Secundaria</option>
                <option value="Tecnologo">Tecnologo</option>
                <option value="Profesional">Profesional</option>
                <option value="Maestria">Maestria</option>
              </Field>
              <ErrorMessage
                name="nivelEducativoPa"
                component="p"
                className="error-message"
              />
            </fieldset>
            <fieldset>
              <label htmlFor="nivelEducativoMa">
                Nivel educativo de su madre{" "}
              </label>
              <Field id="nivelEducativoMa" name="nivelEducativoMa" as="select">
                <option value="">--Seleccione--</option>
                <option value="Basica Primaria">Basico Primaria</option>
                <option value="Secundaria">Secundaria</option>
                <option value="Tecnologo">Tecnologo</option>
                <option value="Profesional">Profesional</option>
                <option value="Maestria">Maestria</option>
              </Field>
              <ErrorMessage
                name="nivelEducativoMa"
                component="p"
                className="error-message"
              />
            </fieldset>

            <fieldset>
              <label htmlFor="ocupacionPa">Ocupacion padre </label>
              <Field id="ocupacionPa" name="ocupacionPa" type="text" />

              <ErrorMessage
                name="ocupacionPa"
                component="p"
                className="error-message"
              />
            </fieldset>
            <fieldset>
              <label htmlFor="ocupacionMa">Ocupacion madre </label>
              <Field id="ocupacionMa" name="ocupacionMa" type="text" />

              <ErrorMessage
                name="ocupacionMa"
                component="p"
                className="error-message"
              />
            </fieldset>
            <fieldset>
              <label htmlFor="numeroHermanos">Numero de hermanos </label>
              <Field id="numeroHermanos" name="numeroHermanos" type="text" />

              <ErrorMessage
                name="numeroHermanos"
                component="p"
                className="error-message"
              />
            </fieldset>
            <fieldset>
              <label htmlFor="posicionEntre">
                Posicion entre sus hermanos{" "}
              </label>
              <Field id="posicionEntre" name="posicionEntre" type="text" />

              <ErrorMessage
                name="posicionEntre"
                component="p"
                className="error-message"
              />
            </fieldset>
            <fieldset>
              <label htmlFor="hermanosEducacion">
                Hemanos con educacion superior{" "}
              </label>
              <Field
                id="hermanosEducacion"
                name="hermanosEducacion"
                type="text"
              />

              <ErrorMessage
                name="hermanosEducacion"
                component="p"
                className="error-message"
              />
            </fieldset>
            <button
              type="submit"
              onDoubleClick={() => {
                setStep("formsocioeconomica");
              }}
            >
              Siguiente
            </button>
          </Form>
        </Formik>
      </div>
      <p>
        <span
          onClick={() => {
            setStep("formacademica");
          }}
        >
          Volver
        </span>
      </p>
    </main>
  );
};

export default FormFamiliar;
