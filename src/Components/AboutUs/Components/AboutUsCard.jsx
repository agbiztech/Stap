import React from 'react'
import { Card } from 'react-bootstrap'

const AboutUsCard = (props) => {
  return (
    <Card className='AboutUsCard'>
    <Card.Body>
      <Card.Title className='fw-bold AboutUsTitle'>{props.data.Heading}</Card.Title>
      <Card.Text className=' AboutUsBody'>
        {props.data.Para}
      </Card.Text>
    </Card.Body>
  </Card>
  )
}

export default AboutUsCard