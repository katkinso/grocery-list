import React, { Component } from "react";
import GroceryListItem from "./GroceryListItem";
import EditGroceryForm from "./EditGroceryForm";
import Accordion from 'react-bootstrap/Accordion'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import { useAccordionToggle } from 'react-bootstrap/AccordionToggle';


const GroceryList = props => {

    const { groceries, togglePurchased, edit, del, groceryToEdit, handleEditGrocery, updateGrocery } = props;


    return (
        <div className="container course-list mt-5">

            <h1>Groceries</h1>
            <Accordion defaultActiveKey="0">


                {groceries.map((grocery, index) => {

                    return (

                        <Card key={index}>

                            <Card.Header>


                                <Button type="button" onClick={() => del(index)} className="btn btn-danger mx-3 float-right" id="delete" name="delete" value={grocery.id}>DELETE</Button>
                                <Accordion.Toggle className="float-right btn-primary" as={Button} eventKey={index} onClick={() => edit(index)}>
                                    EDIT
                                    </Accordion.Toggle>

                                <div className="form-check float-right pt-2 px-3">
                                    <input className="form-check-input"
                                        checked={grocery.purchased}
                                        onChange={() => togglePurchased(index)}
                                        type="checkbox"
                                    />
                                    <label className="form-check-label">
                                        Purchased
                                        </label>
                                </div>

                                {grocery.name}
                            </Card.Header>
                            <Accordion.Collapse eventKey={index} >
                                <Card.Body>

                                    <EditGroceryForm
                                        index={index}
                                        key={index}
                                        groceryToEdit={groceryToEdit}
                                        handleEditGrocery={(e) => handleEditGrocery(e)}
                                        updateGrocery={(e) => updateGrocery(e)}
                                    />
                                    
                                </Card.Body>
                            </Accordion.Collapse>
                        </Card>



                    )



                }
                )}
            </Accordion>
        </div>
    )
}

export default GroceryList


// <Card>
//           <Card.Header>
//             <Accordion.Toggle as={Button} variant="link" eventKey="0">
//               Click me!
//             </Accordion.Toggle>
//           </Card.Header>
//           <Accordion.Collapse eventKey="0">
//             <Card.Body>Hello! I'm the body</Card.Body>
//           </Accordion.Collapse>
//         </Card>
//         <Card>
//           <Card.Header>
//             <Accordion.Toggle as={Button} variant="link" eventKey="1">
//               Click me!
//             </Accordion.Toggle>
//           </Card.Header>
//           <Accordion.Collapse eventKey="1">
//             <Card.Body>Hello! I'm another body</Card.Body>
//           </Accordion.Collapse>
//         </Card>