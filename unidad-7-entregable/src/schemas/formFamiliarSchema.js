import * as Yup from "yup";
export const formFamiliarSchema = Yup.object().shape({

    nivelEducativoPa: Yup.string().oneOf(['Basica Primaria','Secundaria','Tecnologo','Profesional', 'Maestria'],null).required("El nivel de educacion es requerido"),
    nivelEducativoMa: Yup.string().oneOf(['Basica Primaria','Secundaria','Tecnologo','Profesional', 'Maestria'],null).required("El nivel de educacion es requerido"),
    ocupacionPa: Yup.string().min(5,"La ocupacion debe contener mas de 5 caracteres").required("La ocupacion es requerida"),
    ocupacionMa: Yup.string().min(5,"La ocupacion debe contener mas de 5 caracteres").required("La ocupacion es requerida"),
    numeroHermanos: Yup.number().integer().required("El numero de hermanos es requerido"),
    posicionEntre: Yup.number().integer().required("La posicion entre hermanos es requerido"),
    hermanosEducacion: Yup.number().integer().required("El numero de hermanos con educacion superior es requerido"),
   
})