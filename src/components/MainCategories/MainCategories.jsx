import React from 'react'
import styles from './MainCategories.module.css'
import { Link } from 'react-router-dom'

export const MainCategories = () => {
    const categories = [
        ["Terror", "Ciencia ficción", "Fantasía", "Zombies", "drama", "comedia"],
        ["misterio", "fantasia", "infantil", "juvenil", "adulto"]
    ]

    return (
        <div className={styles.container}>
            <h1 className={styles.title}>¡Descubre las historias en nuestras selecciones!</h1>
            <section className={styles.containerCategory}>
                <ul className={styles.listCategory}>
                    {categories[0].map(category => (
                        <li className={styles.item} key={category}>
                            <Link to= {`/SearchList?genre=${category}`} className={styles.menuItem}>
                                {category}
                            </Link>
                        </li>
                    ))}
                </ul>
                <ul className={styles.listCategory}>
                    {categories[1].map(category => (
                        <li className={styles.item} key={category}>
                            <Link to='/SearchList' className={styles.menuItem}>
                                {category}
                            </Link>
                        </li>
                    ))}
                </ul>
            </section>
        </div>
    )
}
