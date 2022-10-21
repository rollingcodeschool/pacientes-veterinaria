import { Container } from "react-bootstrap";
import "./app.css";
import "bootstrap/dist/css/bootstrap.min.css";
import FormPaciente from "./components/FormPaciente";

function App() {
  return (
    <>
      <Container className="my-5 mainSection">
        <section className="text-light">
          <h1 className="text-center">
            Administrador - pacientes de veterinaria
          </h1>
          <hr />
        </section>
        <FormPaciente></FormPaciente>
      </Container>
      <footer className="bg-dark text-light text-center py-4">
        <p>&copy; Todos los derechos reservados</p>
      </footer>
    </>
  );
}

export default App;
