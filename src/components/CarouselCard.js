import React from "react";
import Card from "react-bootstrap/Card";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
const CarouselCard = ({ imageSrc, title, description }) => {
  return (
    <div>
        <Card className="discovery-trending-card  m-md-auto my-md-5  m-sm-auto  my-sm-3">
          <Card.Img variant="top" src={imageSrc} />
          <Card.Body className="discovery-trending-card-content">
            <Card.Title>{title}</Card.Title>
            <Card.Text className="discovery-trending-card-text">
              {description}
            </Card.Text>
            <span className="fst-italic"><AccessTimeIcon/>2 min ago</span>
          </Card.Body>
        </Card>
      
    </div>
  );
};

export default CarouselCard;
