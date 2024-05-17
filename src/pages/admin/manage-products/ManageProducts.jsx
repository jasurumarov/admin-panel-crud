import React from 'react'
import { useGetProductsQuery } from '../../../context/api/productsApi'

// Components
import Empty from '../../../components/empty/Empty'
import Products from '../../../components/products/Products'

const ManageProducts = () => {
  let {data} = useGetProductsQuery()
  return (
    <div className='manageProducts-section'>
      <div className="container">
        <h2>Manage Products</h2>
      </div>
      {
        data?.length ?
        <Products isAdmin={true} isProduct={true} data={data}/>
        : <div style={{marginTop: "40px"}}><Empty/></div>
      }
    </div>
  )
}

export default ManageProducts