import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedin,
  faGithub,
  faGoogle,
} from "@fortawesome/free-brands-svg-icons";

function Contacto() {
  return (
    <div className="container black text-center text-white rounded  " >
      <div className="">     
      <h2 className="lineUp">Contactame</h2>
      <div className="row text-center ">
        <div className=" col-md-6  ">
          <Form className=" rounded">
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Nombre</Form.Label>
              <Form.Control type="nombre" placeholder="Perez Maria" />
              <Form.Text className="text-muted"></Form.Text>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" placeholder="roserranoar@gmail.com" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Mensaje</Form.Label>
              <Form.Control type="textarea" placeholder="" textarea rows="4" />
            </Form.Group>
            <Button variant="outline-light" type="submit">
              Enviar
            </Button>
          </Form>
        </div>
        <div className=" col-md-6   rounded text-center">
          <div className=" py-5 text-center">
            {" "}
            <Button
              variant="outline-light"
              className=" mx-3"
              type="button"
              href="https://github.com/rserrano20/odin_cerveceria"
            >
              <FontAwesomeIcon icon={faGithub} />
            </Button>
            <Button
              variant="outline-light"
              className=" "
              type="button"
              href="roserranoar@gmail.com"
            >
              <FontAwesomeIcon icon={faGoogle} />
            </Button>
            <Button
              variant="outline-light"
              className=" mx-3"
              type="button"
              href="https://www.linkedin.com/in/mrosarioserrano"
            >
              <FontAwesomeIcon icon={faLinkedin} />
            </Button>

            <div>
            <img
                  src={process.env.PUBLIC_URL + "/Campaign launch_Flatline.png"}
                  alt="html"
                  className="rounded-circle efectoimg py-4"
                  width="200px"
                  height="400px"
                />
            </div>
          </div>
        </div>
      </div>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#273036" fill-opacity="1" d="M0,192L1440,64L1440,320L0,320Z"></path></svg>
    </div>
    </div>
  );
}

export default Contacto;
