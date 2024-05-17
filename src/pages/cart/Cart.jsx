import React from 'react'
import { useSelector } from 'react-redux'

// Components
import CartContent from '../../components/cartContent/CartContent'
import Empty from '../../components/empty/Empty'

const Cart = () => {
  const carts = useSelector(s => s.cart.value)
  return (
    <div style={{marginTop: "140px"}} className='cart-page'>
      {carts.length 
        ?
      <CartContent data={carts}/>
        :
      <Empty/>
      }
    </div>
  )
}

export default Cart