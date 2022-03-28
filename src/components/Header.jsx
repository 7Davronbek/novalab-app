import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
    const [user, setUser] = useState([])
    useEffect(() => {
        axios.get('https://reqres.in/api/users?page=1')
            .then((res) => {
                console.log(res);
                setUser(res.data.data)
            })
            .catch((err) => {
                console.log(err);
            })
    }, [])
    return (
        <>
            <div className="header">
                <div className="container">
                    <div className="row mb-5 pb-5 align-items-center">
                        <div className="col-lg-5">
                            <img className='w-100' src="/assets/image/1.jpeg" alt="" />
                        </div>
                        <div className="col-lg-6 ml-auto">
                            <h3>Lorem, ipsum dolor.</h3>
                            <p className='mt-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod sapiente facilis asperiores rerum! Eius distinctio harum vitae aliquam recusandae quae cupiditate soluta inventore, ut placeat qui magnam culpa? Cupiditate, optio.</p>
                            <p >Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod sapiente facilis asperiores rerum! Eius distinctio harum vitae aliquam recusandae quae cupiditate soluta inventore, ut placeat qui magnam culpa? Cupiditate, optio.</p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12 text-center mb-5">
                            <h1>Clients about us</h1>
                        </div>
                        {user?.map((item, index) => {
                            return (
                                <Link to={`/${item.id}`} key={index} className="col-lg-4 mb-5">
                                    <div className="card">
                                        <div className="card-body d-flex align-items-center">
                                            <div className="mr-3">
                                                <img src={item.avatar} alt={item.first_name} />
                                            </div>
                                            <div>
                                                <h5>Lorem ipsum dolor sit.</h5>
                                                <p className='mt-3'>{item.first_name} {item.last_name}</p>
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            )
                        })}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Header