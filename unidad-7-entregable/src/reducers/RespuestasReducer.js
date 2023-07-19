const respuestasReducer = (respuestas,action)=>{

    switch (action.type) {
        case "CARGAR":
            return action.respuestas ? [...action.respuestas] : [];
        case "AGREGAR":
            return [...respuestas,action.nuevaRespuesta];
        case "MODIFICARID":
            return 
        case "MODIFICAR":
            return respuestas.map((respuesta) =>
            respuestas.id === action.id ? {...respuesta,Termiana:!respuesta.terminada} : respuesta);
        case "ELIMINAR":
            return respuestas.filter((respuesta) => respuesta.id !== action.id);
        default: 
            throw Error("Unknown action type");
    }


}

export default respuestasReducer;