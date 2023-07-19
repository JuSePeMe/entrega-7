import { useContext, useState, useEffect } from "react";
// //Provider
import FormBaseContext from "../context/FormBaseContext";
// //formik
import { Formik, Form, Field, ErrorMessage } from "formik";
// //Schema
import { formBaseSchema } from "../schemas/formBaseSchema";

// Valores iniciales
const FormBase = () => {
  const { setStep } = useContext(FormBaseContext);
  const [localRespuesta, setLocalRespuesta] = useState("");

  useEffect(() => {
    const dataGuarda = localStorage.getItem("respuestas");
    if (dataGuarda) {
      const parceData = JSON.parse(dataGuarda);
      // const asgData = parceData?.localRespuesta;
      setLocalRespuesta(parceData);
      console.log(parceData);
    }
  }, []);

  const initialValues = {
    nombreCompleto: localRespuesta.nombreCompleto || "",
    correo: localRespuesta.correo || "",
    documentoTipo: localRespuesta.documentoTipo || "",
    documentoNumero: localRespuesta.documentoNumero || "",
    direccion: localRespuesta.direccion || "",
    telefono: localRespuesta.telefono || "",
    sexoBiologico: localRespuesta.sexoBiologico || "",
    tipoSangre: localRespuesta.tipoSangre || "",
    rh: localRespuesta.rh || "",
    nacionalidad: localRespuesta.nacionalidad || "",
    barrio: localRespuesta.barrio || "",
    localidad: localRespuesta.localidad || "",
  };
  // const initialValues = {
  //   nombreCompleto: "",
  //   correo: "",
  //   documentoTipo: "",
  //   documentoNumero: "",
  //   direccion: "",
  //   telefono: "",
  //   sexoBiologico: "",
  //   tipoSangre: "",
  //   rh: "",
  //   nacionalidad: "",
  //   barrio: "",
  //   localidad: "",
  // };

  const publicar = (values) => {
    let jsonString = JSON.stringify(values);
    localStorage.setItem("respuestas", jsonString);
  };
  return (
    <main>
      <h3>Informacion Basica</h3>
      <div className="card">
        <Formik
          initialValues={initialValues}
          validationSchema={formBaseSchema}
          onSubmit={publicar}
        >
          <Form autoComplete="off">
            <fieldset>
              <label htmlFor="nombreCompleto">Nombre completo:</label>
              <Field
                id="nombreCompleto"
                name="nombreCompleto"
                type="text"
                autoFocus
              />
              <ErrorMessage
                name="nombreCompleto"
                component="p"
                className="error-message"
              />
            </fieldset>
            <fieldset>
              <label htmlFor="correo">Correo </label>
              <Field id="correo" name="correo" type="email" />
              <ErrorMessage
                name="correo"
                component="p"
                className="error-message"
              />
            </fieldset>
            <fieldset>
              <label htmlFor="documentoTipo">Tipo de documento </label>
              <Field id="documentoTipo" name="documentoTipo" as="select">
                <option value="">--Seleccione--</option>
                <option value="CC">CC</option>
                <option value="TI">TI</option>
                <option value="CE">CE</option>
              </Field>
              <ErrorMessage
                name="documentoTipo"
                component="p"
                className="error-message"
              />
            </fieldset>
            <fieldset>
              <label htmlFor="documentoNumero">Numero de documento </label>
              <Field id="documentoNumero" name="documentoNumero" type="text" />

              <ErrorMessage
                name="documentoNumero"
                component="p"
                className="error-message"
              />
            </fieldset>
            <fieldset>
              <label htmlFor="direccion">Direccion </label>
              <Field id="direccion" name="direccion" type="text" />

              <ErrorMessage
                name="direccion"
                component="p"
                className="error-message"
              />
            </fieldset>
            <fieldset>
              <label htmlFor="telefono">Telefono </label>
              <Field id="telefono" name="telefono" type="text" />

              <ErrorMessage
                name="telefono"
                component="p"
                className="error-message"
              />
            </fieldset>
            <fieldset>
              <label htmlFor="sexoBiologico">Sexo Biologico </label>
              <Field id="sexoBiologico" name="sexoBiologico" as="select">
                <option value="">--Seleccione--</option>
                <option value="Hombre">Hombre</option>
                <option value="Mujer">Mujer</option>
              </Field>
              <ErrorMessage
                name="sexoBiologico"
                component="p"
                className="error-message"
              />
            </fieldset>
            <fieldset>
              <label htmlFor="tipoSangre">Tipo de sangre </label>
              <Field id="tipoSangre" name="tipoSangre" as="select">
                <option value="">--Seleccione--</option>
                <option value="A">A</option>
                <option value="AB">AB</option>
                <option value="B">B</option>
                <option value="O">O</option>
              </Field>
              <ErrorMessage
                name="tipoSangre"
                component="p"
                className="error-message"
              />
            </fieldset>
            <fieldset>
              <label htmlFor="rh">Tipo de RH </label>
              <Field id="rh" name="rh" as="select">
                <option value="">--Seleccione--</option>
                <option value="+">+</option>
                <option value="-">-</option>
              </Field>
              <ErrorMessage name="rh" component="p" className="error-message" />
            </fieldset>
            <fieldset>
              <label htmlFor="nacionalidad">Nacionalidad </label>
              <Field id="nacionalidad" name="nacionalidad" type="text" />

              <ErrorMessage
                name="nacionalidad"
                component="p"
                className="error-message"
              />
            </fieldset>
            <fieldset>
              <label htmlFor="barrio">Barrio en el que vive </label>
              <Field id="barrio" name="barrio" type="text" />

              <ErrorMessage
                name="barrio"
                component="p"
                className="error-message"
              />
            </fieldset>
            <fieldset>
              <label htmlFor="localidad">Localidad en el que vive </label>
              <Field id="localidad" name="localidad" type="text" />

              <ErrorMessage
                name="localidad"
                component="p"
                className="error-message"
              />
            </fieldset>
            <button
              type="submit"
              onDoubleClick={() => {
                setStep("formacademica");
                console.log(localRespuesta);
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
            setStep("forminit");
            localStorage.clear();
            // console.log(
            //   JSON.parse(localStorage.getItem("respuestas")).nombreCompleto
            // );
            // setInitialValues(modiInitValues);
            // console.log(setInitialValues(modiInitValues), "mod");
            // console.log(initialValues);
            console.log(localRespuesta.nombreCompleto);
          }}
        >
          Volver
        </span>
      </p>
    </main>
  );
};

export default FormBase;
