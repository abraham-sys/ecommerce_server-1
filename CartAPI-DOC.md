# POG Gaming Store API

## **SHOW ALL ITEM IN CARTS**

LoggedIn _User(role: customer)_ get all _Carts_.

- **URL**

  /carts

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
            "id": 7,
            "quantity": 2,
            "status": false,
            "User": {
                "id": 7,
                "email": "cek@mail.com",
                "role": "customer",
                "createdAt": "2020-11-18T16:52:50.097Z",
                "updatedAt": "2020-11-18T16:52:50.097Z"
            },
            "Product": {
                "id": 22,
                "name": "PS 5",
                "image_url": "https://gamespot1.cbsistatic.com/uploads/screen_kubrick/1551/15511094/3756678-ps5-review-promothumb.jpg",
                "price": 6500000,
                "stock": 3,
                "createdAt": "2020-11-18T10:16:28.994Z",
                "updatedAt": "2020-11-18T10:16:28.994Z",
                "CategoryId": 2
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
          url: '/carts',
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

## **ADD AN ITEM IN CART**

LoggedIn _User (role: customer)_ add a _Banner_.

- **URL**

  /carts

- **Method:**

  `POST`

- **URL Params**

  **Required:**

  None

- **Data Params**

  `{ ProductId=[integer] }`

- **Success Response:**

  - **Code:** 201 <br />
    **Content Example:** `{ msg: "Item is successfully added to cart" } / { msg: "Quantity in cart is updated" }`

- **Error Response:**

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
          url: '/carts',
          method: 'post',
          headers: {
            access_token: token
          },
          data: {
            ProductId
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

## **UPDATE AN ITEM IN CART **

LoggedIn _User (role: admin)_ update his/her _Banner_ based on its 'id'.

- **URL**

  /carts/:id

- **Method:**

  `PUT`

- **URL Params**

  **Required:**

  `id=[integer]`

- **Data Params**

  `{marking=[string] must be 'min' or 'plus'}`

- **Success Response:**

  - **Code:** 201 <br />
    **Content Example:** `{msg: Cart quantity is updated!} / {msg: The quantity you asked for is beyond the stock limit!} / {msg: Cart item is deleted!} <this condition will happen if u decrement product below 1>` 

- **Error Response:**

  - **Code:** 401 UNAUTHORIZED <br />
    **Content:** `{msg: "Authentication failed"} `

  OR

  - **Code:** 404 NOT FOUND <br />
    **Content:** `{msg: "Cart not found"} `

  OR

  - **Code:** 500 INTERNAL SERVER ERROR <br />
    **Content:** `{ msg : "Internal Server Error" }`

- **Sample Call (using axios):**

  ```javascript
  axios({
          url: '/carts/id',
          method: 'put',
          headers: {
            access_token: token
          },
          data: {
            marking
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

## **DELETE AN ITEM IN CART **

LoggedIn _User (role: customer)_ delete his/her _Banner_ based on its 'id'.

- **URL**

  /carts/:id

- **Method:**

  `DELETE`

- **URL Params**

  **Required:**

  `id=[integer]`

- **Data Params**

  None

- **Success Response:**

  - **Code:** 201 <br />
    **Content Example:** `{msg: Cart is successfully deleted!}`

- **Error Response:**

  - **Code:** 401 UNAUTHORIZED <br />
    **Content:** `{msg: "Authentication failed"} `

  OR

  - **Code:** 404 NOT FOUND <br />
    **Content:** `{msg: "Cart not found"} `

  OR

  - **Code:** 500 INTERNAL SERVER ERROR <br />
    **Content:** `{ msg : "Internal Server Error" }`

- **Sample Call (using axios):**

  ```javascript
   axios({
          url: '/carts/id',
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
