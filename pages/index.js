import React from 'react'
import Link from 'next/link'
import Head from 'next/head'
import Nav from '../components/nav'
import Page from '../components/page';


import Login from '../components/Login';
import Register from '../components/Register';

import { connect } from 'react-redux';


const Home = (props) => (
  <div>
    <Head>
      <title>Home</title>
    </Head>

    <Nav />

                  {
                      (props.globalVariableProp.loginModal) &&
                      <Login />
                  }
                  {
                      (props.globalVariableProp.registerModal) &&
                      <Register />
                  }


      </div>
)


const mapStateToProps = state => {
    return {
        globalVariableProp: state.globalVariable,
        login: state.login

    }
}

export default Page(connect(mapStateToProps,null)(Home));
