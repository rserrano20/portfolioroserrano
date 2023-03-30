import React from "react";
import "./style.css";
import { Button, Card } from "react-bootstrap";
import Figure from "react-bootstrap/Figure";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedin,
  faGithub,
  faGoogle,
} from "@fortawesome/free-brands-svg-icons";

import SobreMi from "./SobreMi";
import Educacion from "./Educacion";

function Inicio() {
  return (
    <div className="container black text-center text-light">
      <div className="">
        <div className="  text-center">
          <Card className=" black text-center ">
            <Card.Body>
              <Card.Text>
                <h2 className="lineUp">Rosario Serrano</h2>
                <h3>Desarrolladora Front end </h3>
              </Card.Text>
              <a
                className="btn btn-outline-light"
                variant="outline-ligth"
                href="./CV-RosarioSerrano.pdf"
                download
              >
                Descargar cv
              </a>
              <Button
                className=" mx-3"
                variant="outline-light"
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
                href="https://www.linkedin.com/in/mrosarioserrano
                  "
              >
                <FontAwesomeIcon icon={faLinkedin} />
              </Button>
            </Card.Body>
         
          <Figure>
            <Figure.Image
              className="efectoimg"
              width={171}
              height={180}
              alt="171x180"
              src={process.env.PUBLIC_URL + "./rosario.jpg"}
            />
            <Figure.Caption></Figure.Caption>
          </Figure>
          </Card>
        </div>  
      </div>
      <SobreMi></SobreMi>
      <Educacion></Educacion>
    </div>
  );
}

export default Inicio;
