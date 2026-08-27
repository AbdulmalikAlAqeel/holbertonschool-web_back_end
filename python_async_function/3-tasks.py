#!/usr/bin/env python3
"""
Module to create and return an asyncio.Task from wait_random.
"""
import asyncio

wait_random = __import__('0-basic_async_syntax').wait_random


def task_wait_random(max_delay: int) -> asyncio.Task:
    """
    Take an integer max_delay and return an asyncio.Task.

    Args:
        max_delay (int): Maximum delay for wait_random.

    Returns:
        asyncio.Task: Task object wrapping wait_random.
    """
    return asyncio.create_task(wait_random(max_delay))
