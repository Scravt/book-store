import React from 'react'
import { Link } from 'react-router-dom'
import styles from './Authors.module.css'

export const Authors = ({ books }) => {
  const authors = books.map((item) => item.book.author);
  return (
    <div className={styles.container}>
      <h1>Autores</h1>
      <ul className={styles.list}>
        {authors.map((author, index) => (
          <li className={styles.Authors} key={index + "autor"}>
            <Link to={`/SearchList?author=${author.name}`} className={styles.menuItem}>
              {author.name}
            </Link>
          </li>
        ))}
      </ul>

    </div>

  );
};

