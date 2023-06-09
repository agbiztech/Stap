import React from "react";
import { Card } from "react-bootstrap";
import StarIcon from "@mui/icons-material/Star";
const DestinationCard = (props) => {
  return (
    <Card className={`text-white  destinationCard`} style={{height:`${props.data?.cardHeight}vh`}}>
      <Card.Img
        src={props.data.imageUrl}
        className={`h-${props.data.imageHeight} destinationIMage`}
      />
      <Card.ImgOverlay className="d-flex justify-content-between flex-column">
        <Card.Title className="bg-light  rounded-pill text-dark gap-1 px-2 rating">
          <StarIcon className="startIcon" /> 4.6
        </Card.Title>
        <div>
          <span className="destinationText">{props.data.title}</span>
          <hr className="horizontalRow" />
          <span className="destinationType">{props.data.viewType}</span>
        </div>
      </Card.ImgOverlay>
    </Card>
  );
};

export default DestinationCard;
