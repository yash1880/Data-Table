import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Home = ({ books }) => (
  <Container>
    <h2 className="mb-4 fw-bold">Recent Collections</h2>
    <Row>
      {books.map((book) => (
        <Col key={book.id} xs={12} sm={6} md={4} lg={3} className="mb-4">
          <Card className="book-card h-100 border-0 shadow-sm">
            <div className="card-img-container">
              <Card.Img variant="top" src={book.image} />
            </div>
            <Card.Body>
              <Card.Title className="text-truncate">{book.name}</Card.Title>
              <div className="text-muted small mb-1">By: {book.author}</div>
              <div className="price-tag mb-3">₹{book.price}</div>
              <div className="card-button-group">
                <Link to={`/book/${book.id}`} className="flex-grow-1 text-decoration-none">
                  <Button variant="outline-dark" className="w-100">Details</Button>
                </Link>
                <Button className="btn-add-cart flex-grow-1">Add to Cart</Button>
              </div>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  </Container>
);

export default Home;