import React, { Component, useEffect, useState } from 'react'
import Header from '../components/header'

import * as Bs from "react-icons/bs";
import UserList from '../components/user-list';
function Dashboard() {
  return (
    <div>
      <UserList />
    </div>
  )
}

export default Dashboard