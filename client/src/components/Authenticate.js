import React, { Component } from "react";
import { withRouter } from 'react-router-dom'
import api from '../api/api'
import Button from './ui/Button'
import TextInput from './ui/TextInput'

class Register extends Component {

    constructor(props) {
        super(props);

        this.state = {
            email: "",
            password: "",
            error: "",
            message: ""
        };       
     }

     handleInputChange(e) {
        const value = e.target.value;
        const key = e.target.id;
        this.setState({ [key]:value });
     }

     handleSubmit(e) {
        e.preventDefault();

        api.authenticate({
            "email": this.state.email,
            "password": this.state.password,
        },(err,res) => {
            if (!err){
                this.props.history.push('/dashboard')
            }else{
                this.setState({
                    error:"That's not right"
                })
            }
        })

     }
    

  render(){

    return (

        <div className="container login mt-5">

            <div className="row">
                <div className="col-sm"></div>
                <div className="col-sm-5">

                    { /* CARD START */}
                    <div className="card align-middle shadow-sm bg-white rounded">
                    <div className="card-body p-5">

                    <div class="container">
                        <div class="row">
                            <div class="col-3"></div>
                            <div class="col-6 text-center"><img className="text-center" src="/assets/images/grocery-logo.png" width="70px" alt="logo" />
                            <br></br><span className="text-light font-weight-bold">Grocery List</span>
                
                            </div>
                            <div class="col-3"></div>
                        </div>
                        </div>
                   
                    
                    <p className="text-light">{this.state.error}</p>

                    <form onSubmit={e => this.handleSubmit(e)}>

                        <div className="form-group">
                        <TextInput 
                            id="email"
                            type="email" 
                            placeholder="email" 
                            value={this.state.email} 
                            onChange={(e) => this.handleInputChange(e) }
                        />
                        </div>

                        <div className="form-group pb-3">
                            <TextInput 
                            id="password"
                            type="password" 
                            placeholder="password" 
                            value={this.state.password} 
                            onChange={(e) => this.handleInputChange(e)}
                            />
                        </div>
                        <Button type="submit" text="LOG IN" for="login" />   

                    </form>
    
                    </div>
                </div>
                { /* CARD END */}

            </div>
            <div className="col-sm"></div>
        </div>
    </div>
    /* CONTAINER END */
      
    );
  }
};

export default withRouter(Register);
