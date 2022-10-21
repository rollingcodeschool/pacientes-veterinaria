import { Col, Card, Button } from "react-bootstrap";

const Cita = ({cita, borrarCita}) => {
   const {id,mascota, nombre, sintomas, hora, fecha} = {...cita};

  return (
    <Col md={4} lg={3} className="mb-3">
      <Card>
        <Card.Body>
          <Card.Title>{mascota} <span className="badge text-bg-info fw-light">{fecha} - {hora}hs</span></Card.Title>
          <hr />
          <Card.Text>
            <b>Dueño: </b>{nombre}
            <br/>
            <b>Sintomas: </b>{sintomas}
          </Card.Text>
          <Button variant="outline-danger" onClick={()=> borrarCita(id)}>Borrar</Button>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default Cita;
