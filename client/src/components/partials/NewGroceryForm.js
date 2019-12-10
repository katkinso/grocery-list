import React, { Component } from "react";
import { withRouter, Link } from 'react-router-dom'
import Button from 'react-bootstrap/Button';

const NewGroceryForm = props => {

    const { newGroceryName, newGroceryDescription, handleNewGrocery, createGrocery } = props;

    return (
        <div className="container course-list mt-5">
            <hr></hr>
            <h2>Add Item</h2>
            <form onSubmit={createGrocery}>
                <div className="form-group">
                    <label>Item Name</label>
                    <input
                        className="form-control"
                        type="text"
                        placeholder="enter name"
                        id="newGroceryName"
                        value={newGroceryName}
                        onChange={handleNewGrocery}
                    />
                </div>

                <div className="form-group">
                    <label>Description</label>
                    <textarea
                        className="form-control"
                        rows="3"
                        placeholder="enter description"
                        id="newGroceryDescription"
                        value={newGroceryDescription}
                        onChange={handleNewGrocery}
                    ></textarea>
                </div>

                <Button type="submit" variant="primary">CREATE</Button>
            </form>

        </div>

    )
}

export default NewGroceryForm
