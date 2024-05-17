import React from 'react'
import { useGetUsersQuery } from '../../context/api/usersApi'
import Products from '../../components/products/Products'

const Users = () => {
  let { data, error, isLoading } = useGetUsersQuery()
  console.log(data);
  return (
    <div style={{marginTop: "140px"}} className='users'>
      <Products isProduct={false} data={data} error={error} loading={isLoading}/>
    </div>
  )
}

export default Users