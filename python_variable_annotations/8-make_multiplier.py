#!/usr/bin/env python3
"""
Module that provides a function to create a multiplier function.
"""
from typing import Callable


def make_multiplier(multiplier: float) -> Callable[[float], float]:
    """
    Create and return a function that multiplies a float by multiplier.

    Args:
        multiplier (float): The multiplier number.

    Returns:
        Callable[[float], float]: A function taking a float and returning float
    """
    def multiply_func(n: float) -> float:
        """Multiply a float by multiplier."""
        return n * multiplier

    return multiply_func
