import dotenv from 'dotenv'

import React, { Component } from "react";
import { Link, withRouter } from 'react-router-dom'
import api from '../api/api'
import utils from '../utils/utils'
import Header from './partials/Header'
import GroceryList from './partials/GroceryList'
import NewGroceryForm from './partials/NewGroceryForm'
import socketIOClient from 'socket.io-client'

class Dashboard extends Component {

  constructor(props) {
    

      super(props);

      this._isMounted = false;

      this.state = {
          message: "",
          user: {
            id:"",
            email:"",
            firstName: "",
            lastName: "",
            nextSession: ""
          },
          groceries: [],
          endpoint: "",
          newGroceryName: "",
          newGroceryDescription: "",
          groceryToEdit: {
             id: "",
             name: "",
             description: ""
          }
      };    
      
     //move out to config.
      if (process.env.NODE_ENV === 'development'){
          this.state.endpoint = 'http://localhost:9000'; 
      }else{
          this.state.endpoint = ""
      }

      this.socket = socketIOClient(this.state.endpoint);


      api.me((err,res) => {
        if (!err){
            const user = res.data;
            this.setState({user})
        }
      })

      api.groceries('info', (err,res) => {
        if (!err){
            const groceries = res.data;
            this.setState({groceries})
        }
      })

  }//constructor end


  componentDidMount() {
    this._isMounted = true;

    if (this._isMounted) {
      const socket = socketIOClient(this.state.endpoint);
      socket.on('update groceries', (groceries) => {
          this.setState({groceries}) 
      })
    }
  }

  componentWillUnmount() {
    this._isMounted = false;
  }

  send = () => {
    const socket = socketIOClient(this.state.endpoint);
    socket.emit('update groceries', this.state.groceries) 
  }

  


  togglePurchased(index){

    const groceries = this.state.groceries.slice();
    const grocery = groceries[index];

    groceries[index].purchased = grocery.purchased ? false : true;
  
    api.updateGrocery(grocery, (err,res) => {
      if (!err){
          this.setState({groceries}) 
          this.send()
      }
    })
  }

  handleNewGrocery(e){
    const value = e.target.value;
    const key = e.target.id;

    this.setState({ [key]:value });
  }

  handleEditGrocery(e){
    const value = e.target.value;
    const key = e.target.id;
    const groceryToEdit = {...this.state.groceryToEdit}; //copy

    groceryToEdit[key] = value;

    this.setState({groceryToEdit});
  }

  updateGrocery(e){
    e.preventDefault()

    const updatedGrocery = this.state.groceryToEdit;
    const currentGroceries = this.state.groceries.slice();  


    const newGroceries = currentGroceries.map((grocery) => {
      if (grocery.id === updatedGrocery.id){
          return grocery = {
              id: updatedGrocery.id,
              name: updatedGrocery.name,
              description: updatedGrocery.description,
              purchased: updatedGrocery.purchased,
              userId: grocery.userId
          }
      }else{
        return grocery
      }
    })

    api.updateGrocery(updatedGrocery, (err,res) => {
      if (!err){
        this.setState({groceries:newGroceries}) 
          this.send()
      }
    })


  }

  createGrocery(e){
    e.preventDefault()

    const newGrocery = {
        name: this.state.newGroceryName,
        description: this.state.newGroceryDescription
    }
    const groceries = this.state.groceries.slice();  
      
    api.createGrocery(newGrocery, (err,res) => {
      if (!err){
          groceries.push(res.data)
          this.setState({
            groceries: groceries, 
            newGroceryName: "", 
            newGroceryDescription: ""});

          this.send();
      }
    })

  }

  edit(index){

    let grocery = this.state.groceries.slice(index, index+1)
    this.setState({groceryToEdit:grocery[0]});
  }

  del(index){

    let grocery = this.state.groceries.slice(index, index+1)
    let filteredGroceries = this.state.groceries
    filteredGroceries.splice(index, 1)
    this.setState({groceries:filteredGroceries});

    api.deleteGrocery(grocery[0].id, (err,res) => {
      if (!err){
          this.send();
      }
    })
  }

 

  render(){

    const { user, groceries, newGroceryName, newGroceryDescription, groceryToEdit } = this.state;

    return (
        <div className="container-fluid px-0 pb-5">

            <Header user={user} />

            

            <GroceryList 
              groceries={groceries} 
              groceryToEdit={groceryToEdit}
              togglePurchased={(index) => {this.togglePurchased(index)}}
              edit={(index) => this.edit(index)}
              del={(index) => {this.del(index)}}
              handleEditGrocery={(e) => {this.handleEditGrocery(e)}}
              updateGrocery={(e) => {this.updateGrocery(e)}}
              /> 

            <NewGroceryForm 
              createGrocery={e => this.createGrocery(e)}
              newGroceryName={newGroceryName} 
              newGroceryDescription={newGroceryDescription} 
              handleNewGrocery={(e) => {this.handleNewGrocery(e)}}
            />
        </div>
      
    );
  }
};

export default withRouter(Dashboard);


