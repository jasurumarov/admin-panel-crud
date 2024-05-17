import React from 'react'
import { useSelector } from 'react-redux'

// Components
import CheckoutContent from '../../components/checkoutContent/CheckoutContent'

const Checkout = () => {
    let carts = useSelector(s => s.cart.value)
  return (
    <div style={{marginTop: '123px'}} className='checkout-page'>
        <CheckoutContent data={carts}/>
    </div>
  )
}

export default Checkout