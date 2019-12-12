import React from "react";
import {
  Card,
  CardBody,
  CardTitle,
  CardSubtitle,
  CardText,
  Row,
  Col,
  CardFooter
} from "reactstrap";
import DashboardGameRemoveModal from "./DashboardGameRemoveModal";

export default function ProfileGame(props) {
  return (
    <Row className="my-3">
      <Col xs="3">
        <img
          src={props.game.imageURL}
          alt="avatar"
          height="auto"
          width="auto"
          className="img-thumbnail rounded"
        />
      </Col>
      <Col xs="9">
        <Card>
          <CardBody>
            <CardTitle>{props.game.title}</CardTitle>
            <CardSubtitle>{props.game.releaseYear}</CardSubtitle>
            <CardText>{props.game.publisher}</CardText>
          </CardBody>
          <CardFooter>
            <DashboardGameRemoveModal game={props.game} />
          </CardFooter>
        </Card>
      </Col>
    </Row>
  );
}
