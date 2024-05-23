import React from 'react'

import { useParams } from 'react-router-dom'

const UserDetail = () => {
    const params = useParams()
  return (
    <div>
      <h1>User Detail</h1>
      <p>User ID: {params?.userId}</p>
      {/* Add more details or fetch user data based on userid */}
    </div>
  )
}

export default UserDetail