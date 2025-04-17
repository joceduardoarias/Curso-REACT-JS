import React, { useState, useEffect } from 'react';
import BookItem from '../bookItem/BookItem';
import BookSearch from '../bookSearch/BookSearch';
import axios from 'axios';
import {  successToast } from "../../ui/toast/Toast";
import { useDelete } from "../../hooks/useDelete";
import { useUpdate } from '../../hooks/useUpdate';

const Books = () => {
    const API_URL = "https://localhost:7069/api/Book";

    const [search, setSearch] = useState("");
    const [books, setBooks] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchBooks = async () => {
            try {
                const response = await axios.get(API_URL);
                setBooks(response.data);
            } catch (err) {
                setError("Error al obtener los libros");
            } finally {
                setLoading(false);
            }
        };

        fetchBooks();
    }, []);

    const handleSearch = (value) => {
        setSearch(value);
    };

    const handleDeleteBook = async (bookId) => {
        const response = await deleteBook(bookId);
        if(response){
            console.log(response);            
            successToast(response.message);
            
        }
    };

    let filteredBooks = books
        .filter(book =>
            search
                ? book.title.toLowerCase().includes(search.toLowerCase()) ||
                  book.author.toLowerCase().includes(search.toLowerCase())
                : true
        )
        .map((book) => (
            <BookItem
                key={book.id}
                id={book.id}
                bookTitle={book.title}
                author={book.author}
                description={book.description}
                price={book.price}
                imageUrl={book.imageUrl}
                onDeleteBook={handleDeleteBook}
            />
        ));
        

    return (
        <div className="d-flex justify-content-center flex-wrap my-5">
            <div className='container max-w-50 d-flex justify-content-center flex-wrap'>
                <BookSearch onSearch={handleSearch} search={search} />
            </div>
            <div className='container d-flex justify-content-center flex-wrap'>
                {loading ? <p>Cargando libros...</p> : error ? <p>{error}</p> : (filteredBooks.length ? filteredBooks : <p>No se encontraron libros</p>)}
            </div>
        </div>
    );
};

export default Books;
