
// import { config } from '../config.js'; TODO XXXX
const axios = require('axios');
const dotenv = require('dotenv');

if (process.env.NODE_ENV === 'development'){
   axios.defaults.baseURL = 'http://localhost:9000'; //update with dev setting
}
axios.defaults.headers.post['Content-Type'] = 'application/json';
axios.defaults.withCredentials = true

const authenticate = (data, cb) => {
   axios({
      method: 'post',
      url: '/api/users/authenticate',
      data: data,
   })
   .then((res) => {
      cb(null,res)
   })
   .catch(function (err) {
      cb(err)
   })
}

const me = (cb) => {
   axios({
       method: 'get',
       url: '/api/users/me'
    })
   .then((res) => {
      cb(null,res)
   })
   .catch(function (err) {
      cb(err)
   })
}

const logout = (cb) => {
   axios({
       method: 'get',
       url: '/api/users/logout'
    })
   .then((res) => {
      console.log(res)
      cb(null,res)
   })
   .catch(function (err) {
      cb(err)
   })
}

const groceries = (query, cb) => {
   axios({
       method: 'get',
       url: '/api/groceries'
    })
   .then((res) => {
      cb(null,res)
   })
   .catch(function (err) {
      cb(err)
   })
}


const updateGrocery = (updatedGrocery, cb) => {

   axios({
      method: 'put',
      url: `/api/groceries/${updatedGrocery.id}`,
      data: updatedGrocery,
   })
   .then((res) => {
      cb(null,res)
   })
   .catch(function (err) {
      cb(err)
   })
}

const createGrocery = (data, cb) => {
   
   axios({
      method: 'post',
      url: `/api/groceries/create`,
      data: data,
   })
   .then((res) => {
      cb(null,res)
   })
   .catch(function (err) {
      cb(err)
   })
}

const deleteGrocery = (id, cb) => {
   console.log(id)
   axios({
      method: 'delete',
      url: `/api/groceries/${id}`
   })
   .then((res) => {
      console.log(res)
      cb(null,res)
   })
   .catch(function (err) {
      console.log(err)
      cb(err)
   })
}


export default { 
   authenticate, 
   me, 
   logout, 
   groceries,
   updateGrocery,
   createGrocery,
   deleteGrocery
}





