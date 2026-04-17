import React from 'react';
import { Container, Table, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const ViewBook = ({ books, setBooks, setEditBook, setForm }) => {
  const navigate = useNavigate();
  
  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this book?")) {
      setBooks(books.filter(b => b.id !== id));
    }
  };

  const handleEdit = (book) => {
    setEditBook(book);
    setForm(book);
    navigate('/add-book');
  };

  return (
    <Container className="
    bg-white p-4 rounded shadow-sm mt-4">
      <h3 className="fw-bold mb-4 text-center">Manage Inventory</h3>
      <Table responsive hover align="middle"> 
        <thead className="table-secondary">
          <tr>
            <th>ID</th>
            <th>Image</th> {/* Naya Column */}
            <th>Name</th>
            <th>Writer</th>
            <th>Price</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {books.map(b => (
            <tr key={b.id}>
              <td>{b.id}</td>
              <td>
                {/* Choti rounded image */}
                <img 
                  src={b.image} 
                  alt={b.name} 
                  style={{ 
                    width: '50px', 
                    height: '60px', 
                    objectFit: 'cover', 
                    borderRadius: '4px',
                    border: '1px solid #eee' 
                  }} 
                />
              </td>
              <td className="fw-bold">{b.name}</td>
              <td>{b.writer}</td>
              <td className="text-success fw-bold">₹{b.price}</td>
              <td>
                <Button variant="warning" size="sm" className="me-2" onClick={() => handleEdit(b)}>Edit</Button>
                <Button variant="danger" size="sm" onClick={() => handleDelete(b.id)}>Delete</Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  );
};

export default ViewBook;