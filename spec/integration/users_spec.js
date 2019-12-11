const request = require("request");
const server = require("../../src/server");
const sequelize = require("../../src/db/models/index").sequelize;
const User = require("../../src/db/models").User;
const base = "http://localhost:9000/api";

describe("routes : users", () => {

  beforeAll((done) => {

      this.user = {
        email: "test@test.com",
        firstName: 'testFirst',
        lastName: 'testLast',
        id: '',
        password: '123456'
      }
      
      sequelize.sync({force: true})
      .then(() => {
        done();
      })
      .catch((err) => {
        done();
      });

  });


  //DESCRIBE ------
  describe("GET /users/register", () => {

    it("should return status code 200 and verify the user email", (done) => {
      request.post({
          url: `${base}/users/register`,
          form: { 
            ...this.user,
            "passwordConfirmation":this.user.password 
          }
        },(err, res, body) => {
        
        let user = JSON.parse(body)
        this.user.id = user.id;
        
        expect(res.statusCode).toBe(200);
        expect(user.email).toBe(this.user.email);
        done();
      });
    });

    //----
    it("should return status code 200", (done) => {
      request.post({
          url: `${base}/users/authenticate`,
          form: {
              email: this.user.email,
              password: this.user.password
          }
        },(err, res, body) => {
        
        this.loginCookie = res.headers['set-cookie']; 
        expect(res.statusCode).toBe(200);
       
        done();
      });
    });

    //---
    it("should NOT create a duplicate user & should return status code 403", (done) => {
      request.post({
          url: `${base}/users/register`,
          form: { 
            ...this.user,
            "passwordConfirmation":this.user.password 
          }
        },(err, res, body) => {
        
        expect(res.statusCode).toBe(403);
        done();
      });
    });

    //---
    it("should return the email for the currently authenticated user & return status code 200", (done) => {
      request.get({
          url: `${base}/users/me`,
          headers: {
            'Cookie': this.loginCookie
          } 
        },(err, res, body) => {

        let user = JSON.parse(body);
        expect(user.email).toBe(this.user.email);
        expect(res.statusCode).toBe(200);
        done();
      });
    });


  });//DESCRIBE



});