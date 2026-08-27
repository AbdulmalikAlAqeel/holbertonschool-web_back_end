#!/usr/bin/env python3
"""
Module that provides an asynchronous coroutine for waiting a random time.
"""
import asyncio
import random


async def wait_random(max_delay: int = 10) -> float:
    """
    Wait for a random delay between 0 and max_delay seconds and return it.

    Args:
        max_delay (int): Maximum delay in seconds (default is 10).

    Returns:
        float: The actual delay time spent waiting.
    """
    delay: float = random.uniform(0, max_delay)
    await asyncio.sleep(delay)
    return delay
