import React from "react";
import {
  Card,
  CardImg,
  CardBody,
  CardTitle,
  CardSubtitle,
  CardText
} from "reactstrap";

export default function MyGame(props) {
  return (
    <Card>
      <CardImg
        top
        width="100%"
        src={props.game.imageURL}
        alt="Card image cap"
      />
      <CardBody>
        <CardTitle>{props.game.title}</CardTitle>
        <CardSubtitle>{props.game.releaseYear}</CardSubtitle>
        <CardText>{props.game.publisher}</CardText>
      </CardBody>
    </Card>
  );
}
