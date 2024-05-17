import React from 'react'
import { useSelector } from 'react-redux'
import Products from '../../components/products/Products'
import Empty from '../../components/empty/Empty'
import EmptyImg from '../../images/cart-empty.svg'

const Wishlist = () => {
  let wishlist = useSelector(state => state.heart.value)
  return (
    <div style={{marginTop: "140px"}} className='wishlist-page'>
      {wishlist.length 
          ?
        <Products isProduct={true} data={wishlist}/>
          :
        <Empty/>
      }
    </div>
  )
}

export default Wishlist