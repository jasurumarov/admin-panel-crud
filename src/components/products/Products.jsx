import React, { memo, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { toggleHeart } from '../../context/slice/heartSlice'
import { addToCart } from '../../context/slice/cartSlice'
import { useDeleteUserMutation } from '../../context/api/usersApi'
import { useDeleteProductsMutation } from '../../context/api/productsApi'

// IMAGES
import { LuShoppingCart } from 'react-icons/lu'
import { FaHeart, FaRegHeart } from 'react-icons/fa'
import { FiSearch } from 'react-icons/fi'
import { toast } from 'react-toastify'
import { BiMessageDetail } from 'react-icons/bi'
import { BsInfoCircle } from 'react-icons/bs'
import { GrLocation } from 'react-icons/gr'
import EditModel from '../editModel/EditModel'

const Products = ({data, loading, error, isProduct, isAdmin}) => {
    const [ editUser, setEditUser ] = useState(null)
    const [ editProduct, setEditProduct ] = useState(null)
 
    let [deleteUser, {}] = useDeleteUserMutation()
    let [deleteProduct, {}] = useDeleteProductsMutation()
    const handleDeleteUser = (id) => {
        if (isProduct) {
            if (window.confirm("Are you sure?")) {
                deleteProduct(id)
            }
        } else {
            if (window.confirm("Are you sure?")) {
                deleteUser(id)
            }
        }
    }

    const handleEdit = (el) => {
        if (isProduct) {
            setEditProduct(el)
        } else {
            setEditUser(el)
        }
    }

    let wishlist = useSelector(state => state.heart.value)
    const dispatch = useDispatch()

    let product = data?.map(el => (
        <div key={el.id} className="products__card">
            <div className="products__card-img">
                <img src={el.image} alt="" />
                <article>
                    {isProduct 
                        ?
                    <>
                        <div onClick={() => {
                            dispatch(addToCart(el))
                            toast.success("Product has been added to cart")
                        }}>
                            <LuShoppingCart />
                        </div>
                        <div onClick={() => dispatch(toggleHeart(el))}>
                            {
                                wishlist?.some(item => item.id === el.id) 
                                    ? 
                                <FaHeart style={{color:"red"}}/> 
                                    :
                                <FaRegHeart/>
                            }
                        </div>
                        <div><FiSearch /></div>
                    </>
                        :
                    <>
                        <div><GrLocation /></div>
                        <div><BiMessageDetail /></div>
                        <div><BsInfoCircle /></div>
                    </>
                    }
                </article>

            </div>
            {isProduct
                ?
            <p title={el.title} >{el.title}</p>
                :
            <div className='product-user__title'>
                <p title={el.fname} >{el.fname}</p>
                <p title={el.lname} >{el.lname}</p>
            </div>
            }
            {isProduct
                ?
            <h3>${el.price}</h3>
                :
            <h3><span>Age: </span>{el.age}</h3>
            }
            {
                isAdmin 
                ? <div className="admin-btns">
                    <button onClick={() => handleDeleteUser(el.id)}>Delete</button>
                    <button onClick={() => handleEdit(el)}>Edit</button>
                </div>
                : <></>
            }
           
        </div>
    ))
  return (
    <div className='products-section'>
        <div className="container">
            <div className="products-section__content">
                <div className="products__cards">
                    {product}
                </div>
                {
                    editProduct || editUser ?
                    <EditModel userData={editUser} productData={editProduct} setUserData={setEditUser} setProductData={setEditProduct} isProduct={isProduct}/> : <></>
                }
            </div>
        </div>
    </div>
  )
}

export default memo(Products)