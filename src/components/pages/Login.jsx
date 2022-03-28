import axios from 'axios'
import React, { useState } from 'react'
import { connect } from 'react-redux'
import { updateState } from '../../redux/actions/loginAction'
import { API_PATH } from '../../redux/types/loginTypes'

const Login = (props) => {
    const [email, setEmail]= useState('')
    const [password, setPassword]= useState('')
    console.log(email, password);

    const login = () => {
        axios.post(API_PATH + 'api/login', {email, password})
            .then((res) => {
                console.log(res);
            })
            .catch((err) => {
                console.log(err);
            })
    }
    
    return (
        <>
            <div className="login">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <h1>Login</h1>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-4 offset-lg-4">

                            <div className="card pt-3">
                                <div className="card-body">
                                    <form onSubmit={(e) => e.preventDefault()}>
                                        <input
                                            type="email"
                                            placeholder='Enter email'
                                            className='form-control mb-4'
                                            required
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                        />
                                        <input
                                            type="password"
                                            placeholder='Enter password'
                                            className='form-control mb-4'
                                            required
                                            value={password}
                                            onChange={(e) => setPassword(e.target.value)}
                                        />

                                        <button 
                                            onClick={login}
                                            type='submit' className="btn btn-outline-warning px-4 py-2 d-block ml-auto">Log in</button>
                                    </form>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

const mapStateToProps = state => {
    return {
    }
}

export default connect(mapStateToProps, { updateState })(Login)