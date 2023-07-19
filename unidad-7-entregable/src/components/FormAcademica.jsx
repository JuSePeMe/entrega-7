import { useContext } from "react";
// //Provider
import FormBaseContext from "../context/FormBaseContext";
// //formik
import { Formik, Form, Field, ErrorMessage } from "formik";
// //Schema
import { formAcademicaSchema } from "../schemas/formAcademicaSchema";

// Valores iniciales

const FormAcademica = () => {
  const initialValues = {
    colegio: JSON.parse(localStorage.getItem("respuestas")).colegio || "",
    jornada: JSON.parse(localStorage.getItem("respuestas")).jornada || "",
    calendario: JSON.parse(localStorage.getItem("respuestas")).calendario || "",
    metodologia:
      JSON.parse(localStorage.getItem("respuestas")).metodologia || "",
    fechaGrado: JSON.parse(localStorage.getItem("respuestas")).fechaGrado || "",
    carreaDeseada:
      JSON.parse(localStorage.getItem("respuestas")).carreaDeseada || "",
    razonDeseada:
      JSON.parse(localStorage.getItem("respuestas")).razonDeseada || "",
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
      <h3>Informacion Academica</h3>
      <div className="card">
        <Formik
          initialValues={initialValues}
          validationSchema={formAcademicaSchema}
          onSubmit={publicar}
        >
          <Form autoComplete="off">
            <fieldset>
              <label htmlFor="nombreCompleto">Colegio </label>
              <Field id="colegio" name="colegio" type="text" autoFocus />
              <ErrorMessage
                name="colegio"
                component="p"
                className="error-message"
              />
            </fieldset>

            <fieldset>
              <label htmlFor="jornada">Jornada </label>
              <Field id="jornada" name="jornada" as="select">
                <option value="">--Seleccione--</option>
                <option value="tarde">Tarde</option>
                <option value="mañana">Mañana</option>
                <option value="completa">Completa</option>
              </Field>
              <ErrorMessage
                name="jornada"
                component="p"
                className="error-message"
              />
            </fieldset>
            <fieldset>
              <label htmlFor="calendario">Calendario </label>
              <Field id="calendario" name="calendario" as="select">
                <option value="">--Seleccione--</option>
                <option value="A">A</option>
                <option value="B">B</option>
                <option value="ciclosPropedeudicos">
                  Ciclos propedeudicos
                </option>
              </Field>
              <ErrorMessage
                name="calendario"
                component="p"
                className="error-message"
              />
            </fieldset>
            <fieldset>
              <label htmlFor="metodologia">Metodologia </label>
              <Field id="metodologia" name="metodologia" as="select">
                <option value="">--Seleccione--</option>
                <option value="Sin dato">Sin dato</option>
                <option value="Educacion Tradicional">
                  Educacion tradicional
                </option>
                <option value="Escuela Nueva">Escuela Nueva</option>

                <option value="Telesecundaria">Telesecundaria</option>
                <option value="Aceleracion de aprendizaje">
                  Aceleracion de aprendizaje
                </option>
                <option value="Prog para jovenes en extraedad y adultos">
                  Prog para jovenes en extraedad y adultos
                </option>
              </Field>
              <ErrorMessage
                name="metodologia"
                component="p"
                className="error-message"
              />
            </fieldset>

            <fieldset>
              <label htmlFor="fechaGrado">Fecha de grado </label>
              <Field id="fechaGrado" name="fechaGrado" type="date" />

              <ErrorMessage
                name="fechaGrado"
                component="p"
                className="error-message"
              />
            </fieldset>
            <fieldset>
              <label htmlFor="carreaDeseada">Carrera deseada </label>
              <Field id="carreaDeseada" name="carreaDeseada" type="text" />

              <ErrorMessage
                name="carreaDeseada"
                component="p"
                className="error-message"
              />
            </fieldset>
            <fieldset>
              <label htmlFor="razonDeseada">
                Razon por la cual desea cursar esa carrera ?{" "}
              </label>
              <Field id="razonDeseada" name="razonDeseada" type="text" />

              <ErrorMessage
                name="razonDeseada"
                component="p"
                className="error-message"
              />
            </fieldset>
            <button
              type="submit"
              onDoubleClick={() => {
                setStep("formfamiliar");
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
            setStep("formbase");
          }}
        >
          Volver
        </span>
      </p>
    </main>
  );
};

export default FormAcademica;
