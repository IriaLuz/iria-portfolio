import React, { useState } from 'react';
import { GatsbyImage, getImage } from 'gatsby-plugin-image'

import {Row, Col, Container, Button} from "react-bootstrap" 
import ModalComponent from './modalComponent';
import './card.scss';


function Card({cardData, isImageLeft}) {

  const [showModal, setShowModal] = useState(false);

  const image = getImage(cardData.image.gatsbyImageData)
    const contentBody = cardData.cardBody.cardBody;
   const cardImage = <GatsbyImage  className="card-block-image" alt="cardImage" image={image} />


   const shoudTruncate = (str)=> str.length > 250
   const truncateText = (str) =>
   shoudTruncate(str) ? str.substring(0, 250) + "..." : str

  const imageOrder = isImageLeft ? 1 : 3;
   
    return (
      <>
      <Container className="card-block-container">
        <Row className="card-block-row">
        <Col  sm={{span: 12, order: 2}} md={{span: 6, order: 2}}>
          <h4>{cardData.title}</h4> 

          <p>{contentBody && truncateText(contentBody)} 
          {shoudTruncate(contentBody) && <Button variant="link" onClick={() => setShowModal(true)}>Read More
      </Button>}
          </p>
        </Col>
        <Col className="card-image-container" sm={{span: 12, order: 1}} md={{span: 6, order: imageOrder}}>
          {cardImage}
        </Col>
      </Row>
      </Container>

      <ModalComponent
        image={cardImage}
        title={cardData.title}
        body={contentBody}
        show={showModal}
        onHide={() => setShowModal(false)}
      />
</>
    );
}

export default Card;