import React from 'react'
import Admin_Sidebar from '../../components/admin-sidebar'
import UserList from '../../components/user-list'

function Posts() {
  return (
    <>
      <Admin_Sidebar />
      <div className="container">

        <div>
          <h2>All users</h2>
          <UserList />
        </div>
      </div>
    </>
  )
}

export default Posts