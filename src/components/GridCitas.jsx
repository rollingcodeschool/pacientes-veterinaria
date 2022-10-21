import React from "react";
import { Row } from "react-bootstrap";
import Cita from "./Cita";

const GridCitas = ({ citas, borrarCita }) => {
  return (
    <Row>
      {citas.map((cita) => (
        <Cita key={cita.id} cita={cita} borrarCita={borrarCita}></Cita>
      ))}
    </Row>
  );
};

export default GridCitas;
