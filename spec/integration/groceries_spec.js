const sequelize = require("../../src/db/models/index").sequelize;
const User = require("../../src/db/models").User;
const request = require("request");
const server = require("../../src/server");
const base = "http://localhost:9000/api";

describe("routes : groceries", () => {

  beforeAll((done) => {

    this.user = {
        email: "test@test.com",
        firstName: 'testFirst',
        lastName: 'testLast',
        id: '',
        password: '123456'
      }
      
      this.loginCookie = ''
      this.groceryId = ''

      sequelize.sync({force: true})
      .then(() => {
        
        request.post({
            url: `${base}/users/register`,
            form: { 
              ...this.user, 
              "passwordConfirmation":this.user.password 
            }
          },(err, res, body) => {
          
          this.user.id = JSON.parse(body).id;
          this.loginCookie = res.headers['set-cookie']; 
           
          done();
        });
      })
      .catch((err) => {
        done();
      });


  });


  //DESCRIBE ------
  describe("/groceries", () => {


      //---
      it("should return status code 200 & check body", (done) => {
        request.post({
            url: `${base}/groceries/create`,
            form: {
              "name": "Chicken",
              "description": "Roast Chicken",
              "purchased": false,
              "userId": this.user.id
            },
            headers: {
              'Cookie': this.loginCookie
            }          
          },(err, res, body) => {
            
          let newGrocery = JSON.parse(body);
          this.groceryId = newGrocery.id;
          
          expect(res.statusCode).toBe(200);
          expect(newGrocery.name).toBe('Chicken');
          expect(newGrocery.description).toBe('Roast Chicken');
          expect(newGrocery.userId).toBe(this.user.id);
          
          done();
        });
      });



      //---
      it("should return status code 200 & check description updated to \"Fried Chicken\" & purchased is true", (done) => {
        request.put({
            url: `${base}/groceries/${this.groceryId}`,
            form: {
              "name": "Chicken",
              "description": "Fried Chicken",
              "purchased": true,
              "userId": this.user.id
            },
            headers: {
              'Cookie': this.loginCookie
            }          
          },(err, res, body) => {

          let updatedGrocery = JSON.parse(body);
          expect(res.statusCode).toBe(200);
          expect(updatedGrocery.description).toBe('Fried Chicken');
          expect(updatedGrocery.purchased).toBeTrue();
          done();
        });
      });

       //---
       it("should get all groceries & return 200", (done) => {
        request.get({
            url: `${base}/groceries`,
            headers: {
              'Cookie': this.loginCookie
            }          
          },(err, res, body) => {
        
          let grocery = JSON.parse(body);
          expect(res.statusCode).toBe(200);
          expect(grocery[0].name).toBe('Chicken');
          done();
        });
      });

      //---
      it("should NOT allow get groceries without authentication & return 401", (done) => {
        request.get({
            url: `${base}/groceries`,         
          },(err, res, body) => {
        
          expect(res.statusCode).toBe(401);
          done();
        });
      });

       //---
       it("should delete the grocery & return 200", (done) => {
        request.delete({
            url: `${base}/groceries/${this.groceryId}`,
            headers: {
              'Cookie': this.loginCookie
            }          
          },(err, res, body) => {

          expect(res.statusCode).toBe(200);
          expect(body).toBe('1');
          done();
        });
      });

  
  });//DESCRIBE


});