import React from 'react'
import ListGroup from 'react-bootstrap/ListGroup';

function Educacion() {
  return (
    <div  className='container black text-light p-3 mb-5 '>
      <h2>Formación</h2>
       <ListGroup className='black text-light'>
      <ListGroup.Item className='black text-light'>Título “Profesora en Computación”. Universidad Nacional de Catamarca (UNCA).</ListGroup.Item>
      <ListGroup.Item className='black text-light'>Título “Técnica Superior en Sistemas de Información” (ANALISTA EN SISTEMAS). Instituto C & P SOFT.</ListGroup.Item>
      <ListGroup.Item className='black text-light'>Curse Full Stack  Web  developer  dictado por Rolling Code School.</ListGroup.Item>
      <ListGroup.Item className='black text-light'> Postítulo “Especialización Superior en Formación Pedagógica”. Universidad Nacional de Tucumán.</ListGroup.Item>
      <ListGroup.Item className='black text-light'>Postítulo  “Especialización Docente Superior en  Educación y TIC”. Ministerio de Educación de la Nación.</ListGroup.Item>
      <ListGroup.Item className='black text-light'> Cursando “Especialización  en Educación y Tecnologías Digitales” Ministerio de Educación de la Nación.</ListGroup.Item>

    </ListGroup>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#273036" fill-opacity="1" d="M0,192L1440,64L1440,320L0,320Z"></path></svg>
    </div>
    
  )
}

export default Educacion
