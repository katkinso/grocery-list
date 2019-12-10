import React, { Component } from "react";
import { withRouter, Link } from 'react-router-dom'
import utils from '../../utils/utils'
import Button from 'react-bootstrap/Button'


const EditGroceryForm = props => {

    const { groceryToEdit, handleEditGrocery, updateGrocery, grocery } = props;


    return (
        <div className="container course-list mt-5">
            <form onSubmit={updateGrocery}>
                <div className="form-group">
                    <input
                        className="form-control"
                        type="text"
                        placeholder="enter name"
                        id="name"
                        value={groceryToEdit.name}
                        onChange={handleEditGrocery}
                    />
                </div>

                <div className="form-group">
                    <label>Description</label>
                    <textarea
                        className="form-control"
                        rows="3"
                        placeholder="enter description"
                        id="description"
                        value={groceryToEdit.description}
                        onChange={handleEditGrocery}
                    ></textarea>
                </div>

                <Button type="submit" className="btn btn-primary" id="update">UPDATE</Button>

            </form>

        </div>

    )
}

export default EditGroceryForm
