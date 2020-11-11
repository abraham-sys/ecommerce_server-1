const request = require("supertest");
const app = require("../app");
const { sequelize } = require("../models");
const { queryInterface } = sequelize;
const Helper = require("../helpers/helper");

afterAll((done) => {
  queryInterface
    .bulkDelete("Products")
    .then(() => {
      done();
    })
    .catch((err) => {
      done();
    });
});

describe("Endpoint testing for GET /products", function () {
  it("test register: success", function (done) {
    request(app)
      .get("/products")
      .send({ email: "b4s4r4@gmail.com", password: "ballanar7" })
      .then((response) => {
        const { body, status } = response;

        expect(status).toEqual(201);
        expect(body).toHaveProperty("id", expect.any(Number));
        expect(body).toHaveProperty("email", "b4s4r4@gmail.com");
        done();
      })
      .catch((err) => {
        console.log(err);
        done();
      });
  });

  it("test register: email already registered", function (done) {
    request(app)
      .post("/users/register")
      .send({ email: "b4s4r4@gmail.com", password: "ballanar7" })
      .then((response) => {
        const { body, status } = response;

        expect(status).toBe(400);
        expect(body).toHaveProperty("msg", "Email already registered");
        done();
      })
      .catch((err) => {
        console.log(err);
        done();
      });
  });
});

describe("Endpoint testing for POST /login", function () {
  it("test login success", function (done) {
    request(app)
      .post("/users/login")
      .send({ email: "b4s4r4@gmail.com", password: "ballanar7" })
      .then((response) => {
        let { body, status } = response;

        expect(status).toBe(200);
        expect(body).toHaveProperty("access_token", expect.any(String));
        expect(body).toHaveProperty("id", expect.any(Number));
        done();
      })
      .catch((err) => {
        console.log(err);
        done();
      });
  });

  it("test login: email/password invalid", function (done) {
    request(app)
      .post("/users/login")
      .send({ email: "b4s4r4@gmail.com", password: "ballanas7" })
      .then((response) => {
        let { body, status } = response;

        expect(status).toBe(401);
        expect(body).toHaveProperty("msg", "Wrong password");
        done();
      })
      .catch((err) => {
        console.log(err);
        done();
      });
  });
});
