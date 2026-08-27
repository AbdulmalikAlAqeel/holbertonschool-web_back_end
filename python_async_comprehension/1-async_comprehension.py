#!/usr/bin/env python3
"""
Module to collect random numbers using async comprehension.
"""
from typing import List

async_generator = __import__('0-async_generator').async_generator


async def async_comprehension() -> List[float]:
    """
    Collect 10 random numbers using async comprehension over async_generator,
    then return the list of 10 random numbers.
    """
    return [i async for i in async_generator()]
