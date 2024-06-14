import React from 'react'
import styles from './BuyPage.module.css'

export const BuyPage = () => {
  return (
    <div className='flex text-gray-500 bg-gray-50 justify-evenly h-2/3' >
      <section className='flex flex-col'>
        
          <span>  Shopping Continue //link</span>
        
        <section className='ListContainer'>
          <div>
            <span>
              Shopping cart
            </span>
            <span>
              You have 3 items in your cart
            </span>
            <article>
              <ul>
                renderizar los libros del carrito
              </ul>
            </article>
          </div>
        </section>

      </section>


      <section className='CardDetails'>
        <h1>Card Deatails</h1>
        <span> Card type</span>
        <ul className='flex flex-row gap-2'>
          <li>Mastercard</li>
          <li>Visa</li>
          <li>Paypal</li>
        </ul>
        <form action="" className='flex flex-col'>
          <label htmlFor="CardNumber">Card number</label>
          <input type="text" placeholder="Card number" id='CardNumber' />
          <label htmlFor="CardHolder">Card holder</label>
          <input type="text" placeholder="Card holder" />
          <label htmlFor="ExpirationDate">Expiration date</label>
          <input type="text" placeholder="Expiration date" />
          <label htmlFor="CVV">CVV</label>
          <input type="text" placeholder="CVV" />

          <table>
            <tr>
              <td>Subtotal</td>
              <td>$1,423</td>
            </tr>
            <tr>
              <td>Shipping</td>
              <td>$0</td>
            </tr>
            <tr>
              <td>Total</td>
              <td>$1,423</td>
            </tr>
          </table>


          <button> $1,423    Pay</button>

        </form>

      </section>
    </div>
  )
}
