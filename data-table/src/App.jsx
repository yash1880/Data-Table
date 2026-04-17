import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import AddBook from "./pages/AddBook";
import ViewBook from "./pages/ViewBook";
import BookDetail from "./pages/BookDetail"; 
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css"; 

function App() {
  const defaultBooks = [
    {
      id: "1",
      name: "Bhagavad Gita",
      author: "Vyasa",
      writer: "Adi Shankaracharya",
      price: "500",
      description: "A spiritual guide.",
      image: "https://images.meesho.com/images/products/539385573/qbwgq_512.avif?width=512",
    },
  ];

  const [books, setBooks] = useState(() => {
    const savedBooks = localStorage.getItem("books");
    return savedBooks ? JSON.parse(savedBooks) : defaultBooks;
  });

  const [form, setForm] = useState({ id: "", name: "", author: "", writer: "", price: "", description: "", image: "" });
  const [editBook, setEditBook] = useState(null);

  // Save books to localStorage whenever books state changes
  useEffect(() => {
    localStorage.setItem("books", JSON.stringify(books));
  }, [books]);

  const handleSave = (e) => {
    e.preventDefault();
    if (editBook) {
      setBooks(books.map((b) => (b.id === form.id ? form : b)));
      setEditBook(null);
    } else {
      setBooks([...books, form]);
    }
    setForm({ id: "", name: "", author: "", writer: "", price: "", description: "", image: "" });
  };

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home books={books} />} />
        <Route path="/add-book" element={<AddBook form={form} setForm={setForm} handleSave={handleSave} editBook={editBook} />} />
        <Route path="/view-books" element={<ViewBook books={books} setBooks={setBooks} setEditBook={setEditBook} setForm={setForm} />} />
        <Route path="/book/:id" element={<BookDetail books={books} />} />
      </Routes>
    </Router>
  );
}

export default App;