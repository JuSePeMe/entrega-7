import * as Yup from "yup";
export const formAcademicaSchema = Yup.object().shape({
    colegio: Yup.string().min(3,"El nombre del colegio debe tener como minimo mas de tres caracteres").required("Nombre completo de la institucion es requerido"),
    jornada: Yup.string().oneOf(["tarde, mañana, completa"],null).required("La joranada es requirida"),
    calendario: Yup.string().oneOf(["A, B, ciclosPropedeudicos"],null).required("El tipo de calendario es requerido"),
    metodologia: Yup.string().oneOf(['Sin dato','Educacion Tradicional','Escuela Nueva','Telesecundaria','Aceleracion de aprendizaje','Prog para jovenes en extraedad y adultos']).required("El tipo de metodologia es requerido es requirido"),
    fechaGrado: Yup.date().required("La fecha de grado es requerida"),
    carreaDeseada: Yup.string().required("La carreara deseada es requerida"),
    razonDeseada: Yup.string().required("La razon de la seleccion de la carrera es requerida"),
})