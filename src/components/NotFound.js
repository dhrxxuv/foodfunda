import React from 'react'
import { useRouteError } from 'react-router'

const NotFound = () => {
    const err = useRouteError()
    console.log(err)
  return (
    <div>
        <h1>{err.status}</h1>
        <p>{err.statusText}</p>
    </div>
  )
}

export default NotFound