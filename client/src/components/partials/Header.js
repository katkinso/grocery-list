import React, { Component } from "react";
import { Link, withRouter } from 'react-router-dom'
import utils from '../../utils/utils'
import api from '../../api/api'
import Cookies from 'universal-cookie';
import Button from 'react-bootstrap/Button';

const Header = props => {

  if (!utils.checkCookie()) {

      props.history.push({
      pathname: '/authenticate',
      state: { error: "access denied" }
    })
  }

  const logout = () => {

    api.logout((err,res) => {
      if (!err){
        utils.removeCookie()
        props.history.push({
          pathname: '/authenticate', 
          state: { message: "logged out" }
        })
      }
    })
  }

  const user = props.user;

  return (
    <header className="py-2 px-2 header-top">
      <div className="container-fluid">
        <div className="row flex-nowrap justify-content-between align-items-center">
          <div className="col-4 p-1">
          <Link to="/dashboard"><img src="/assets/images/grocery-logo.png" width="40px" alt="logo" className="mx-2" /></Link>
          <span className="font-weight-bold">Grocery List</span>
          </div>
          <div className="col-4 d-flex justify-content-end align-items-center">
            <img src="/assets/images/feathers.png" alt="avatar" className="avatar" />

            <span className="px-2">
              <Link className="text-capitalize font-weight-bold" to={`/profile`}>{user.firstName} {user.lastName}</Link><br></br>
              <span className="text-sm-muted font-weight-bold">{user.email}</span>
            </span>

            <Button onClick={() => logout()} variant="primary">logout</Button>
          </div>
        </div>
      </div>
    </header>
  )
}

export default withRouter(Header);
