#!/usr/bin/env python3
"""
Module to execute multiple coroutines at the same time using asyncio.
"""
import asyncio
from typing import List

wait_random = __import__('0-basic_async_syntax').wait_random


async def wait_n(n: int, max_delay: int) -> List[float]:
    """
    Spawn wait_random n times with max_delay and return delays in ascending order.

    Args:
        n (int): The number of times to spawn wait_random.
        max_delay (int): Maximum delay for each wait_random call.

    Returns:
        List[float]: List of delays in ascending order of completion.
    """
    delays: List[float] = []
    tasks = [wait_random(max_delay) for _ in range(n)]

    for task in asyncio.as_completed(tasks):
        delay = await task
        delays.append(delay)

    return delays
