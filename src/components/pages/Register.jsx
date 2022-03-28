import React, { useState } from 'react'
import { connect } from 'react-redux'
import { updateState, registration } from '../../redux/actions/loginAction'

const Register = (props) => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    return (
        <>
            <div className="register">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <h1>Registration</h1>
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
                                            onClick={registration(email, password)}
                                            type='submit' className="btn btn-outline-warning px-4 py-2 d-block ml-auto">Regisration</button>


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

// const mapStateToProps = state => {
//     return {
        
//     }
// }

export default connect(null, { updateState, registration })(Register)