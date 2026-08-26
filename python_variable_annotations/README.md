# Python - Variable Annotations

This project covers the use of type annotations in Python 3. Type annotations allow specifying expected types for function arguments and return values, improving code readability, maintenance, and enabling static analysis with tools like `mypy`.

## Learning Objectives

- Understand type annotations in Python 3.
- Use type annotations to specify function signatures and variable types.
- Understand the concept of duck typing.
- Validate code type consistency using `mypy`.

## Requirements

- Allowed editors: `vi`, `vim`, `emacs`.
- All files are interpreted/compiled on Ubuntu 20.04 LTS using `python3` (version 3.9).
- All files end with a new line.
- The first line of all files is exactly `#!/usr/bin/env python3`.
- Code strictly follows the `pycodestyle` style guidelines (version 2.5.).
- All files are executable (`chmod +x`).
- All modules, classes, and functions have valid docstrings explaining their purpose.

## Tasks

### 0. Basic annotations - add
Write a type-annotated function `add` that takes a `float` `a` and a `float` `b` as arguments and returns their sum as a `float`.

- **File:** `0-add.py`
- **Testing:** Execute `./0-main.py`

### 1. Basic annotations - concat
Write a type-annotated function `concat` that takes a string `str1` and a string `str2` as arguments and returns a concatenated string.

- **File:** `1-concat.py`
- **Testing:** Execute `./1-main.py`

### 2. Basic annotations - floor
Write a type-annotated function `floor` which takes a `float` `n` as argument and returns the floor of the float.

- **File:** `2-floor.py`
- **Testing:** Execute `./2-main.py`

### 3. Basic annotations - to string
Write a type-annotated function `to_str` that takes a `float` `n` as argument and returns the string representation of the float.

- **File:** `3-to_str.py`
- **Testing:** Execute `./3-main.py`

### 4. Define variables
Define and annotate the variables `a`, `pi`, `i_understand_annotations`, and `school` with their specified initial values.

- **File:** `4-define_variables.py`
- **Testing:** Execute `./4-main.py`

### 5. Complex types - list of floats
Write a type-annotated function `sum_list` which takes a list `input_list` of floats as argument and returns their sum as a float.

- **File:** `5-sum_list.py`
- **Testing:** Execute `./5-main.py`

### 6. Complex types - mixed list
Write a type-annotated function `sum_mixed_list` which takes a list `mxd_lst` of integers and floats and returns their sum as a float.

- **File:** `6-sum_mixed_list.py`
- **Testing:** Execute `./6-main.py`
