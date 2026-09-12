# NoSQL - MongoDB

## Description
This project covers NoSQL databases, specifically focusing on MongoDB. It introduces basic database management, querying, CRUD operations, indexing, and integrating MongoDB with Python using the `pymongo` library.

## Requirements
* All files are executed on **Ubuntu 20.04 LTS / 22.04 LTS** using MongoDB (v3.6+ or v4.4).
* The first line of all Mongo shell script files must be a comment starting with `//`: `// my comment`.
* All files must end with a new line.
* A `README.md` file at the root of the `NoSQL` project folder is mandatory.
* Code style and length will be verified using standard checkers.

---

## Tasks

### 0. List all databases
* **File:** `0-list_databases`
* **Directory:** `NoSQL`
* **Description:** Write a MongoDB script that lists all databases present on the server.

#### Script Content (`0-list_databases`)
```javascript
// Script that lists all databases in MongoDB
show dbs


### 1. Create a database
* **File:** `1-use_or_create_database`
* **Description:** Write a MongoDB script that creates or switches to the database `my_db`.

#### Usage
```bash
cat 1-use_or_create_database | mongo


### 2. Insert document
* **File:** `2-insert`
* **Description:** Write a MongoDB script that inserts a document with attribute `name="Holberton school"` into the collection `school`. The database name is passed via the `mongo` command argument.

#### Usage
```bash
cat 2-insert | mongo my_db
