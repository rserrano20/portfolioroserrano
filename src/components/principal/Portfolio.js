import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

export default function Portfolio() {
  return (
    <div className="container black text-center">
      <h3 className="text-white">Portfolio</h3>
      <div className="row  text-center">
        <div className="col-lg-3 col-md-6 text-center">
          <Card className="card text-center efectoimg">
            <div>
              <img
                src={process.env.PUBLIC_URL + "/cafe.png"}
                alt="cafeteria"
                className=""
                width="200px"
                height="150px"
              />
            </div>
            <Card.Body className="card-body  bg-dark text-white">
              <Card.Title>Cafeteria</Card.Title>
              <Card.Text>Proyecto Serran's Coffe</Card.Text>
              <Button
                variant="primary"
                className="mx-2"
                type="button"
                href="https://cafeserranos30-50.netlify.app/"
              >
                DEMO
              </Button>
              <Button
                variant="primary"
                className=""
                type="button"
                href="https://github.com/rserrano20/crudcafeteriaFront"
              >
                <FontAwesomeIcon icon={faGithub} />
              </Button>
            </Card.Body>
          </Card>
        </div>

        <div className="col-lg-3 col-md-6 text-center ">
          <Card className="card bg-light text-center efectoimg">
            <div>
              <img
                src={process.env.PUBLIC_URL + "/odin.png"}
                alt=""
                className=""
                width="200px"
                height="150px"
              />
            </div>
            <Card.Body className="card-body  bg-dark text-white">
            <Card.Title>Odin</Card.Title>
              <Card.Text>Proyecto Criticos de cervezas artesanales</Card.Text>
              <Button
                variant="primary"
                className="mx-2"
                type="button"
                href="https://odin-criticos-cervezas.netlify.app/"
              >
                DEMO
              </Button>
              <Button
                variant="primary"
                className=""
              
                href="https://github.com/rserrano20/odin_cerveceria"
              >
                <FontAwesomeIcon icon={faGithub} />
              </Button>
            </Card.Body>
          </Card>
        </div>
        <div className="col-lg-3 col-md-6 text-center mb-3">
          <Card className="card text-center efectoimg">
            <div>
              <img
                src={process.env.PUBLIC_URL + "/diario.png"}
                alt=""
                className=""
                width="200px"
                height="150px"
              />
            </div>
            <Card.Body className="card-body  bg-dark text-white">
            <Card.Title>The Rolling New</Card.Title>
              <Card.Text>Proyecto Diario Online</Card.Text>
              <Button
                variant="primary"
                className=" mx-2"
              
                href="https://therollingtimes.netlify.app/."
              >
                DEMO
              </Button>
              <Button
                variant="primary"
                className=""
               
                href="https://github.com/rserrano20/therollingnews"
              >
                <FontAwesomeIcon icon={faGithub} />
              </Button>
            </Card.Body>
          </Card>
        </div>
        <div className="col-lg-3 col-md-6 text-center mb-3">
          <Card className="card text-center efectoimg">
            <div>
              <img
                src={process.env.PUBLIC_URL + "/frases.png"}
                alt=""
                className=""
                width="200px"
                height="150px"
              />
            </div>
            <Card.Body className="card-body  bg-dark text-white">
              <Card.Title></Card.Title>
              <Card.Text></Card.Text>
              <Button
                variant="primary"
                className=" mx-2"
              
                href="https://fraseslossimpson-ros-react.netlify.app/"
              >
                DEMO
              </Button>
              <Button
                variant="primary"
                className=""
               
                href="https://github.com/rserrano20/frasessimpson"
              >
                <FontAwesomeIcon icon={faGithub} />
              </Button>
            </Card.Body>
          </Card>
        </div>
        <div className="col-lg-3 col-md-6 text-center mb-3">
          <Card className="card text-center efectoimg">
            <div>
              <img
                src={process.env.PUBLIC_URL + "/frases.png"}
                alt=""
                className=""
                width="200px"
                height="150px"
              />
            </div>
            <Card.Body className="card-body  bg-dark text-white">
              <Card.Title>Funkopop</Card.Title>
              <Card.Text>Projecto de Funkopop</Card.Text>
              <Button
                variant="primary"
                className=" mx-2"
              
                href="https://sitiofunkopop.netlify.app/admin.html"
              >
                DEMO
              </Button>
              <Button
                variant="primary"
                className=""
               
                href="https://github.com/rserrano20/Funkopop"
              >
                <FontAwesomeIcon icon={faGithub} />
              </Button>
            </Card.Body>
          </Card>
        </div>
        <div className="col-lg-3 col-md-6 text-center mb-3">
          <Card className="card text-center efectoimg">
            <div>
              <img
                src={process.env.PUBLIC_URL + "/frases.png"}
                alt=""
                className=""
                width="200px"
                height="150px"
              />
            </div>
            <Card.Body className="card-body  bg-dark text-white">
              <Card.Title>Funkopop</Card.Title>
              <Card.Text>Projecto de Funkopop</Card.Text>
              <Button
                variant="primary"
                className=" mx-2"
              
                href="https://sitiofunkopop.netlify.app/admin.html"
              >
                DEMO
              </Button>
              <Button
                variant="primary"
                className=""
               
                href="https://github.com/rserrano20/Funkopop"
              >
                <FontAwesomeIcon icon={faGithub} />
              </Button>
            </Card.Body>
          </Card>
        </div>
      </div>
      
    </div>
  );
}
