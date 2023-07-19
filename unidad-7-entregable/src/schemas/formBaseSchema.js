import * as Yup from "yup";
export const formBaseSchema = Yup.object().shape({
    nombreCompleto: Yup.string().min(2,"El nombre completo debe tener como minimo mas de tres caracteres").required("Nombre completo es requerido"),
    correo: Yup.string().email("Ingrese un correo valido").required("El correo es requerido"), 
    documentoTipo: Yup.string().oneOf(['CC','TI','CE'],null).required("El tipo de documento es requerido"),
    documentoNumero: Yup.number().integer().required("El numero de documento es requerido"),
    direccion: Yup.string().min(5,"La direccion debe ser mas larga de 5 caracteres").required("La direccion es requerida"),
    telefono: Yup.number().integer().required("El numero de telefono es requerido"),
    sexoBiologico: Yup.string().oneOf(["Hombre, Mujer"],null).required("El sexo biologico es requerido"),
    tipoSangre: Yup.string().oneOf(["A","AB","B","O"],null).required("El tipo de sange es requerido"),
    rh: Yup.string().oneOf(['+','-']).required("El tipo de RH es requerido"),
    nacionalidad: Yup.string().required("La nacionalidad es requerida"),
    barrio: Yup.string().required("El barrio es requerido"),
    localidad: Yup.string().required("El localidad es requerida")
})