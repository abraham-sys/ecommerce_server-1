# POG Gaming Store API

## **SHOW ALL CATEGORIES**

LoggedIn _User(all roles)_ get all _Categories_.

- **URL**

  /categories

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
            "id": 1,
            "name": "VideoGame",
            "createdAt": "2020-11-17T13:35:00.147Z",
            "updatedAt": "2020-11-17T13:35:00.147Z"
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
          url: '/categories',
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

## **ADD CATEGORY**

LoggedIn _User (role: admin)_ add a _Category_.

- **URL**

  /categories

- **Method:**

  `POST`

- **URL Params**

  **Required:**

  None

- **Data Params**

  `{ name=[string] }`

- **Success Response:**

  - **Code:** 201 <br />
    **Content Example:** `{ msg: "A new category is added and ready to be used!" }`

- **Error Response:**

  - **Code:** 400 BAD REQUEST <br />
    **Content:** `{ msg : "Don't empty category name" } / { msg : "Category must only contain letters and not contain spaces" } / { msg : "That category is already exist" } `

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
          url: '/categories',
          method: 'post',
          headers: {
            access_token: token
          },
          data: {
            name
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