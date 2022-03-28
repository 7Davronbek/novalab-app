import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { API_PATH } from '../../redux/types/loginTypes'

const Profile = () => {
    const [name, setName] = useState('')
    const [job, setJob] = useState('')
    const [user, setUser] = useState({})

    const getUser = () => {
        axios.get(API_PATH + 'api/users')
            .then((res) => {
                console.log(res);
            })
            .catch((err) => {
                console.log(err);
            })
    }

    const create = () => {
        axios.post(API_PATH + 'api/users', { name, job })
            .then((res) => {
                console.log(res);
                setUser(res.data)
                console.log(user);
                setName('')
                setJob('')
            })
            .catch((err) => {
                console.log(err);
            })
    }

    useEffect(() => {
        getUser()
    }, [])

    return (
        <>
            <div className="profile">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="card">
                                <div className="card-body">
                                    <h3>Lorem, ipsum dolor.</h3>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident, ut beatae! Dignissimos.</p>
                                </div>
                            </div>
                        </div>

                        <div className="col-4">
                            <div className="card">
                                <div className="card-body">
                                    <input
                                        type="text"
                                        placeholder='Enter name'
                                        className='form-control mb-5'
                                        value={name}
                                        onChange={(e) => setName(e.target.value)}
                                    />
                                    <input
                                        type="text"
                                        placeholder='Enter job'
                                        className='form-control mb-5'
                                        value={job}
                                        onChange={(e) => setJob(e.target.value)}
                                    />

                                    <button onClick={create} className="btn btn-warning">Post</button>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}

export default Profile