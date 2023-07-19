import FormInit from "./components/FormInit";
import FormConsulta from "./components/FormConsulta";
import FormBase from "./components/FormBase";
import FormAcademica from "./components/FormAcademica";
import FormFamiliar from "./components/FormFamiliar";
import FormSocioeconomica from "./components/FormSocioeconomica";
import FormInfoAdicional from "./components/FormInfoAdicional";
// import FormInspect from "./components/FormInspect";
import { useState, useReducer, useEffect } from "react";
//Provider
import FormBaseContext from "./context/FormBaseContext";
// aqui
// //importacion de manipulacion back
import {
  eliminarRespuestasAPI,
  obtenerRespuestasAPI,
  modificaRespuestasAPI,
} from "./api/respuestasApi";
// //import reducer
import respuestasReducer from "./reducers/RespuestasReducer";
// aqui

function App() {
  // aqui
  // //estado del componente
  const [respuestas, dispatch] = useReducer(respuestasReducer, []);

  useEffect(() => {
    const obtenerRespuestas = async () => {
      const respuestas = await obtenerRespuestasAPI();
      dispatch({ type: "CARGAR", respuestas });
    };
    obtenerRespuestas();
  }, []);
  // const agregarRespuesta = async (respuesta) => {
  //   const nuevaRespuesta = await agregarRespuestasAPI(respuesta);
  //   dispatch({ type: "AGREGAR", nuevaRespuesta });
  // };
  const eliminarRespuestas = async (id) => {
    const respuestaID = await eliminarRespuestasAPI(id);
    if (respuestaID) {
      dispatch({ type: "ELIMINAR", id });
    }
  };
  const modificarID = async (id, respuestaMod) => {
    const respuestaModID = await modificaRespuestasAPI(id, respuestaMod);
    return respuestaModID;
  };

  //navegacoin en el provider
  const [step, setStep] = useState("forminit");
  const [respuesta, setRespuesta] = useState(respuestas);
  return (
    <FormBaseContext.Provider
      value={{ step, setStep, respuesta, setRespuesta }}
    >
      <div className="container">
        {step === "forminit" && <FormInit />}
        {step === "formconsulta" && (
          <FormConsulta
            respuestas={respuestas}
            onDelete={eliminarRespuestas}
            onModify={modificarID}
          />
        )}
        {step === "formbase" && <FormBase />}
        {step === "formacademica" && <FormAcademica />}
        {step === "formfamiliar" && <FormFamiliar />}
        {step === "formsocioeconomica" && <FormSocioeconomica />}
        {step === "formadicional" && <FormInfoAdicional />}

        {/* {step === "forminspect" && <FormInspect />} */}
      </div>
    </FormBaseContext.Provider>
  );
}

export default App;
