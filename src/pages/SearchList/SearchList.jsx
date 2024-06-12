import React from 'react';
import { useLocation } from 'react-router-dom';
import libros from '../../DMockeado/books.js';
import styles from './SearchList.module.css'
import { Card } from '../../components/Card/Card';


export const SearchList = () => {
  //obtencion de parametros de url
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const title = queryParams.get('title');
  const genre = queryParams.get('genre');
  const author = queryParams.get('author');

  //filtrado de libros segun parametros url
  const filteredBooksByGendre = libros.filter((item) => item.book.genre === genre);
  const filteredBooksByTitle = libros.filter((item) => item.book.title.includes(title));
  const filteredBooksByAuthor = libros.filter((item) => item.book.author.name === author);

  return (
    <div className={styles.container}>
      {genre && (
        filteredBooksByGendre?.map((item) => (
          <Card key={item.book.id + "genre"} book={item.book} />
        ))
      )}
      {title && (
        filteredBooksByTitle?.map((item) => (
          <Card key={item.book.id + "title"} book={item.book} />
        ))
      )}
      {author && (
        filteredBooksByAuthor?.map((item) => (
          <Card key={item.book.id + "author"} book={item.book} />
        ))
      )}
    </div>
  )
}
