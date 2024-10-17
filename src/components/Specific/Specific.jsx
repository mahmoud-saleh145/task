import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Loader from '../../Loader/Loader'
import { Link, useParams } from 'react-router-dom'
export default function Specific() {


    const [error, setError] = useState('')
    const [isLoading, setLoader] = useState(false)
    const [specific, setSpecific] = useState([])
    let { sup } = useParams()
    async function getSpecificProducts() {
        setLoader(true)
        return axios.get(`https://fakestoreapi.com/products/category/${sup}`)
            .then((response) => {
                setSpecific(response.data)
                setLoader(false)
            })
            .catch((err) => {
                setError(err.message)
                setLoader(false)
            })

    }

    useEffect(() => {
        getSpecificProducts()
    }, [])


    return (
        <>
            <div className="container mb-5 py-5">
                <div className="row gy-3 align-items-center ">
                    {isLoading ? <Loader /> :
                        error ?
                            <div className='text-center p-5'>
                                <h6 className='fs-1'>{error}</h6>
                            </div>
                            :
                            specific == ![] ? <div className='text-center p-5'>
                                <h6 className='fs-1'>no data found</h6>
                            </div> :
                                specific.map((product, i) => (
                                    <div className="col-md-3 col-sm-6" key={i}>
                                        <div className='product rounded p-3 overflow-hidden '>
                                            <Link to={`../product/${product.id}`}>
                                                <img src={product.image} className='w-100 product-img mb-3' />
                                                <p className='text-main'>{product.title.split(' ').slice(0, 2).join(' ')}</p>

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
                                                <button className=' btn px-5 ' onClick={() => { }}>+ADD</button>
                                                <i className="fa-solid fa-heart fs-3 cursor-pointer " onClick={() => { }}></i>
                                            </div>
                                        </div >
                                    </div >

                                ))
                    }
                </div>
            </div>
        </>
    )
}
