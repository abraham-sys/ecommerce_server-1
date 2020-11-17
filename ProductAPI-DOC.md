# POG Gaming Store API

## **SHOW ALL PRODUCTS**

LoggedIn _User(all roles)_ get all _Products_ (regardless of whose _Product_ it is).

- **URL**

  /products

- **Method:**

  `GET`

- **URL Params**

  **Required:**

  None

- **Data Params**

  None

- **Success Response:**

  - **Code:** 200 <br />
    **Content Example:** `{
            "id": 14,
            "name": "Assassins Creed Origins",
            "image_url": "https://images-na.ssl-images-amazon.com/images/I/81MztoQMa8L._AC_SL1500_.jpg",
            "price": 350000,
            "stock": 10,
            "createdAt": "2020-11-17T13:35:00.177Z",
            "updatedAt": "2020-11-17T13:35:00.177Z",
            "CategoryId": 1,
            "UserId": 5,
            "User": {
                "id": 5,
                "email": "admin@mail.com",
                "role": "admin",
                "createdAt": "2020-11-11T15:51:44.606Z",
                "updatedAt": "2020-11-11T15:51:44.606Z"
            },
            "Category": {
                "id": 1,
                "name": "VideoGame",
                "createdAt": "2020-11-17T13:35:00.147Z",
                "updatedAt": "2020-11-17T13:35:00.147Z"
            }
        }, dst..`

- **Error Response:**

  - **Code:** 401 UNAUTHORIZED <br />
    **Content:** `{msg: "Authentication failed"} `

  OR

  - **Code:** 500 INTERNAL SERVER ERROR <br />
    **Content:** `{ msg : "Internal Server Error" }`

- **Sample Call (using axios):**

  ```javascript
   axios({
          url: '/products',
          method: 'get',
          headers: {
            access_token: token
          }
        })
        .then(({
          response
        }) => {
          console.log(response)
        })
        .catch(err => {
          console.log(err)
        })
  ```

## **ADD PRODUCT**

LoggedIn _User (role: admin)_ add a _Product_.

- **URL**

  /products

- **Method:**

  `POST`

- **URL Params**

  **Required:**

  None

- **Data Params**

  `{ name=[string], image_url=[string], price=[integer], stock=[integer], Category=[string] }`

- **Success Response:**

  - **Code:** 201 <br />
    **Content Example:** `{ msg: "Product is successfully created" }`

- **Error Response:**

  - **Code:** 400 BAD REQUEST <br />
    **Content:** `{ msg : "Fill the product name" } / { msg : "Fill the image_url" } / { msg : "Put a valid url for image_url" } / { msg : "Fill the price" } / { msg : "Do you want to be rich or not" / { msg : "Fill the stock" } / { msg : "A rich man doesn't sell nothin" } `

  OR

  - **Code:** 401 NOT AUTHORIZED <br />
    **Content:** `{ msg : "Authentication failed" } `

  OR

  - **Code:** 401 NOT AUTHORIZED <br />
    **Content:** `{ msg : "Your away from the app for too long.. Please relogin" } `

  OR

  - **Code:** 500 INTERNAL SERVER ERROR <br />
    **Content:** `{ msg : "Internal Server Error" }`

- **Sample Call (using axios):**

  ```javascript
   axios({
          url: '/products',
          method: 'post',
          headers: {
            access_token: token
          },
          data: {
            name,
            image_url,
            price,
            stock,
            category
          }
        })
        .then(({
          response
        }) => {
          console.log(response)
        })
        .catch(err => {
          console.log(err)
        })
  ```

## **GET A PRODUCT **

LoggedIn _User (role:admin)_ get his/her _Product_ based on its 'id'.

- **URL**

  /products/:id

- **Method:**

  `GET`

- **URL Params**

  **Required:**

  `id=[integer]`

- **Data Params**

  None

