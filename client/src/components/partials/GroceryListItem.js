import React, { Component } from "react";
import { withRouter, Link } from 'react-router-dom'
import utils from '../../utils/utils'
import Button from 'react-bootstrap/Button'


const GroceryListItem = props => {

    const { grocery, togglePurchased, purchased, edit, del } = props;

    return (
        <div>
            <div className="row flex-nowrap justify-content-between align-items-center">
                
                <div className="col-1 text-center">
                <div className="form-check">
                    <input className="form-check-input" 
                        checked={purchased} 
                        onChange={togglePurchased} 
                        type="checkbox" 
                    />
                </div>

                </div>
                <div className="col-7">
                    <h5 className="text-capitalize">{grocery.name} </h5>
                    <p>{grocery.description} </p>
                </div>
                <div className="col-4 d-flex justify-content-end align-items-center">
                    
                </div>
            </div>
        </div>
    )
}

export default GroceryListItem
