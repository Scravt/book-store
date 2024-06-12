import React from 'react'
import style from './Card.module.css'
import { Link } from 'react-router-dom'

export const Card = ({ book }) => {
    return (

        <article className={style.card}>
            <img className={style.image} src={book.cover} alt={book.title} />
            <section className={style.info}>
                <span className={style.title}>
                    <Link to={`/DetailBook?id=${book.id}`}>
                        {book.title}
                    </Link>
                </span>
                <section className={style.shoping}>
                    <span className={style.price}>
                        $ {book.year}
                    </span>
                    <button className={style.buy}>
                        Comprar
                    </button>
                </section>
            </section>
        </article>


    )
}
