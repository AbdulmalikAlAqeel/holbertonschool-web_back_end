#!/usr/bin/env python3
"""
Module to create an asynchronous generator that produces random numbers.
"""
import asyncio
import random
from typing import AsyncGenerator


async def async_generator() -> AsyncGenerator[float, None]:
    """
    An asynchronous generator that loops 10 times, waits 1 second,
    and yields a random number between 0 and 10.
    """
    for _ in range(10):
        await asyncio.sleep(1)
        # Yield a random float between 0 and 10
        yield random.uniform(0, 10)
