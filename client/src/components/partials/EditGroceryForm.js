import React, { Component } from "react";
import { withRouter, Link } from 'react-router-dom'
import utils from '../../utils/utils'
import Button from 'react-bootstrap/Button'
import { useAccordionToggle } from 'react-bootstrap/AccordionToggle';


const EditGroceryForm = props => {

    const { groceryToEdit, handleEditGrocery, updateGrocery, grocery, index } = props;

    function CustomToggle({ children, eventKey, type, id }) {

        const decoratedOnClick = useAccordionToggle(eventKey);
        
        let className = id === 'cancel' ? 'btn btn-secondary' : 'btn btn-primary mr-2'
        let disabled = ''
        if ((id === 'update') && (groceryToEdit.purchased)) {
            disabled = 'disabled'
        }


        return (
          <button
            type={type}
            className={className}
            onClick={decoratedOnClick}
            disabled={disabled}
          >
            {children}
          </button>
        );
    }

    return (



        <div className="container course-list">
            <form onSubmit={updateGrocery}>
                <div className="form-group">
                    <input
                        className="form-control"
                        type="text"
                        placeholder="enter name"
                        id="name"
                        value={groceryToEdit.name}
                        onChange={handleEditGrocery}
                        disabled={(groceryToEdit.purchased) && 'disabled'}
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
                        disabled={(groceryToEdit.purchased) && 'disabled'}
                    ></textarea>
                </div>

                <CustomToggle type="submit" id="update" eventKey={index}>UPDATE</CustomToggle>
                <CustomToggle type="button" id="cancel" eventKey={index}>CANCEL</CustomToggle>
            </form>

        </div>

    )
}

export default EditGroceryForm
