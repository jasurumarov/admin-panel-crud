import React, { memo, useEffect } from 'react' 
import { useUpdateUserMutation } from '../../context/api/usersApi'
import { useUpdateProductMutation } from '../../context/api/productsApi'

const EditModel = ({isProduct, setProductData, setUserData, userData, productData}) => {
    
    let [updateUser, {isLoading, isSuccess}] = useUpdateUserMutation()
    let [updateProduct, {isLoading: isLoadingProduct, isSuccess: isSuccesProduct}] = useUpdateProductMutation()

    useEffect(()=>{
        if (isProduct) {
            if (isSuccesProduct) {
                setProductData(null)
            }
        } else {
            if (isSuccess) {
                setUserData(null)
            }
        }
    }, [isSuccess, isSuccesProduct])
    
    const handleUpdate = e => {
        e.preventDefault()

        if (isProduct) {
            let product = {
                title: productData.title,
                price: productData.price
            }
            updateProduct({body: product, id: productData.id});
        } else {
            let user = {
                fname: userData.fname,
                lname: userData.lname,
                age: userData.age,
            }
            updateUser({body: user, id: userData.id});
        }
        
    }

    const handleOverlay = () => {
        if (isProduct) {
            setProductData(null)
        } else {
            setUserData(null)
        }
    }
  return (
    <>
        <div onClick={handleOverlay} className="edit__overlay"></div>
        <form onSubmit={handleUpdate} className="edit__wrapper">
            <h2>Update User</h2>
            {
                isProduct ?
                <>
                    <input value={productData.title} onChange={e => setProductData(prev => ({...prev, title: e.target.value}))} type="text" placeholder='Title'/>
                    <input value={productData.price} onChange={e => setProductData(prev => ({...prev, price: e.target.value}))} type="number" placeholder='Price'/>
                </>
                :
                <>
                    <input value={userData.fname} onChange={e => setUserData(prev => ({...prev, fname: e.target.value}))} type="text" placeholder='First Name'/>
                    <input value={userData.lname} onChange={e => setUserData(prev => ({...prev, lname: e.target.value}))} type="text" placeholder='Last Name'/>
                    <input value={userData.age} onChange={e => setUserData(prev => ({...prev, age: e.target.value}))} type="number" placeholder='Age'/>
                </>
            }
            <button disabled={isLoading || isLoadingProduct}>{isLoading || isLoadingProduct ? "Loading..." : "Save"}</button>
            <button type='button' onClick={handleOverlay}>Cancel</button>
        </form>
    </>
  )
}

export default memo(EditModel)