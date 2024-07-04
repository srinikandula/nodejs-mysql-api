# nodejs-mysql-api
NodeJs Mysql authentication using Passport(username, password)


### Tech Stack - 
* **Language** - NodeJS / Javascript
* **Database** - MySQL

### Code Structure - 
* **node_modules** - All required third party node modules will reside here. This folder will be automatically created, once **npm install** command is executed.
* **routes** - All api route files will reside here
* **models** - All schemas files will reside here
* **controllers** - All Logic files will reside here
* **index.js** - This wil be entry point for node js api application
* **package.json** - All required node modules, project info, scripts commands details will be stored here.
* * **config.json** - This file will not be pushed to git due to security and Create properties file in user home directory with the below content
### config.json - 
```
{
  "NODE_ENV": "development",
  "frontend": "angular",
  "mysql": {
     "DB_HOST": "DB_HOST",
    "DB_USER": "DB_USER",
    "DB_PASS": "DB_PASS",
    "DB_PORT": "DB_PORT",
    "DB_NAME": "DB_NAME"
  },
  "HOST": "localhost",
  "PORT": "3040"  
}

```

