import PropTypes from "prop-types";
import FormRespuestas from "./FormRespuestas";
import FormBaseContext from "../context/FormBaseContext";
import { useContext, useState } from "react";

// import { useState } from "react";

const FormConsulta = ({ respuestas, onDelete, onModify }) => {
  const { setStep } = useContext(FormBaseContext);
  const [visible, setVisible] = useState(true);
  const [, setRes] = useState(null);
  const [nombre, setNombre] = useState(null);
  const [correo, setCorreo] = useState(null);
  const [documentoTipo, setDocumentoTipo] = useState("");
  const [documentoNumero, setDocumentoNumero] = useState(null);
  const [direccion, setDireccion] = useState(null);
  const [telefono, setTelefono] = useState(null);
  const [sexoBiologico, setSexoBiologico] = useState(null);
  const [tipoSangre, setTipoSangre] = useState(null);
  const [rh, setRh] = useState(null);
  const [nacionalidad, setNacionalidad] = useState(null);
  const [barrio, setBarrio] = useState(null);
  const [localidad, setLocalidad] = useState(null);
  const [colegio, setColegio] = useState(null);
  const [jornada, setJornada] = useState(null);
  const [calendario, setCalendario] = useState(null);
  const [metodologia, setMetodologia] = useState(null);
  const [fechaGrado, setFechaGrado] = useState(null);
  const [carreaDeseada, setCarreaDeseada] = useState(null);
  const [razonDeseada, setRazonDeseada] = useState(null);
  const [nivelEducativoPa, setNivelEducativoPa] = useState(null);
  const [nivelEducativoMa, setNivelEducativoMa] = useState(null);
  const [ocupacionPa, setOcupacionPa] = useState(null);
  const [ocupacionMa, setOcupacionMa] = useState(null);
  const [numeroHermanos, setNumeroHermanos] = useState(null);
  const [posicionEntre, setPosicionEntre] = useState(null);
  const [hermanosEducacion, setHermanosEducacion] = useState(null);
  const [ingresosMensuales, setIngresosMensuales] = useState(null);
  const [sisben, setSisben] = useState(null);
  const [puntajeSisben, setPuntajeSisben] = useState(null);
  const [estrato, setEstrato] = useState(null);
  const [tipoCasa, setTipoCasa] = useState(null);
  const [adicional, setAdicional] = useState(null);
  const [id, setId] = useState(null);
  const [mod, setMod] = useState(null);

  const onClick = (respuesta) => {
    setVisible(false);
    setRes(respuesta);
    setNombre(respuesta.nombreCompleto);
    setCorreo(respuesta.correo);
    setDocumentoTipo(respuesta.documentoTipo);
    setDocumentoNumero(respuesta.documentoNumero);
    setDireccion(respuesta.direccion);
    setTelefono(respuesta.telefono);
    setSexoBiologico(respuesta.sexoBiologico);
    setTipoSangre(respuesta.tipoSangre);
    setRh(respuesta.rh);
    setNacionalidad(respuesta.nacionalidad);
    setBarrio(respuesta.barrio);
    setLocalidad(respuesta.localidad);
    setColegio(respuesta.colegio);
    setJornada(respuesta.jornada);
    setCalendario(respuesta.calendario);
    setMetodologia(respuesta.metodologia);
    setFechaGrado(respuesta.fechaGrado);
    setCarreaDeseada(respuesta.carreaDeseada);
    setRazonDeseada(respuesta.razonDeseada);
    setNivelEducativoPa(respuesta.nivelEducativoPa);
    setNivelEducativoMa(respuesta.nivelEducativoMa);
    setOcupacionPa(respuesta.ocupacionPa);
    setOcupacionMa(respuesta.ocupacionMa);
    setNumeroHermanos(respuesta.numeroHermanos);
    setPosicionEntre(respuesta.posicionEntre);
    setHermanosEducacion(respuesta.hermanosEducacion);
    setIngresosMensuales(respuesta.ingresosMensuales);
    setSisben(respuesta.sisben);
    setPuntajeSisben(respuesta.puntajeSisben);
    setEstrato(respuesta.estrato);
    setTipoCasa(respuesta.tipoCasa);
    setAdicional(respuesta.adicional);
    setId(respuesta.id);
    setMod(respuesta);

    // if (respuesta !== null) {
    //   console.log(respuesta);
    //   return visible;
    // } else {
    //   return visible;
    // }
  };
  const handleChangeNombre = (event) => {
    setNombre(event.target.value);
    setMod(modifRespuesta);
  };
  const handleChangeCorreo = (event) => {
    setCorreo(event.target.value);
    setMod(modifRespuesta);
  };
  const handleChangeDocTipo = (event) => {
    setDocumentoTipo(event.target.value);
    setMod(modifRespuesta);
  };
  const handleChangeDocNumero = (event) => {
    setDocumentoNumero(event.target.value);
    setMod(modifRespuesta);
  };
  const handleChangeDireccion = (event) => {
    setDireccion(event.target.value);
    setMod(modifRespuesta);
  };
  const handleChangeTelefono = (event) => {
    setTelefono(event.target.value);
    setMod(modifRespuesta);
  };
  const handleChangeSexoBiologico = (event) => {
    setSexoBiologico(event.target.value);
    setMod(modifRespuesta);
  };
  const handleChangeTipoSangre = (event) => {
    setTipoSangre(event.target.value);
    setMod(modifRespuesta);
  };
  const handleChangeRh = (event) => {
    setRh(event.target.value);
    setMod(modifRespuesta);
  };
  const handleChangeNacionalidad = (event) => {
    setNacionalidad(event.target.value);
    setMod(modifRespuesta);
  };
  const handleChangeBarrio = (event) => {
    setBarrio(event.target.value);
    setMod(modifRespuesta);
  };
  const handleChangeLocalidad = (event) => {
    setLocalidad(event.target.value);
    setMod(modifRespuesta);
  };
  const handleChangeColegio = (event) => {
    setColegio(event.target.value);
    setMod(modifRespuesta);
  };
  const handleChangeJornada = (event) => {
    setJornada(event.target.value);
    setMod(modifRespuesta);
  };
  const handleChangeCalendario = (event) => {
    setCalendario(event.target.value);
    setMod(modifRespuesta);
  };
  const handleChangeMetodologia = (event) => {
    setMetodologia(event.target.value);
    setMod(modifRespuesta);
  };
  const handleChangeFechaGrado = (event) => {
    setFechaGrado(event.target.value);
    setMod(modifRespuesta);
  };
  const handleChangeCarreraDeseada = (event) => {
    setCarreaDeseada(event.target.value);
    setMod(modifRespuesta);
  };
  const handleChangeRazonDeseada = (event) => {
    setRazonDeseada(event.target.value);
    setMod(modifRespuesta);
  };
  const handleChangeNivelEducativoPa = (event) => {
    setNivelEducativoPa(event.target.value);
    setMod(modifRespuesta);
  };
  const handleChangeNivelEducativoMa = (event) => {
    setNivelEducativoPa(event.target.value);
    setMod(modifRespuesta);
  };
  const handleChangeNivelOcupacionPa = (event) => {
    setOcupacionPa(event.target.value);
    setMod(modifRespuesta);
  };
  const handleChangeNivelOcupacionMa = (event) => {
    setOcupacionMa(event.target.value);
    setMod(modifRespuesta);
  };
  const handleChangeNivelNumeroHermanos = (event) => {
    setNumeroHermanos(event.target.value);
    setMod(modifRespuesta);
  };
  const handleChangeNivelPosicionEntre = (event) => {
    setPosicionEntre(event.target.value);
    setMod(modifRespuesta);
  };
  const handleChangeNivelHermanosEducacion = (event) => {
    setHermanosEducacion(event.target.value);
    setMod(modifRespuesta);
  };
  const handleChangeNivelIngresosMensuales = (event) => {
    setIngresosMensuales(event.target.value);
    setMod(modifRespuesta);
  };
  const handleChangeSisben = (event) => {
    setSisben(event.target.value);
    setMod(modifRespuesta);
  };
  const handleChangePuntajeSisben = (event) => {
    setPuntajeSisben(event.target.value);
    setMod(modifRespuesta);
  };
  const handleChangeEstrato = (event) => {
    setEstrato(event.target.value);
    setMod(modifRespuesta);
  };
  const handleChangeTipoCasa = (event) => {
    setTipoCasa(event.target.value);
    setMod(modifRespuesta);
  };
  const handleChangeAdicional = (event) => {
    setAdicional(event.target.value);
    setMod(modifRespuesta);
  };
  //nueva respuesta del ID
  const modifRespuesta = () => {
    const nuevoDicc = {
      ...mod,
      id: id,
      nombreCompleto: nombre,
      correo: correo,
      documentoTipo: documentoTipo,
      documentoNumero: documentoNumero,
      direccion: direccion,
      telefono: telefono,
      sexoBiologico: sexoBiologico,
      tipoSangre: tipoSangre,
      rh: rh,
      nacionalidad: nacionalidad,
      barrio: barrio,
      localidad: localidad,
      colegio: colegio,
      jornada: jornada,
      calendario: calendario,
      metodologia: metodologia,
      fechaGrado: fechaGrado,
      carreaDeseada: carreaDeseada,
      razonDeseada: razonDeseada,
      nivelEducativoPa: nivelEducativoPa,
      nivelEducativoMa: nivelEducativoMa,
      ocupacionPa: ocupacionPa,
      ocupacionMa: ocupacionMa,
      numeroHermanos: numeroHermanos,
      posicionEntre: posicionEntre,
      hermanosEducacion: hermanosEducacion,
      ingresosMensuales: ingresosMensuales,
      sisben: sisben,
      puntajeSisben: puntajeSisben,
      estrato: estrato,
      tipoCasa: tipoCasa,
      adicional: adicional,
    };
    return nuevoDicc;
    //   // setMod(nuevoDicc);
    //   // setMod(nuevoDicc);
  };

  return (
    <main>
      {!respuestas.length ? "No hay registros del formulario" : ""}
      {visible === true && (
        <ul className="lista-respuesta">
          {respuestas.map((respuesta) => (
            <FormRespuestas
              key={respuesta.id}
              respuestas={respuesta}
              onDelete={onDelete}
              onClick={onClick}
            />
          ))}
        </ul>
      )}
      {visible === false && (
        <ul className="lista-respuesta">
          <li>
            Nombre Completo:{" "}
            <input type="text" value={nombre} onChange={handleChangeNombre} />
          </li>
          <li>
            Correo Electronico:{" "}
            <input type="text" value={correo} onChange={handleChangeCorreo} />{" "}
          </li>
          <li>
            Tipo de documento:{" "}
            <select
              name="documentoTipo"
              id="documentoTipo"
              value={documentoTipo}
              onChange={handleChangeDocTipo}
            >
              <option value="CC">CC</option>
              <option value="TI">TI</option>
              <option value="CE">CE</option>
            </select>
          </li>
          <li>
            Numero de documento:{" "}
            <input
              type="number"
              value={documentoNumero}
              onChange={handleChangeDocNumero}
            />
          </li>
          <li>
            Direccion:
            <input
              type="text"
              value={direccion}
              onChange={handleChangeDireccion}
            />
          </li>
          <li>
            Telefono:
            <input
              type="number"
              value={telefono}
              onChange={handleChangeTelefono}
            />
          </li>
          <li>
            Sexo biologico:{" "}
            <select
              name="sexoBiologico"
              id="sexoBiologico"
              value={sexoBiologico}
              onChange={handleChangeSexoBiologico}
            >
              <option value="Hombre">Hombre</option>
              <option value="Mujer">Mujer</option>
            </select>
          </li>
          <li>
            Tipo de sangre:{" "}
            <select
              name="tipoSangre"
              id="tipoSangre"
              value={tipoSangre}
              onChange={handleChangeTipoSangre}
            >
              <option value="A">A</option>
              <option value="AB">AB</option>
              <option value="B">B</option>
              <option value="O">O</option>
            </select>
          </li>
          <li>
            Tipo de RH:
            <select name="rh" id="rh" value={rh} onChange={handleChangeRh}>
              <option value="+">+</option>
              <option value="-">-</option>
            </select>
          </li>
          <li>
            Nacionalidad:
            <input
              type="text"
              value={nacionalidad}
              onChange={handleChangeNacionalidad}
            />
          </li>
          <li>
            Barrio en el que vive:
            <input type="text" value={barrio} onChange={handleChangeBarrio} />
          </li>
          <li>
            Localidad en la que vive:
            <input
              type="text"
              value={localidad}
              onChange={handleChangeLocalidad}
            />
          </li>
          <li>
            Colegio:
            <input type="text" value={colegio} onChange={handleChangeColegio} />
          </li>
          <li>
            Jornada:
            <select
              name="jornada"
              id="jornada"
              value={jornada}
              onChange={handleChangeJornada}
            >
              <option value="tarde">Tarde</option>
              <option value="mañana">Mañana</option>
              <option value="completa">Completa</option>
            </select>
          </li>
          <li>
            Calendario:
            <select
              name="calendario"
              id="calendario"
              value={calendario}
              onChange={handleChangeCalendario}
            >
              <option value="A">A</option>
              <option value="B">B</option>
              <option value="ciclosPropedeudicos">Ciclos propedeudicos</option>
            </select>
          </li>
          <li>
            Metodologia:
            <select
              name="metodologia"
              id="metodologia"
              value={metodologia}
              onChange={handleChangeMetodologia}
            >
              <option value="Sin dato">Sin dato</option>
              <option value="Educacion Tradicional">
                Educacion Tradicional
              </option>
              <option value="Escuela Nueva">Escuela Nueva</option>
              <option value="Telesecundaria">Telesecundaria</option>
              <option value="Aceleracion de aprendizaje">
                Aceleracion de aprendizaje
              </option>
              <option value="Prog para jovenes en extraedad y adultos">
                Prog para jovenes en extraedad y adultos
              </option>
            </select>
          </li>
          <li>
            Fecha de grado:
            <input
              type="date"
              value={fechaGrado}
              onChange={handleChangeFechaGrado}
            />
          </li>
          <li>
            Carrera deseada:
            <input
              type="text"
              value={carreaDeseada}
              onChange={handleChangeCarreraDeseada}
            />
          </li>
          <li>
            Razon:
            <input
              type="text"
              value={razonDeseada}
              onChange={handleChangeRazonDeseada}
            />
          </li>
          <li>
            Nivel educativo padre:
            <select
              name="nivelEducativoPa"
              id="nivelEducativoPa"
              value={nivelEducativoPa}
              onChange={handleChangeNivelEducativoPa}
            >
              <option value="Basica Primaria">Basica Primaria</option>
              <option value="Secundaria">Secundaria</option>
              <option value="Tecnologo">Tecnologo</option>
              <option value="Profesional">Profesional</option>
              <option value="Maestria">Maestria</option>
            </select>
          </li>
          <li>
            Nivel educativo madre:
            <select
              name="nivelEducativoMa"
              id="nivelEducativoMa"
              value={nivelEducativoMa}
              onChange={handleChangeNivelEducativoMa}
            >
              <option value="Basica Primaria">Basica Primaria</option>
              <option value="Secundaria">Secundaria</option>
              <option value="Tecnologo">Tecnologo</option>
              <option value="Profesional">Profesional</option>
              <option value="Maestria">Maestria</option>
            </select>
          </li>
          <li>
            Ocupacion padre:
            <input
              type="text"
              value={ocupacionPa}
              onChange={handleChangeNivelOcupacionPa}
            />
          </li>
          <li>
            Ocupacion madre:
            <input
              type="text"
              value={ocupacionMa}
              onChange={handleChangeNivelOcupacionMa}
            />
          </li>
          <li>
            Numero hermanos:
            <input
              type="number"
              value={numeroHermanos}
              onChange={handleChangeNivelNumeroHermanos}
            />
          </li>
          <li>
            Posicion entre hermanos:
            <input
              type="number"
              value={posicionEntre}
              onChange={handleChangeNivelPosicionEntre}
            />
          </li>
          <li>
            Hermanos con educacion superior:
            <input
              type="number"
              value={hermanosEducacion}
              onChange={handleChangeNivelHermanosEducacion}
            />
          </li>
          <li>
            Ingresos mensuales:
            <input
              type="number"
              value={ingresosMensuales}
              onChange={handleChangeNivelIngresosMensuales}
            />
          </li>
          <li>
            Categoria SISBEN:
            <select
              name="sisben"
              id="sisben"
              value={sisben}
              onChange={handleChangeSisben}
            >
              <option value="Categoria 1">Categoria 1</option>
              <option value="Categoria 2">Categoria 2</option>
              <option value="Categoria 3">Categoria 3</option>
              <option value="Categoria 4">Categoria 4</option>
              <option value="Categoria 5">Categoria 5</option>
              <option value="Sin dato">Sin dato</option>
            </select>
          </li>
          <li>
            Puntaje SISBEN:
            <input
              type="text"
              value={puntajeSisben}
              onChange={handleChangePuntajeSisben}
            />
          </li>
          <li>
            Estrato socioeconomico:
            <select
              name="estrato"
              id="estrato"
              value={estrato}
              onChange={handleChangeEstrato}
            >
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
            </select>
          </li>
          <li>
            Tipo de casa:
            <select
              name="tipoCasa"
              id="tipoCasa"
              value={tipoCasa}
              onChange={handleChangeTipoCasa}
            >
              <option value="Propia">Propia</option>
              <option value="Familiar">Familiar</option>
              <option value="Arriendo">Arriendo</option>
              <option value="Cupo U">Cupo U</option>
            </select>
          </li>
          <li>
            Observaciones adicionales:
            <textarea
              name="adicional"
              id="adicional"
              cols="38"
              rows="5"
              value={adicional}
              onChange={handleChangeAdicional}
            ></textarea>
          </li>
          <p>
            <button
              onClick={
                () => {
                  setMod(modifRespuesta);
                  onModify(id, mod);
                  window.location.reload();
                }
                // onModify(id, mod);
              }
            >
              {" "}
              Guardar modificaciones
            </button>
          </p>
        </ul>
      )}
      <p>
        <span
          onClick={() => {
            setStep("forminit");
          }}
        >
          {" "}
          Inicio
        </span>
      </p>
    </main>
  );
};
//definicion de propiedades

FormConsulta.propTypes = {
  respuestas: PropTypes.array,
  onDelete: PropTypes.func,
  onModify: PropTypes.func,
};

export default FormConsulta;