- **Success Response:**

  - **Code:** 201 <br />
    **Content Example:** `{
            "id": 14,
            "name": "Assassins Creed Origins",
            "image_url": "https://images-na.ssl-images-amazon.com/images/I/81MztoQMa8L._AC_SL1500_.jpg",
            "price": 350000,
            "stock": 10,
            "createdAt": "2020-11-17T13:35:00.177Z",
            "updatedAt": "2020-11-17T13:35:00.177Z",
            "CategoryId": 1,
            "UserId": 5,
            "User": {
                "id": 5,
                "email": "admin@mail.com",
                "role": "admin",
                "createdAt": "2020-11-11T15:51:44.606Z",
                "updatedAt": "2020-11-11T15:51:44.606Z"
            },
            "Category": {
                "id": 1,
                "name": "VideoGame",
                "createdAt": "2020-11-17T13:35:00.147Z",
                "updatedAt": "2020-11-17T13:35:00.147Z"
            }
        }`

- **Error Response:**

  - **Code:** 401 UNAUTHORIZED <br />
    **Content:** `{msg: "Authentication failed"} `

  OR

  - **Code:** 404 NOT FOUND <br />
    **Content:** `{msg: "Product not found"} `

  OR

  - **Code:** 500 INTERNAL SERVER ERROR <br />
    **Content:** `{ msg : "Internal Server Error" }`

- **Sample Call (using axios):**

  ```javascript
  axios({
          url: '/products/id',
          method: 'get',
          headers: {
            access_token: token
          }
        })
        .then(({
          response
        }) => {
          console.log(response)
        })
        .catch(err => {
          console.log(err)
        })
  ```

## **UPDATE A PRODUCT **

LoggedIn _User (role: admin)_ update his/her _Product_ based on its 'id'.

- **URL**

  /products/:id

- **Method:**

  `PUT`

- **URL Params**

  **Required:**

  `id=[integer]`

- **Data Params**

  None

- **Success Response:**

  - **Code:** 201 <br />
    **Content Example:** `{msg: Product is successfully updated!}`

- **Error Response:**

  - **Code:** 400 BAD REQUEST <br />
    **Content:** `{ msg : "Fill the product name" } / { msg : "Fill the image_url" } / { msg : "Put a valid url for image_url" } / { msg : "Fill the price" } / { msg : "Do you want to be rich or not" / { msg : "Fill the stock" } / { msg : "A rich man doesn't sell nothin" } `
  
  OR

  - **Code:** 401 UNAUTHORIZED <br />
    **Content:** `{msg: "Authentication failed"} `

  OR

  - **Code:** 404 NOT FOUND <br />
    **Content:** `{msg: "Product not found"} `

  OR

  - **Code:** 500 INTERNAL SERVER ERROR <br />
    **Content:** `{ msg : "Internal Server Error" }`

- **Sample Call (using axios):**

  ```javascript
  axios({
          url: '/products/id',
          method: 'put',
          headers: {
            access_token: token
          },
          data: {
            name,
            image_url,
            price,
            stock,
            category
          }
        })
        .then(({
          response
        }) => {
          console.log(response)
        })
        .catch(err => {
          console.log(err)
        })
  ```

## **DELETE A PRODUCT **

LoggedIn _User (role: admin)_ delete his/her _Product_ based on its 'id'.

- **URL**

  /products/:id

- **Method:**

  `DELETE`

- **URL Params**

  **Required:**

  `id=[integer]`

- **Data Params**

  None

- **Success Response:**

  - **Code:** 201 <br />
    **Content Example:** `{msg: Product is successfully deleted!}`

- **Error Response:**

  - **Code:** 401 UNAUTHORIZED <br />
    **Content:** `{msg: "Authentication failed"} `

  OR

  - **Code:** 404 NOT FOUND <br />
    **Content:** `{msg: "Product not found"} `

  OR

  - **Code:** 500 INTERNAL SERVER ERROR <br />
    **Content:** `{ msg : "Internal Server Error" }`

- **Sample Call (using axios):**

  ```javascript
   axios({
          url: '/products/id',
          method: 'delete',
          headers: {
            access_token: token
          }
        })
        .then(({
          response
        }) => {
          console.log(response)
        })
        .catch(err => {
          console.log(err)
        })
  ```
