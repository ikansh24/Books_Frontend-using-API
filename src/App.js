import React from 'react';
import { Routes, Route } from 'react-router-dom';
import BooksPage1 from './components/BooksPage1';
import BookDetailsPage from './components/BookDetailsPage';
import './styles/App.css';

function App() {
  return (
    <Routes>
      <Route path="/books/:id" element={<BookDetailsPage />} />
      <Route path="/books" element={<BooksPage1 />} />
      <Route path="/" element={<BooksPage1 />} />
    </Routes>
  );
}

export default App;
