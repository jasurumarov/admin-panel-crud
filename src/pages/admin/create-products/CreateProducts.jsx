import React, { useState, useEffect } from 'react'
import { usePostProductsMutation } from '../../../context/api/productsApi'
import { toast } from 'react-toastify'

let initialState = {
  title: "",
  desc: "",
  price: ""
}

const CreateProducts = () => {
  let [createProduct, {isLoading, isSuccess}] = usePostProductsMutation()

  const [newProduct, setNewProduct] = useState(initialState)

  useEffect(()=>{
    if (isSuccess) {
      setNewProduct(initialState)
      toast.success("Product succesfully created")
    }
  }, [isSuccess])

  const handleCreateProduct = (e) => {
    e.preventDefault()
    createProduct(newProduct)
  }
  return (
    <div className='createProducts-section'>
      <div className="container">
        <div className="createProducts-section__content">
          <h2>Create Products</h2>
            <form onSubmit={handleCreateProduct}>
              <input value={newProduct.title} onChange={e => setNewProduct(prev => ({...prev, title: e.target.value}))} type="text" placeholder='Enter title'/>
              <input value={newProduct.desc} onChange={e => setNewProduct(prev => ({...prev, desc: e.target.value}))} type="text" placeholder='Enter description'/>
              <input value={newProduct.price} onChange={e => setNewProduct(prev => ({...prev, price: e.target.value}))} type="number" placeholder="Enter price"/>
              <button>{isLoading ? "Loading..." : "Create Product"}</button>
            </form>
        </div>
      </div>
    </div>
  )
}

export default CreateProducts