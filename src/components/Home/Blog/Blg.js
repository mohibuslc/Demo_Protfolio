import React from 'react'
import { Button, Card } from 'react-bootstrap'

function Blg({ blg }) {
  const { name, img, topic, desc, link } = blg;
  return (
    <Card style={{ width: '500px' }} className='d-block m-auto'>
      <Card.Img variant="top" src={img} style={{ height: '250px' }} />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Title>{topic}</Card.Title>
        <Card.Text>
          {desc.substring(0, 200)}...
        </Card.Text>
        <div className="d-flex justify-content-center">
          <Button target='_' className="btn-custom" href={link}>Visit link</Button>
        </div>
      </Card.Body>
    </Card>
  )
}

export default Blg
