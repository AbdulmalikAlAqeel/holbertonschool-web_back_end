# Pagination

## Description
This project covers data pagination concepts in Python, focusing on simple page/page_size parameters, hypermedia metadata (HATEOAS), and deletion-resilient pagination strategies.

## Requirements
* All files are interpreted/compiled on Ubuntu 20.04 LTS using `python3` (version 3.9).
* All files end with a new line.
* The first line of all files is strictly `#!/usr/bin/env python3`.
* Code follows the `pycodestyle` style guide (version 2.5.*).
* All modules, classes, and functions are documented with descriptive docstrings.
* All functions are type-annotated.

## Tasks

### 0. Simple helper function
* **File:** `0-simple_helper_function.py`
* **Description:** Write a function named `index_range` that takes two integer arguments `page` and `page_size`.
* **Behavior:** Returns a tuple of size two containing a start index and an end index corresponding to the range of indexes to return in a list for those particular pagination parameters. Page numbers are 1-indexed.

#### Usage
```bash
$ cat 0-main.py
#!/usr/bin/env python3
"""
Main file
"""

index_range = __import__('0-simple_helper_function').index_range

res = index_range(1, 7)
print(type(res))
print(res)

res = index_range(page=3, page_size=15)
print(type(res))
print(res)

$ ./0-main.py
<class 'tuple'>
(0, 7)
<class 'tuple'>
(30, 45)


### 1. Simple pagination
* **File:** `1-simple_pagination.py`
* **Description:** Implement a method named `get_page` in `Server` class that takes integer arguments `page` (default 1) and `page_size` (default 10). Uses `assert` to verify integer values > 0 and `index_range` to return the appropriate list slice. Returns an empty list if out of range.


### 2. Hypermedia pagination
* **File:** `2-hypermedia_pagination.py`
* **Description:** Implement a `get_hyper` method that returns a dictionary containing pagination metadata: `page_size`, `page`, `data`, `next_page`, `prev_page`, and `total_pages`. Reuses `get_page` and uses `math.ceil` for total pages calculation.
