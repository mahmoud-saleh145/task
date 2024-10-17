import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Loader from '../../Loader/Loader'
import { Link } from 'react-router-dom'

export default function Category() {

    const [isLoading, setLoader] = useState(false)
    const [category, setCategory] = useState([])
    const [error, setError] = useState('')

    async function getAllCategory() {
        setLoader(true)
        return axios.get(`https://fakestoreapi.com/products/categories`)
            .then((response) => {
                setCategory(response.data)
                setLoader(false)


            })
            .catch((err) => {
                setError(err.message)
                setLoader(false)
            })

    }

    useEffect(() => {
        getAllCategory()
    }, [])

    return (
        <>
            {isLoading ? <Loader /> :
                error ?
                    <div className='text-center p-5'>
                        <h6 className='fs-1'>{error}</h6>
                    </div>
                    :
                    category == '' ?
                        <div className='text-center p-5'>
                            <h6 className='fs-1'>no data found</h6>
                        </div>
                        :
                        <div className="container p-5">
                            <div className="row g-5 ">
                                {category.map((data, i) => (
                                    <div className="col-md-6 " key={i}>
                                        <Link to={`../category/${data}`}>
                                            <div className="product rounded p-5 text-center ">
                                                <h3>{data}</h3>
                                            </div>
                                        </Link>
                                    </div>
                                ))}
                            </div>
                        </div >
            }
        </>

    )
}
