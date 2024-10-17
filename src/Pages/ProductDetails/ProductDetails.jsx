import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import Loader from './../../Loader/Loader';

export default function ProductDetails() {
    let { id } = useParams()
    const [isLoading, setLoader] = useState(false)
    const [error, setError] = useState('')
    const [details, setDetails] = useState([])


    function getProductDetails() {
        setLoader(true)
        return axios.get(`https://fakestoreapi.com/products/${id}`)
            .then((response) => {
                setDetails(response.data)
                setLoader(false)
            })
            .catch((err) => {
                setError(err.message)
                setLoader(false)
            })
    }

    useEffect(() => {
        getProductDetails()
    }, [])

    return (
        <>
            {isLoading ? <Loader /> :
                error ?
                    <div className='text-center p-5'>
                        <h6 className='fs-1'>{error}</h6>
                    </div>
                    :
                    details ?
                        <div className="container py-5 mb-4">
                            <div className="row align-items-center justify-content-between">
                                <div className="col-md-3">
                                    <img src={details.image} className='w-100'></img>
                                </div>
                                <div className="col-md-7">
                                    <div>
                                        <h2></h2>
                                        <p>{details.title}</p>
                                        <div className="d-flex justify-content-between align-items-center">
                                            <span className="fs-4">{details.price}$</span>
                                            <span>
                                                {details.rating?.rate}
                                                <i className="fa fa-star rating-color"></i>
                                                <span className="p-1 fw-lighter">({details.rating?.count})</span>
                                            </span>

                                        </div>
                                    </div>
                                    <div className='d-flex justify-content-between  mt-4' >
                                        <button className='btn btn-success w-75'>+Add</button>
                                        <i className="fa-solid fa-heart fs-3 mt-2 cursor-pointer " ></i>
                                    </div>
                                    <div className='mt-5'>
                                        description:<br />{details.description}
                                    </div>
                                </div>
                            </div>
                        </div >
                        : <div className='text-center p-5'>
                            <h6 className='fs-1'>no product found</h6>
                        </div>

            }
        </>
    )
}

