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


### 3. All documents
* **File:** `3-all`
* **Description:** Write a MongoDB script that lists all documents in the collection `school`. The database name is passed as an option of the `mongo` command.

#### Usage
```bash
cat 3-all | mongo my_db


### 4. All matches
* **File:** `4-match`
* **Description:** Write a MongoDB script that lists all documents with `name="Holberton school"` in the collection `school`. The database name is passed as an option of the `mongo` command.

#### Usage
```bash
cat 4-match | mongo my_db


### 5. Count
* **File:** `5-count`
* **Description:** Write a MongoDB script that displays the number of documents in the collection `school`. The database name is passed as an option of the `mongo` command.

#### Usage
```bash
cat 5-count | mongo my_db


### 6. Update
* **File:** `6-update`
* **Description:** Write a MongoDB script that adds an attribute `address` with the value `"972 Mission street"` to all documents with `name="Holberton school"` in the collection `school`.

#### Usage
```bash
cat 6-update | mongo my_db


### 7. Delete by match
* **File:** `7-delete`
* **Description:** Write a MongoDB script that deletes all documents with `name="Holberton school"` in the collection `school`.

#### Usage
```bash
cat 7-delete | mongo my_db


### 8. List all documents in Python
* **File:** `8-all.py`
* **Prototype:** `def list_all(mongo_collection):`
* **Description:** Write a Python function that lists all documents in a collection using `pymongo`. Returns an empty list if no document is in the collection.

#### Usage
```bash
./8-main.py


### 9. Insert a document in Python
* **File:** `9-insert_school.py`
* **Prototype:** `def insert_school(mongo_collection, **kwargs):`
* **Description:** Write a Python function that inserts a new document in a collection based on `kwargs` using `pymongo`. Returns the new `_id`.

#### Usage
```bash
./9-main.py


### 10. Change school topics
* **File:** `10-update_topics.py`
* **Prototype:** `def update_topics(mongo_collection, name, topics):`
* **Description:** Write a Python function that changes all topics of a school document based on the name using `pymongo`.

#### Usage
```bash
./10-main.py


### 11. Where can I learn Python?
* **File:** `11-schools_by_topic.py`
* **Prototype:** `def schools_by_topic(mongo_collection, topic):`
* **Description:** Write a Python function that returns the list of school having a specific topic using `pymongo`.

#### Usage
```bash
./11-main.py


### 12. Log stats
* **File:** `12-log_stats.py`
* **Description:** Write a Python script that provides stats about Nginx logs stored in MongoDB (total logs, methods counts, and GET `/status` count).

#### Usage
```bash
./12-log_stats.py
