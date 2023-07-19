import axios from "axios";

const obtenerRespuestasAPI = async ()=>{
    try{
        const respuesta = await axios.get("http://localhost:3001/respuestas");
        if(respuesta.status === 200) {
            return respuesta.data;
            }
    } catch(error){
        console.log("Hubo un error al conectar las repuestas");
    }
};


const agregarRespuestasAPI = async (diligencia)=>{
    try{
        const respuesta = await axios.post("http://localhost:3001/respuestas", diligencia)
        if(respuesta.status === 201){
            return respuesta.data;
        }
    }catch(error){
        console.log("Hubo un error al agregar la respuestas");
    }
};

const eliminarRespuestasAPI = async (id)=>{
    try{
        
        const respuesta = await axios.delete(`http://localhost:3001/respuestas/${id}`);
        if(respuesta.status ===200){
            return respuesta.data;
        }
        return null;
    }
    catch(error){
        console.log("Hubo un error al elminar la respuesta");
        return null;
    }
}
const modificaRespuestasAPI = async (id, respuestaMod)=>{
    try{
        const respuestaID = await axios.put(`http://localhost:3001/respuestas/${id}`,respuestaMod)
        // obtenerRespuestasAPI();
        if(respuestaID.status === 200){
            return respuestaID.data;
        }
        return null;
    }catch(e){
        console.log("Hubo un error al realizar la consulta");
        return null;
    }
}

export {obtenerRespuestasAPI, agregarRespuestasAPI, eliminarRespuestasAPI, modificaRespuestasAPI}