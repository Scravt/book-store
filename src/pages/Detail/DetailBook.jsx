import React from 'react'
import { useLocation } from 'react-router-dom';
import libros from '../../DMockeado/books.js';
import styles from './DetailBook.module.css';

export const DetailBook = () => {
  //obtencion de parametros de url
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const bookId = queryParams.get('id');

  const book = libros.filter((item) => item.book.id == bookId);
  console.log(`book: ${book[0].book.title}`);


  return (
    <div className={styles.containerPrincipal}>
      <div className={styles.productoverview}>
        <section >
          <img src={book[0].book.cover} alt={book[0].book.title} />
        </section>
        <section className={styles.shell}>
          <span>
            {book[0].book.title}
          </span>
          <span>
            {book[0].book.price}
          </span>
          <div>
            <span>
              Llega hoy!
            </span>
            Solo en CABA y zonas de GBA

            Comprando dentro de los próximos 55 min

            Más formas de entrega
            Retirá a partir del viernes en correos y otros puntos

            <span>
              Stock disponible
            </span>
          </div>
        </section>
      </div>
      <section className='Caracteristicas'>
        <table>
          <tr>
            <td>
              Titulo
            </td>
            <td>
              {book[0].book.title}
            </td>
          </tr>
          <tr>
            <td>
              Autor
            </td>
            <td>
              {book[0].book.author.name}
            </td>
          </tr>
          <tr>
            <td>
              Año
            </td>
            <td>
              {book[0].book.year}
            </td>
          </tr>
          <tr>
            <td>
              Paginas
            </td>
            <td>
              {book[0].book.pages}
            </td>
          </tr>
          <tr>
            <td>
              ISBN
            </td>
            <td>
              {book[0].book.ISBN}
            </td>
          </tr>|
        </table>
      </section>
      <section>
        <span>
          Sinopsis
        </span>
        <p>
          {book[0].book.synopsis}
        </p>
      </section>
    </div>

  )
}
