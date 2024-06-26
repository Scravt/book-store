import React from 'react'
import { Offers } from '../../components/Offers/Offers'
import { BestSellers } from '../../components/BestSellers/BestSellers'
import { MainCategories } from '../../components/MainCategories/MainCategories'
import { FirstView } from '../../components/firstview/FirstView'


export const Home = ({libros}) => {
  return (
    <>
      <FirstView />
      <Offers books={libros}/>
      <BestSellers books={libros} />
      <MainCategories />
    </>
  )
}
