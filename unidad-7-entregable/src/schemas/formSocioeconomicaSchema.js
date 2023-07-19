import * as Yup from "yup";
export const formSocioeconomicaSchema = Yup.object().shape({

    ingresosMensuales: Yup.number().integer().required("El ingreso mensual de quien costea sus estudios es requerido"),
    sisben: Yup.string().oneOf(['Categoria 1','Categoria 2','Categoria 3','Categoria 4', 'Categoria 5','Sin dato'],null).required("El nivel de educacion es requerido"),
    puntajeSisben: Yup.number().required("El puntaje sisben es requerido"),
    estrato: Yup.number().oneOf(['1','2','3','4', '5','6'],null).required("El estrato requerido"),
    tipoCasa: Yup.string().oneOf(['Propia','Familiar','Arriendo','Cupo U'],null).required("El El tipo de vivienda/casa es requerido"),
})