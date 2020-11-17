# KANBAN

## **Show All Products**

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
        }`

- **Error Response:**

  - **Code:** 401 UNAUTHORIZED <br />
    **Content:** `{msg: "Authentication failed"} `

  OR

  - **Code:** 500 INTERNAL SERVER ERROR <br />
    **Content:** `{ msg : "Internal Server Error" }`

- **Sample Call:**

  ```javascript
  $.ajax({
    url: "/tasks",
    dataType: "json",
    type: "GET",
    success: function (r) {
      console.log(r);
    },
  });
  ```

## **Add Task**

LoggedIn _User_ add a _Task_.

- **URL**

  /tasks

- **Method:**

  `POST`

- **URL Params**

  **Required:**

  None

- **Data Params**

  `{ title=[string], description=[string], category=[string] }`

- **Success Response:**

  - **Code:** 201 <br />
    **Content Example:** `{ msg: "Task is successfully created" }`

- **Error Response:**

  - **Code:** 400 BAD REQUEST <br />
    **Content:** `{ msg : "Please fill the title" } / { msg : "Please fill the description" } / { msg : "Please fill the category" } `

  OR

  - **Code:** 401 NOT AUTHORIZED <br />
    **Content:** `{ msg : "Your away from the app for God knows how long! Please relogin!" } `

  OR

  - **Code:** 500 INTERNAL SERVER ERROR <br />
    **Content:** `{ msg : "Internal Server Error" }`

- **Sample Call:**

  ```javascript
  $.ajax({
    url: "/tasks",
    dataType: "json",
    data: {
      title: "your title",
      description: "your description",
      category: "your category",
    },
    type: "POST",
    success: function (r) {
      console.log(r);
    },
  });
  ```

## **GET A TASK **

LoggedIn _User_ get his/her _Task_ based on its 'id'.

- **URL**

  /tasks/:id

- **Method:**

  `GET`

- **URL Params**

  **Required:**

  `id=[integer]`

- **Data Params**

  None

- **Success Response:**

  - **Code:** 201 <br />
    **Content Example:** `{ "id": 4, "title": "KELARIN PROYEK", "description": "TANPA PAKE CLIENT", "category": "backlog", "UserId": 5, "createdAt": "2020-11-04T16:05:59.560Z", "updatedAt": "2020-11-04T16:05:59.560Z" }`

- **Error Response:**

  - **Code:** 401 UNAUTHORIZED <br />
    **Content:** `{msg: "Authentication failed"} `

  OR

  - **Code:** 404 NOT FOUND <br />
    **Content:** `{msg: "Task not found"} `

  OR

  - **Code:** 500 INTERNAL SERVER ERROR <br />
    **Content:** `{ msg : "Internal Server Error" }`

- **Sample Call:**

  ```javascript
  $.ajax({
    url: "/tasks/:id",
    dataType: "json",
    type: "GET",
    success: function (r) {
      console.log(r);
    },
  });
  ```

## **UPDATE A TASK **

LoggedIn _User_ update his/her _Task_ based on its 'id'.

- **URL**

  /tasks/:id

- **Method:**

  `PUT`

- **URL Params**

  **Required:**

  `id=[integer]`

- **Data Params**

  None

- **Success Response:**

  - **Code:** 201 <br />
    **Content Example:** `{msg: Task is successfully updated!}`

- **Error Response:**

  - **Code:** 401 UNAUTHORIZED <br />
    **Content:** `{msg: "Authentication failed"} `

  OR

  - **Code:** 404 NOT FOUND <br />
    **Content:** `{msg: "Task not found"} `

  OR

  - **Code:** 500 INTERNAL SERVER ERROR <br />
    **Content:** `{ msg : "Internal Server Error" }`

- **Sample Call:**

  ```javascript
  $.ajax({
    url: "/tasks/:id",
    dataType: "json",
    type: "PUT",
    success: function (r) {
      console.log(r);
    },
  });
  ```

## **DELETE A TASK **

LoggedIn _User_ delete his/her _Task_ based on its 'id'.

- **URL**

  /tasks/:id

- **Method:**

  `DELETE`

- **URL Params**

  **Required:**

  `id=[integer]`

- **Data Params**

  None

- **Success Response:**

  - **Code:** 201 <br />
    **Content Example:** `{msg: Task is successfully deleted!}`

- **Error Response:**

  - **Code:** 401 UNAUTHORIZED <br />
    **Content:** `{msg: "Authentication failed"} `

  OR

  - **Code:** 404 NOT FOUND <br />
    **Content:** `{msg: "Task not found"} `

  OR

  - **Code:** 500 INTERNAL SERVER ERROR <br />
    **Content:** `{ msg : "Internal Server Error" }`

- **Sample Call:**

  ```javascript
  $.ajax({
    url: "/tasks/:id",
    dataType: "json",
    type: "DELETE",
    success: function (r) {
      console.log(r);
    },
  });
  ```
