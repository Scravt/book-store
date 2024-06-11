import React from 'react';
import { useLocation } from 'react-router-dom';
import libros from '../../DMockeado/books.js';
import styles from './SearchList.module.css'
import { Card } from '../../components/Card/Card';


export const SearchList = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);

  const title = queryParams.get('title');
  const genre = queryParams.get('genre');

  if (!title && !genre) {
    return <div>No hay resultados</div>
  }

 
    const filteredBooks = libros.filter((item) => item.book.genre === genre);
    console.log(filteredBooks);
  



  return (
    <div className={styles.container}>
    {genre && (
      filteredBooks?.map((item) => (
        <Card key={item.book.id + "genre"} book={item.book}/>
      ))
    )}
    </div>
  )
}
