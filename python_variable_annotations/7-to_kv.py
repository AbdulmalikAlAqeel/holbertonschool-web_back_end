#!/usr/bin/env python3
"""
Module that provides a function to create a tuple from a string and a number.
"""
from typing import Tuple, Union


def to_kv(k: str, v: Union[int, float]) -> Tuple[str, float]:
    """
    Create a tuple with a string and the square of a given number as float.

    Args:
        k (str): The key string.
        v (Union[int, float]): The value number (int or float).

    Returns:
        Tuple[str, float]: A tuple containing k and the square of v as float.
    """
    return (k, float(v ** 2))
