import React from 'react'
import { useGetProductsQuery } from '../../context/api/productsApi'
import Products from '../../components/products/Products'

// Components

const Home = () => {
    let { data, error, isLoading } = useGetProductsQuery()
  return (
    <div style={{marginTop: "140px"}} className='home-page'>
        <Products isProduct={true} data={data} error={error} loading={isLoading}/>
    </div>
  )
}

export default Home