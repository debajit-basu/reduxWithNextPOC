import React from 'react'
import Link from 'next/link'

import { connect } from 'react-redux';

class Nav extends React.Component {
    render() {
        return (
            <div style={{backgroundColor: '#e8bec6'}}>
        <nav className="navbar navbar-expand-lg navbar-light">
            <a className="navbar-brand">Redux-POC</a>
            <span className="logo-font font-3x bold"style={{lineHeight:"2em"}}>Redux-POC</span>

            <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
                <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                    <li className="nav-item ml-5">
                        <Link href="/news">News</Link>
                    </li>
                    <li className="nav-item ml-4">
                        <Link to="/"><a>Items</a></Link>
                    </li>

                </ul>
                <div className="form-inline my-2 my-lg-0">
                    <div className="nav-item d-flex justify-content-end">
                        {
                            (!this.props.globalVariableProp.loginModal) &&
                            (!this.props.loginState.loginStatus)?
                                <button className="btn btn-light" onClick={this.props.loginClick} > Login</button>
                                :
                                <button className="btn btn-light" onClick={this.props.logoutClick} > Logout</button>
                        }
                        <div className="ml-3 mr-5">
                            {
                                (!this.props.globalVariableProp.registerModal) &&
                                (!this.props.loginState.loginStatus)?
                                    <button className="btn btn-light" onClick={this.props.registerClick} > Register</button>
                                    :
                                    <span className="font-weight-lighter font-2x logo-font">
                                                {(this.props.loginState.loginStatus)? "Welcome , " + this.props.loginState.email: ''}</span>
                            }
                        </div>



                    </div>
                </div>
            </div>
        </nav>
    </div>
        )
    }
}


const mapStateToProps = (state) => {
    return {
        globalVariableProp: state.globalVariable,
        loginState: state.login

    }
}

const mapDispatchToProps = (dispatch) => {
    return {

        loginClick: () => {dispatch({type: 'TOGGLE_LOGIN_MODAL'})},
        registerClick: () => {dispatch({type: 'TOGGLE_REGISTER_MODAL'})},
        logoutClick: () => {dispatch({type: 'LOGOUT'})}
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Nav);
