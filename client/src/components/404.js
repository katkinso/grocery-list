import React, { Component } from "react";
import { Link, withRouter } from 'react-router-dom'

class NotFound extends Component {

  render(){

    return (
        <div className="container p-5">
            <h2 className="text-center"><Link to="/">This is not the chicken you're looking for...</Link></h2><br></br>
            <p className="text-center"><Link to="/"><img src="/assets/images/404_feathers.png" width="500px" alt="logo" /></Link></p>
        </div>
    );
  }
};

export default NotFound;
