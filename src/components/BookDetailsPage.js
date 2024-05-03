import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

function BookDetailsPage() {
    const { id } = useParams();
    const [book, setBook] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        axios.get(`https://softwium.com/api/books/${id}`)
            .then(response => {
                setBook(response.data);
                setLoading(false);
            })
            .catch(error => {
                console.error('Error fetching book details', error);
                setLoading(false);
            });
    }, [id]);

    if (loading) return <div>Loading...</div>;
    if (!book) return <div>Book not found</div>;

    return (
        <div className="detail-container">
            <h1>{book.title}</h1>
            <p>ISBN: {book.isbn}</p>
            <p>Page Count: {book.pageCount}</p>
            <p className="authors">Authors: {book.authors.join(', ')}</p>
        </div>
    );
}

export default BookDetailsPage;
