import React from "react";
import { Card, Button } from "react-bootstrap";
import styles from "./style.module.scss";

const CardComponent = ({ title, description, imageUrl }) => {
  return (
    <Card className={styles.card}>
      <Card.Img variant="top" src={imageUrl} />
      <Card.Body className={styles.cardBody}>
        <Card.Title className={styles.cardTitle}>{title}</Card.Title>
        <Card.Text className={styles.cardText}>{description}</Card.Text>
        <div>
          <Button className={`readMoreBtn ${styles.cardButton}`} variant="none">
            Read More
            <i className="fas fa-arrow-right"></i>
          </Button>
        </div>
      </Card.Body>
    </Card>
  );
};

export default CardComponent;
