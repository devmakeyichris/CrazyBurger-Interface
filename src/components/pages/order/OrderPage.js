import React from 'react'
import { Link, useParams } from 'react-router-dom'

export default function OrderPage() {
  const { username} = useParams()
  return (
    <div>
        <h1>Order Page</h1>
        <p>Bienvenue {username}!</p>
        <Link to="/">
        <button>Deconnexion</button>
        </Link>
    </div>
  )
}
