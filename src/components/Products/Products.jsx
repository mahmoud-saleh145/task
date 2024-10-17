import axios from 'axios'
import React from 'react'
import { useQuery } from 'react-query'
import Loader from '../../Loader/Loader'
import { Link } from 'react-router-dom'


export default function Products() {

    function getData() {
        return axios.get("https://fakestoreapi.com/products")
    }

    let { isLoading, data, isError, error } = useQuery('Product', getData)

    return (
        <>
            {isLoading ? <Loader /> :

                isError ?
                    <div className='text-center'>
                        <h6 className='fs-1'>{error.message}</h6>
                    </div>
                    :

                    data.data.map((product, i) => (

                        <div className="col-md-3 col-sm-6 " key={i}>
                            <div className='product rounded p-3 overflow-hidden '>
                                <Link to={`../product/${product.id}`}>
                                    <img src={product.image} className='w-100 product-img mb-3' />
                                    <p className='text-main'>{product.title.split(' ').slice(0, 2).join(' ')}</p>
                                    <h1>hhfhfhfhfhfhfhfhfh</h1>
                                    <div className="d-flex justify-content-between">
                                        <span className='fs-5'>{product.price}$</span>
                                        <span>
                                            <i className='fa-solid fa-star rating-color p-1'></i>
                                            {product.rating.rate}
                                            <span className='p-1 fw-lighter'>({product.rating.count})</span>
                                        </span>
                                    </div>
                                </Link >
                                <div className="d-flex justify-content-between align-items-center mt-3">
                                    <button className=' btn px-5 '>+ADD</button>
                                    <i className="fa-solid fa-heart fs-3 cursor-pointer "></i>
                                </div>
                            </div >
                        </div >

                    )
                    )
            }
        </>
    )
}
