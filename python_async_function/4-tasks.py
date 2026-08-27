#!/usr/bin/env python3
"""
Module to execute multiple task_wait_random coroutines concurrently.
"""
import asyncio
from typing import List

task_wait_random = __import__('3-tasks').task_wait_random


async def task_wait_n(n: int, max_delay: int) -> List[float]:
    """
    Spawn task_wait_random n times with specified max_delay.

    Args:
        n (int): The number of times to spawn task_wait_random.
        max_delay (int): Maximum delay for task_wait_random.

    Returns:
        List[float]: List of delays in ascending order of completion.
    """
    delays: List[float] = []

    # 1. Call task_wait_random to generate Task objects
    tasks = [task_wait_random(max_delay) for _ in range(n)]

    # 2. Gather results from fastest to slowest
    for task in asyncio.as_completed(tasks):
        delay = await task
        delays.append(delay)

    return delays
