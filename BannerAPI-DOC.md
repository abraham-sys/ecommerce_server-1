# POG Gaming Store API

## **SHOW ALL BANNERS**

LoggedIn _User(all roles)_ get all _Banners_.

- **URL**

  /banners

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
            "id": 2,
            "title": "Woman and Yokai",
            "status": "stimulator",
            "image_url": "https://image8.uhdpaper.com/wallpaper-hd/fantasy-japanese-demon-yokai-art-uhdpaper.com-hd-8.1406.jpg",
            "createdAt": "2020-11-17T13:35:00.173Z",
            "updatedAt": "2020-11-17T13:35:00.173Z"
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
          url: '/banners',
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

## **ADD BANNER**

LoggedIn _User (role: admin)_ add a _Banner_.

- **URL**

  /banners

- **Method:**

  `POST`

- **URL Params**

  **Required:**

  None

- **Data Params**

  `{ title=[string], status=[string] **must be one of the followings: stimulator or main or reminder**, image_url=[integer] }`

- **Success Response:**

  - **Code:** 201 <br />
    **Content Example:** `{ msg: "Banner is successfully created" }`

- **Error Response:**

  - **Code:** 400 BAD REQUEST <br />
    **Content:** `{ msg : "Fill the banner title" } / { msg : "Fill the banner status" } / { msg : "Status should only contain one of the followings: stimulator or main or reminder" } / { msg : "Fill the image_url" } / { msg : "Put a valid url for image section" } `

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
          url: '/banners',
          method: 'post',
          headers: {
            access_token: token
          },
          data: {
            title,
            status,
            image_url
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

## **GET A BANNER **

LoggedIn _User (role:admin)_ get his/her _Banner_ based on its 'id'.

- **URL**

  /banners/:id

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
            "id": 2,
            "title": "Woman and Yokai",
            "status": "stimulator",
            "image_url": "https://image8.uhdpaper.com/wallpaper-hd/fantasy-japanese-demon-yokai-art-uhdpaper.com-hd-8.1406.jpg",
            "createdAt": "2020-11-17T13:35:00.173Z",
            "updatedAt": "2020-11-17T13:35:00.173Z"
          }`

- **Error Response:**

  - **Code:** 401 UNAUTHORIZED <br />
    **Content:** `{msg: "Authentication failed"} `

  OR

  - **Code:** 404 NOT FOUND <br />
    **Content:** `{msg: "Banner not found"} `

  OR

  - **Code:** 500 INTERNAL SERVER ERROR <br />
    **Content:** `{ msg : "Internal Server Error" }`

- **Sample Call (using axios):**

  ```javascript
  axios({
          url: '/banners/id',
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

## **UPDATE A BANNER **

LoggedIn _User (role: admin)_ update his/her _Banner_ based on its 'id'.

- **URL**

  /banners/:id

- **Method:**

  `PUT`

- **URL Params**

  **Required:**

  `id=[integer]`

- **Data Params**

  None

- **Success Response:**

  - **Code:** 201 <br />
    **Content Example:** `{msg: Banner is successfully updated!}`

- **Error Response:**

  - **Code:** 400 BAD REQUEST <br />
    **Content:** `{ msg : "Fill the banner title" } / { msg : "Fill the banner status" } / { msg : "Status should only contain one of the followings: stimulator or main or reminder" } / { msg : "Fill the image_url" } / { msg : "Put a valid url for image section" } `
  
  OR

  - **Code:** 401 UNAUTHORIZED <br />
    **Content:** `{msg: "Authentication failed"} `

  OR

  - **Code:** 404 NOT FOUND <br />
    **Content:** `{msg: "Banner not found"} `

  OR

  - **Code:** 500 INTERNAL SERVER ERROR <br />
    **Content:** `{ msg : "Internal Server Error" }`

- **Sample Call (using axios):**

  ```javascript
  axios({
          url: '/banners/id',
          method: 'put',
          headers: {
            access_token: token
          },
          data: {
            title,
            status,
            image_url
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

## **DELETE A BANNER **

LoggedIn _User (role: admin)_ delete his/her _Banner_ based on its 'id'.

- **URL**

  /banners/:id

- **Method:**

  `DELETE`

- **URL Params**

  **Required:**

  `id=[integer]`

- **Data Params**

  None

- **Success Response:**

  - **Code:** 201 <br />
    **Content Example:** `{msg: Banner is successfully deleted!}`

- **Error Response:**

  - **Code:** 401 UNAUTHORIZED <br />
    **Content:** `{msg: "Authentication failed"} `

  OR

  - **Code:** 404 NOT FOUND <br />
    **Content:** `{msg: "Banner not found"} `

  OR

  - **Code:** 500 INTERNAL SERVER ERROR <br />
    **Content:** `{ msg : "Internal Server Error" }`

- **Sample Call (using axios):**

  ```javascript
   axios({
          url: '/banners/id',
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
