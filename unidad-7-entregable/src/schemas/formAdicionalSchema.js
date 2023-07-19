import * as Yup from "yup";
export const formAdicionalSchema = Yup.object().shape({

    adicional: Yup.string().required("El comentario de observaciones es es requerido"),

})