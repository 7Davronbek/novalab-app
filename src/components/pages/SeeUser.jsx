import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { getSingleUser } from '../../redux/actions/loginAction'

const SeeUser = (props) => {
    useEffect(() => {
        props.getSingleUser(props.match.params.id)
    }, [])
    return (
        <>
            <div className="seeUser">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-5">
                            <img src={props.user.avatar} alt="" className="w-100" />
                        </div>
                        <div className="col-lg-6 ml-auto">
                            <h3>{props.user.first_name} {props.user.last_name}</h3>
                            <a rel="noreferrer" target="_blank" href={`https://mail.google.com/mail/u/0/?fs=1&amp;tf=cm&amp;source=mailto&amp;to=${props.user.email}`}>{props.user.email}</a>
                            <h6>{props.userInfo.text}</h6>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

const mapStateToProps = state => {
    return {
        user: state.login.user,
        userInfo: state.login.userInfo,
    }
}

export default connect(mapStateToProps, { getSingleUser })(SeeUser)