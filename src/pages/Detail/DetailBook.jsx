import React from 'react'
import { useLocation } from 'react-router-dom';
import libros from '../../DMockeado/books.js';

export const DetailBook = () => {
  //obtencion de parametros de url
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const bookId = queryParams.get('id');

  const book = libros.filter((item) => item.book.id == bookId);
  console.log(`book: ${book[0].book.title}`);

  
  return (
    <div>
      <div>
        <h2>{book[0].book.title}</h2>
      </div>
      DetailBook
    </div>
  )
}
