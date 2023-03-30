import React from "react";
import Card from "react-bootstrap/Card";


function Habilidades() {
  return (
    <div className="container    text-center">
      <div className="text-center shadow">
        <h2>Habilidades</h2>
        <div className="row d-flex justify-content-center mt-3">
          <div className="col-lg-3 col-md-6 text-center mb-3">
            <Card className="card bg-light text-center">
              <div> 
                <img
                  src={process.env.PUBLIC_URL + "/icon/html.png"}
                  alt="html"
                  className="rounded-circle slide-top py-4"
                  width="90px"
                  height="100px"
                />
              </div>
              <Card.Body className="card-body text-black efectoimg">
                <Card.Title>HTML</Card.Title>
              </Card.Body>
            </Card>
          </div>
          <div className="col-lg-3 col-md-6 text-center mb-3">
            <Card className="card bg-light text-center">
              <div>
                <img
                  src={process.env.PUBLIC_URL + "/icon/css.png"}
                  alt="html"
                  className="rounded-circle efectoimg py-4"
                  width="90px"
                  height="100px"
                />
              </div>
              <Card.Body className="card-body text-black efectoimg">
                <Card.Title>CSS</Card.Title>
              </Card.Body>
            </Card>
          </div>
          <div className="col-lg-3 col-md-6 text-center mb-3">
            <Card className="card bg-light text-center">
              <div>
                <img
                  src={process.env.PUBLIC_URL + "/icon/js.png"}
                  alt="html"
                  className="rounded-circle efectoimg py-4"
                  width="90px"
                  height="100px"
                />
              </div>
              <Card.Body className="card-body text-black efectoimg">
                <Card.Title>JS</Card.Title>
              </Card.Body>
            </Card>
          </div>
          <div className="col-lg-3 col-md-6 text-center mb-3">
            <Card className="card bg-light text-center">
              <div>
                <img
                  src={process.env.PUBLIC_URL + "/icon/react.png"}
                  alt="html"
                  className="rounded-circle efectoimg py-4"
                  width="90px"
                  height="100px"
                />
              </div>
              <Card.Body className="card-body text-black efectoimg">
                <Card.Title>REACT JS</Card.Title>
              </Card.Body>
            </Card>
          </div>
          <div className="col-lg-3 col-md-6 text-center mb-3">
            <Card className="card bg-light text-center">
              <div>
                <img
                  src={process.env.PUBLIC_URL + "/icon/mongodb.png"}
                  alt="html"
                  className="rounded-circle efectoimg py-4"
                  width="90px"
                  height="100px"
                />
              </div>
              <Card.Body className="card-body text-black efectoimg">
                <Card.Title>MONGO DB</Card.Title>
              </Card.Body>
            </Card>
          </div>
          <div className="col-lg-3 col-md-6 text-center mb-3">
            <Card className="card bg-light text-center">
              <div>
                <img
                  src={process.env.PUBLIC_URL + "/icon/github.png"}
                  alt="html"
                  className="rounded-circle efectoimg py-4"
                  width="90px"
                  height="100px"
                />
              </div>
              <Card.Body className="card-body text-black  efectoimg">
                <Card.Title>GITHUB</Card.Title>
              </Card.Body>
            </Card>
          </div>
        </div>
      </div>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#273036" fill-opacity="1" d="M0,192L1440,64L1440,320L0,320Z"></path></svg>
     
    </div>
  );
}

export default Habilidades;
