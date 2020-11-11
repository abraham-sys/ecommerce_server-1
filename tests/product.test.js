const request = require("supertest");
const app = require("../app");

let token = "";

beforeAll((done) => {
  request(app)
    .post("/users/login")
    .send({
      email: "b4s4r4@gmail.com",
      password: "ballanar7",
    })
    .then((response) => {
      token = response.body.access_token;
      done();
    })
    .catch((err) => {
      console.log(err);
      done();
    });
});

describe("Endpoint testing for GET /products", function () {
  it("test get products: success", function (done) {
    request(app)
      .get("/products")
      .set("access_token", token)
      .then((response) => {
        const { body, status } = response;
        expect(status).toEqual(200);
        expect(body.type).toBe("application/json");
        done();
      })
      .catch((err) => {
        console.log(err);
        done();
      });
  });

  it("test get products: failed", function (done) {
    request(app)
      .get("/products")
      .set("access_token", "not")
      .then((response) => {
        const { body, status } = response;
        expect(status).toEqual(401);
        expect(body).toHaveProperty("msg", "Authentication failed");
        done();
      })
      .catch((err) => {
        console.log(err);
        done();
      });
  });
});

describe("Endpoint testing for POST /products", function () {
  let product = {
    name: "kursi",
    image_url:
      "https://ecs7.tokopedia.net/img/cache/700/product-1/2018/10/2/40541972/40541972_5046f648-6962-4023-8911-dfece7afbd3f_800_800.jpg",
    price: 20000,
    stock: 10,
  };
  it("test add product: success", function (done) {
    request(app)
      .post("/products")
      .send(product)
      .set("access_token", token)
      .then((response) => {
        const { body, status } = response;
        expect(status).toEqual(201);
        expect(body).toHaveProperty("msg", "Product is successfully created");
        done();
      })
      .catch((err) => {
        console.log(err);
        done();
      });
  });

  it("test add product: failed", function (done) {
    request(app)
      .get("/products")
      .send(product)
      .set("access_token", "not")
      .then((response) => {
        const { body, status } = response;
        expect(status).toEqual(401);
        expect(body).toHaveProperty("msg", "Authentication failed");
        done();
      })
      .catch((err) => {
        console.log(err);
        done();
      });
  });

  it("test add product: validation error", function (done) {
    product.price = 0;
    request(app)
      .get("/products")
      .send(product)
      .set("access_token", token)
      .then((response) => {
        const { body, status } = response;
        expect(status).toEqual(400);
        expect(body).toHaveProperty("msg", "do you want to be rich or not?");
        done();
      })
      .catch((err) => {
        console.log(err);
        done();
      });
  });
});

describe("Endpoint testing for GET /products/:id", function () {
  it("test get certain product: success", function (done) {
    request(app)
      .post("/products/1")
      .set("access_token", token)
      .then((response) => {
        const { body, status } = response;
        expect(status).toEqual(200);
        expect(body.type).toBe("application/json");
        done();
      })
      .catch((err) => {
        console.log(err);
        done();
      });
  });

  it("test get product: failed", function (done) {
    request(app)
      .get("/products/1")
      .send(product)
      .set("access_token", "not")
      .then((response) => {
        const { body, status } = response;
        expect(status).toEqual(401);
        expect(body).toHaveProperty("msg", "Authentication failed");
        done();
      })
      .catch((err) => {
        console.log(err);
        done();
      });
  });

  it("test add product: validation error", function (done) {
    product.price = 0;
    request(app)
      .get("/products")
      .send(product)
      .set("access_token", token)
      .then((response) => {
        const { body, status } = response;
        expect(status).toEqual(400);
        expect(body).toHaveProperty("msg", "do you want to be rich or not?");
        done();
      })
      .catch((err) => {
        console.log(err);
        done();
      });
  });
});
