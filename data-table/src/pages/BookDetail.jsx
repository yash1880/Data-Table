import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Container, Row, Col, Button } from 'react-bootstrap';

const BookDetail = ({ books }) => {
  const { id } = useParams();
  const book = books.find(b => b.id === id);

  if (!book) return <Container><h2>Book Not Found</h2></Container>;

  return (
    <Container className="mt-5">
      <Row className="align-items-center bg-white p-5 rounded-4 shadow-sm">
        <Col md={5} className="text-center"><img src={book.image} alt={book.name} className="img-fluid rounded shadow" style={{maxHeight: '400px'}} /></Col>
       <Col md={7}>
  <h1 className="fw-bold">{book.name}</h1>
  <p className="text-muted">By {book.author} | Written by {book.writer}</p>
  <h3 className="text-primary fw-bold">₹{book.price}</h3>
  <p className="mt-4 fs-5 text-secondary">{book.description}</p>
  
  <div className="d-flex gap-3 mt-4">
    <Button className="btn-add-cart px-5 py-3">ADD TO CART</Button>
    <Link to="/">
      <Button variant="outline-dark" className="px-5 py-3">Back to Home</Button>
    </Link>
  </div>
</Col>
      </Row>
    </Container>
  );
};

export default BookDetail;