import React from 'react'
import { useGetUsersQuery } from '../../../context/api/usersApi'

// Components
import Empty from '../../../components/empty/Empty'
import Products from '../../../components/products/Products'

const ManageUsers = () => {
  let {data} = useGetUsersQuery()
  return (
    <div className='manageUsers-section'>
      <div className="manageUsers-section__content">
        <div className="container">
          <h2>Manage Users</h2>
        </div>
        {
        data?.length ?
        <Products isAdmin={true} isProduct={false} data={data}/>
        : <div style={{marginTop: "-140px"}}><Empty/></div>
      }
      </div>
    </div>
  )
}

export default ManageUsers