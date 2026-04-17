import React from 'react';
import { Container, Form, Button, Row, Col, Card } from 'react-bootstrap';

const AddBook = ({ handleSave, form, setForm, editBook }) => (
  <Container className="mt-4" style={{ maxWidth: '600px' }}>
    <Card className="form-container shadow-sm border-0">
      <h3 className="fw-bold mb-4 text-center">{editBook ? "Edit Book" : "Add New Book"}</h3>
      <Form onSubmit={handleSave}>
        <Row className="mb-3">
          <Form.Group as={Col}><Form.Label>Serial ID</Form.Label><Form.Control type="text" value={form.id} onChange={(e) => setForm({...form, id: e.target.value})} required /></Form.Group>
          <Form.Group as={Col}><Form.Label>Price (₹)</Form.Label><Form.Control type="number" value={form.price} onChange={(e) => setForm({...form, price: e.target.value})} required /></Form.Group>
        </Row>
        <Form.Group className="mb-3"><Form.Label>Title</Form.Label><Form.Control type="text" value={form.name} onChange={(e) => setForm({...form, name: e.target.value})} required /></Form.Group>
        <Row className="mb-3">
          <Col><Form.Label>Author</Form.Label><Form.Control type="text" value={form.author} onChange={(e) => setForm({...form, author: e.target.value})} required /></Col>
          <Col><Form.Label>Writer</Form.Label><Form.Control type="text" value={form.writer} onChange={(e) => setForm({...form, writer: e.target.value})} required /></Col>
        </Row>
        <Form.Group className="mb-3"><Form.Label>Image URL</Form.Label><Form.Control type="text" value={form.image} onChange={(e) => setForm({...form, image: e.target.value})} required /></Form.Group>
        <Form.Group className="mb-4"><Form.Label>Description</Form.Label><Form.Control as="textarea" rows={3} value={form.description} onChange={(e) => setForm({...form, description: e.target.value})} required /></Form.Group>
        <Button variant="dark" type="submit" className="w-100 fw-bold">{editBook ? "Update Book" : "Add Book"}</Button>
      </Form>
    </Card>
  </Container>
);

export default AddBook;