import React from 'react'
import { Card } from 'react-bootstrap'
import StarIcon from '@mui/icons-material/Star';
const DestinationCard = ({hieght}) => {
  return (
    <Card className={`text-white h-${hieght}`}>
    <Card.Img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjZgtoTDJyvJxxYNeEUdnomAmsq7Pf1RgDoA&usqp=CAU" className={`h-${hieght}`} />
    <Card.ImgOverlay className='d-flex justify-content-between flex-column'>
      <Card.Title className='bg-light  rounded-pill text-dark gap-1 px-2 rating'><StarIcon className='startIcon'/> 4.6</Card.Title>
      <div>
      <span className='destinationText'>
        Goa,India
      </span>
        <hr className='horizontalRow' />
      <span className='destinationType'>See Beach</span>
      </div>
    </Card.ImgOverlay>
  </Card>
  )
}

export default DestinationCard