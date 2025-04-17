﻿using Application.Interfaces;
using Application.Models;
using Application.Models.Requests;
using Domain.Entities;
using Domain.Exceptions;
using Domain.Interfaces;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Application.Services
{
    public class BookService : IBookService
    {
        private readonly IBookRepository _bookRepository;

        public BookService (IBookRepository bookRepository)
        {
            _bookRepository = bookRepository;
        }

        //Obtener todos los libros
        public List<Book> GetAllBooks(string? titulo = null, string? autor = null)
        {
            return _bookRepository.GetAllBooks(titulo, autor);
        }

        //Agregar un nuevo libro
        public BookDto AddNewBook(BookCreateRequest bookDto)
        {
            var existingBook = _bookRepository.GetByTittle(bookDto.Title);
            if (existingBook != null)
            {
                throw new NotAllowedException("El titulo ya se encuentra en el sistema.");
            }

            var newBook = _bookRepository.Create(BookCreateRequest.ToEntity(bookDto));

            return BookDto.ToDto(newBook);
        }

        //Obtener un libro por Id
        public BookDto GetBookById(int id)
        {
            var book = _bookRepository.Get(id);
            if (book == null)
            {
                throw new NotFoundException(nameof(Book), id);
            }

            return BookDto.ToDto(book);
        }

        //Eliminar un libro por id
        public void DeleteBook(int id)
        {
            var book = _bookRepository.Get(id);
            if (book == null)
            {
                throw new NotFoundException(nameof(Book), id);
            }

            _bookRepository.Delete(book);
        }

        //Obtener un libro por título
        public BookDto GetBookByTittle(string tittle) 
        {
            var book = _bookRepository.GetByTittle(tittle);
            if (book == null)
            {
                throw new NotFoundException(nameof(Book), tittle);
            }
            return BookDto.ToDto(book);
        }

        //Modificar un libro
        public BookDto UpdateBook(string title, float price, string description, string author) 
        {
            var bookToUpdate = _bookRepository.GetByTittle(title);  

            if (bookToUpdate == null)
            {
                throw new NotFoundException(nameof(Book), title);
            }

            if (bookToUpdate != null)
            {
                bookToUpdate.Price = price;
                bookToUpdate.Description = description;
                bookToUpdate.Author = author;
            }

           return BookDto.ToDto(_bookRepository.Update(bookToUpdate));
        }

        public BookDto RemoveBookStock(int bookId)
        {
            var book = _bookRepository.Get(bookId);
            if (book == null)
            {
                throw new NotFoundException(nameof(Book), bookId);
            }

            return (BookDto.ToDto(_bookRepository.RemoveBookStock(book)));
        }
    }
}
