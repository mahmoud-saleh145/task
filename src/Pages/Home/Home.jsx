import React from 'react'
import Products from '../../components/Products/Products'

export default function Home() {
  return (
    <div className="container mb-5 py-5">
      <div className="row gy-3 align-items-center ">
        <Products />
      </div>
    </div>
  )
}
