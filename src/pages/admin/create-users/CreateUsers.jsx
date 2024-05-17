import React, { useEffect, useState } from 'react'
import { usePostUsersMutation } from '../../../context/api/usersApi'
import { toast } from 'react-toastify'

let initialState = {
  fname: "",
  lname: "",
  age: ""
}

const CreateUsers = () => {
  let [createUser, {isLoading, isSuccess}] = usePostUsersMutation()

  const [newUser, setNewUser] = useState(initialState)

  useEffect(()=>{
    if (isSuccess) {
      setNewUser(initialState)
      toast.success("Product succesfully created")
    }
  }, [isSuccess])
  
  const handleCreateUser = (e) => {
    e.preventDefault()
    createUser(newUser)
  }
  return (
    <div className='createUsers-section'>
        <div className="container">
            <div className="createUsers-section__content">
                <h2>Create Users</h2>
                <form onSubmit={handleCreateUser}>
                  <input required value={newUser.fname} onChange={e => setNewUser(prev => ({...prev, fname: e.target.value}))} type="text" placeholder='Enter first name'/>
                  <input required value={newUser.lname} onChange={e => setNewUser(prev => ({...prev, lname: e.target.value}))} type="text" placeholder='Enter last name'/>
                  <input required value={newUser.age} onChange={e => setNewUser(prev => ({...prev, age: e.target.value}))} type="number" placeholder="Enter user's age"/>
                  <button>{isLoading ? "Loading..." : "Create User"}</button>
                </form>
            </div>
        </div>

    </div>
  )
}

export default CreateUsers