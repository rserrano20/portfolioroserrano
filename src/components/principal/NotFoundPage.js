import React from 'react'
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";


export default function NotFoundPage() {
  return (
    <div className="container fondo d-flex justify-content-center ">
    <Card className=" text-white">
      <Card.Img
        src={process.env.PUBLIC_URL + "/error.png"}
        alt="pagina error"
      />
      <Card.ImgOverlay>
        <Card.Text>
          <Link
            type="button"
            variant="primary"
            className="azul text-white p-3 rounded"
            to="/"
          >
             Home
          </Link>
        </Card.Text>
      </Card.ImgOverlay>
    </Card>
  </div>  )
}
