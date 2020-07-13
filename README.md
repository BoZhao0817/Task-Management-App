# MERN Todo app
this is a MERN to do list app (front-end React, backend Mongoose, Express, Node.js)


## Get Started
install node.js, download the project
```sh
git clone https://gitlab.com/BoZhao0817/mp4.git
```
now we install dependencies for frontend (`client` is the folder name)
```sh
cd mp4
cd client
yarn add axios react-datepicker react-dom react-router-dom
```
now we install dependencies for backend (`root folder`)
```sh
cd ../
yarn add axios react-datepicker body-parser
yarrn add mongoose cors dotenv express
npm install --save-dev concurrently nodemon
```
concurrently and nodemon dependencies looks like this in package.json (`root folder`)
```sh
"devDependencies": {
    "concurrently": "^5.2.0",
    "nodemon": "^2.0.3"
  }
```
after adding dependencies, your package.json should be like this but not the same (there are some unused dependencies in my code)
```sh
{
  "name": "mp4",
  "version": "1.0.0",
  "description": "to do list",
  "main": "server.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "server": "nodemon server.js",
    "client": "npm start --prefix client",
    "dev": "concurrently \"npm run server\" \"npm run client\""
  },
  "dependencies": {
    "body-parser": "^1.19.0",
    "bootstrap": "^4.4.1",
    "concurrently": "^5.2.0",
    "cors": "^2.8.5",
    "dotenv": "^8.2.0",
    "ejs": "^3.1.2",
    "express": "^4.17.1",
    "moment": "^2.25.3",
    "mongojs": "^3.1.0",
    "mongoose": "^5.9.12",
    "react-datepicker": "^2.14.1",
    "uuid": "^8.0.0"
  },
  "devDependencies": {
    "concurrently": "^5.2.0",
    "nodemon": "^2.0.3"
  }
}
```
NOTE: you can easily use npm install

after that, in root folder (`mp4`), add your database config, create `.env` file
```sh
touch .env
```
```sh
/**
 * Connection URI. Update <username>, <password>, and <your-cluster-url> to reflect your cluster.
 * See https://docs.mongodb.com/ecosystem/drivers/node/ for more details
 */
ATLAS_URI="mongodb+srv://<username>:<password>@<your-cluster-url>/test?retryWrites=true&w=majority";
```

now we can run our project (`in root folder mp4`)
```sh
npm run dev
```



### TODO


- [x] show to do list
- [x] create a new to do 
- [x] edit the task
- [x] delete the complete task
- [x] create online DB using mongoose
- [x] create simple API to manage the tasks
- [ ] format the time
- [ ] mark the task as  `completed` but do not delete the task 



### Demo

here are some images of the projects

this is the todo list

![Screenshot](todolist.png)

this is add to do list

![Screenshot](add.png)

this is edit to do list

![Screenshot](edit.png)


---------------------------------------**still working on it**------------------------------------










