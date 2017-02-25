# JS-NodeJS-ExpressJS

A simple NodeJS, ExpressJS, MongoDb example projects

*  ExpressJS
*  Body-parser
*  ejs
*  express-validator
*  mongojs

---

## Installation

### Clone repository and install dependencies

via git and npm:

```
$ git clone https://github.com/cave3/JS-NodeJS-ExpressJS.git [my-app-name]

$ cd [my-app-name]

$ npm install
```

---

### Run MongoDB database

```
$mongod
```

OR as background process:
```
mongod --fork --logpath /usr/local/var/log/mongodb/mongod.log
```

### Create a "customerapp" database
```
$ mongo

$ use customerapp

$ db.createCollection('users');

$ db.users.insert([{first_name:"Steven", last_name:"Smith",email:"jdoe@yahoo.com"},{first_name:"Beth", last_name:"Smith",email:"bsmith@gmail.com"},{first_name:"Kevin", last_name:"Johnson",email:"kjohnson@gmail.com"}]);

```

---

### Run application via server

```
node app.js
``` 

OR 

```
nodemon
```

---