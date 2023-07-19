import { useContext } from "react";
// //Provider
import FormBaseContext from "../context/FormBaseContext";
// //formik
import { Formik, Form, Field, ErrorMessage } from "formik";
// //SchemaformFamiliarSchema
import { formSocioeconomicaSchema } from "../schemas/formSocioeconomicaSchema";

// Valores iniciales

const FormSocioeconomica = () => {
  const initialValues = {
    ingresosMensuales:
      JSON.parse(localStorage.getItem("respuestas")).ingresosMensuales || "",
    sisben: JSON.parse(localStorage.getItem("respuestas")).sisben || "",
    puntajeSisben:
      JSON.parse(localStorage.getItem("respuestas")).puntajeSisben || "",
    estrato: JSON.parse(localStorage.getItem("respuestas")).estrato || "",
    tipoCasa: JSON.parse(localStorage.getItem("respuestas")).tipoCasa || "",
  };
  const publicar = (values) => {
    var anterior = JSON.parse(localStorage.getItem("respuestas"));

    const mergedDict = { ...values, ...anterior };
    var jsonString = JSON.stringify(mergedDict);
    localStorage.setItem("respuestas", jsonString);
  };
  const { setStep } = useContext(FormBaseContext);
  return (
    <main>
      <h3>Informacion Socioeconomica</h3>
      <div className="card">
        <Formik
          initialValues={initialValues}
          validationSchema={formSocioeconomicaSchema}
          onSubmit={publicar}
        >
          <Form autoComplete="off">
            <fieldset>
              <label htmlFor="ingresosMensuales">
                Ingreso mensual de quien costea sus estudios
              </label>
              <Field
                id="ingresosMensuales"
                name="ingresosMensuales"
                type="text"
                autoFocus
              />

              <ErrorMessage
                name="ingresosMensuales"
                component="p"
                className="error-message"
              />
            </fieldset>
            <fieldset>
              <label htmlFor="sisben">Categoria Sisben </label>
              <Field id="sisben" name="sisben" as="select">
                <option value="">--Seleccione--</option>
                <option value="Categoria 1">Categoria 1</option>
                <option value="Categoria 2">Categoria 2</option>
                <option value="Categoria 3">Categoria 3</option>
                <option value="Categoria 4">Categoria 4</option>
                <option value="Categoria 5">Categoria 5</option>
                <option value="Sin dato">Sin dato</option>
              </Field>
              <ErrorMessage
                name="sisben"
                component="p"
                className="error-message"
              />
            </fieldset>

            <fieldset>
              <label htmlFor="puntajeSisben">Ingrese el puntaje Sisben</label>
              <Field id="puntajeSisben" name="puntajeSisben" type="text" />

              <ErrorMessage
                name="puntajeSisben"
                component="p"
                className="error-message"
              />
            </fieldset>
            <fieldset>
              <label htmlFor="estrato">Estrato socioecomico </label>
              <Field id="estrato" name="estrato" as="select">
                <option value="">--Seleccione--</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
              </Field>
              <ErrorMessage
                name="estrato"
                component="p"
                className="error-message"
              />
            </fieldset>
            <fieldset>
              <label htmlFor="tipoCasa">Tipo de casa </label>
              <Field id="tipoCasa" name="tipoCasa" as="select">
                <option value="">--Seleccione--</option>
                <option value="Propia">Propia</option>
                <option value="Familiar">Familiar</option>
                <option value="Arriendo">Arriendo</option>
                <option value="Cupo U">Cupo U</option>
              </Field>
              <ErrorMessage
                name="tipoCasa"
                component="p"
                className="error-message"
              />
            </fieldset>
            <button
              type="submit"
              onDoubleClick={() => {
                setStep("formadicional");
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
            setStep("formfamiliar");
          }}
        >
          volver
        </span>
      </p>
    </main>
  );
};

export default FormSocioeconomica;
