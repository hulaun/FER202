import React from 'react';
import { Carousel } from 'react-bootstrap';
import { Card, Button, Container, Row, Col } from 'react-bootstrap';

const products = [
  {
    id: 1,
    title: "Samsung Galaxy S23 Ultra",
    description: "Samsung Galaxy S23 Ultra 256GB USA New 100% Fullbox",
    image: "https://picsum.photos/200/300?random=1",
  },
  {
    id: 2,
    title: "Apple iPhone 12 Mini 128GB",
    description: "Apple iPhone 12 Mini 128GB (Like New)",
    image: "https://picsum.photos/200/300?random=2",
  },
  {
    id: 3,
    title: "Xiaomi 13 Ultra 5G 512GB",
    description: "Xiaomi 13 Ultra 5G 512GB (New)",
    image: "https://picsum.photos/200/300?random=3",
  },
];

const ImageCarousel = () => {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://picsum.photos/id/237/800/400"
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://picsum.photos/id/238/800/400"
          alt="Second slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://picsum.photos/id/239/800/400"
          alt="Third slide"
        />
      </Carousel.Item>
    </Carousel>
  );
};

const ProductCards = () => {
  return (
    <Container className="mt-4">
      <Row>
        {products.map(product => (
          <Col key={product.id} md={4}>
            <Card className="mb-4">
              <Card.Img variant="top" src={product.image} />
              <Card.Body>
                <Card.Title>{product.title}</Card.Title>
                <Card.Text>{product.description}</Card.Text>
                <Button variant="warning">Detail</Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

function Additional() {
  return ( <div>
    <h1>Additional</h1>
    <ImageCarousel />
    <ProductCards/>
  </div> );
}

export {Additional, ImageCarousel, ProductCards};