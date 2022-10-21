import { useEffect, useState } from "react";
import { Form, Button, Col, Row, Card } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { v4 as uuidv4 } from "uuid";
import GridCitas from "./GridCitas";

const FormPaciente = () => {
  const citasLS = JSON.parse(localStorage.getItem('citasVet')) || []
  const [citas, setCitas] = useState(citasLS);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  useEffect(()=>{
    localStorage.setItem('citasVet',JSON.stringify(citas));
  })

  const onSubmit = (data) => {
    data.id = uuidv4();
    setCitas([...citas, data]);
    reset();
  };

  const borrarCita =(id)=>{
    const citasActualizado = citas.filter((cita)=> cita.id !== id);
    setCitas(citasActualizado);
  }
  return (
    <>
    <Card>
      <Card.Header className="fw-bold">
        Llenar el formulario para crear una cita
      </Card.Header>
      <Card.Body>
        <Form noValidate onSubmit={handleSubmit(onSubmit)}>
          <Row>
            <Form.Group className="mb-3" as={Col} xs={12} md={6}>
              <Form.Label>Nombre de mascota:</Form.Label>
              <Form.Control
                type="text"
                placeholder="Ej: Felix"
                {...register("mascota", {
                  required: "El nombre de la mascota es obligatorio",
                  minLength: {
                    value: 2,
                    message: "La cantidad minima de caracteres es 2",
                  },
                  maxLength: {
                    value: 50,
                    message: "La cantidad maxima de caracteres es 100",
                  },
                })}
              />
              <Form.Text className="text-danger">
                {errors.mascota?.message}
              </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" as={Col} xs={12} md={6}>
              <Form.Label>Nombre del dueño:</Form.Label>
              <Form.Control
                type="text"
                placeholder="Ej: Juan Perez"
                {...register("nombre", {
                  required: "El nombre de la mascota es obligatorio",
                  minLength: {
                    value: 2,
                    message: "La cantidad minima de caracteres es 2",
                  },
                  maxLength: {
                    value: 50,
                    message: "La cantidad maxima de caracteres es 100",
                  },
                })}
              />
              <Form.Text className="text-danger">
                {errors.nombre?.message}
              </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" as={Col} xs={12} md={6}>
              <Form.Label>Fecha:</Form.Label>
              <Form.Control
                type="date"
                placeholder="dd/mm/yyyy"
                {...register("fecha", {
                  required: "Debe seleccionar una fecha",
                })}
              />
              <Form.Text className="text-danger">
                {" "}
                {errors.fecha?.message}
              </Form.Text>
            </Form.Group>
            <Form.Group className="mb-3" as={Col} xs={12} md={6}>
              <Form.Label>Hora:</Form.Label>
              <Form.Control
                type="time"
                placeholder="dd/mm/yyyy"
                {...register("hora", {
                  required: "Debe seleccionar una hora",
                })}
              />
              <Form.Text className="text-danger">
                {" "}
                {errors.hora?.message}
              </Form.Text>
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Sintomas:</Form.Label>
              <Form.Control
                type="text"
                placeholder="Describir los sintomas"
                as="textarea"
                rows={3}
                minLength={2}
                maxLength={250}
                {...register("sintomas", {
                  required: "El nombre de la mascota es obligatorio",
                  minLength: {
                    value: 2,
                    message: "La cantidad minima de caracteres es 2",
                  },
                  maxLength: {
                    value: 250,
                    message: "La cantidad maxima de caracteres es 250",
                  },
                })}
              />
              <Form.Text className="text-danger">
                {" "}
                {errors.sintomas?.message}
              </Form.Text>
            </Form.Group>
            <div className="text-center">
              <Button variant="primary" type="submit" className="w-100">
                Guardar
              </Button>
            </div>
          </Row>
        </Form>
      </Card.Body>
    </Card>
    <section className="my-4">
      <GridCitas citas={citas} borrarCita={borrarCita}></GridCitas>
    </section>
    </>
    
  );
};

export default FormPaciente;
