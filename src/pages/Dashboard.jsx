import React, { Component, useEffect, useState } from 'react'
import Header from '../components/header'
import Admin_Sidebar from '../components/admin-sidebar'

import * as Bs from "react-icons/bs";
import UserList from '../components/user-list';
function Dashboard() {
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

export default Dashboard