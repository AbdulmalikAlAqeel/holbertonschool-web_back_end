#!/usr/bin/env python3
"""
This module contains a helper function for calculating pagination indexes.
"""
from typing import Tuple


def index_range(page: int, page_size: int) -> Tuple[int, int]:
    """
    Calculate the start and end indexes for a given page and page_size.

    Args:
        page (int): The 1-indexed current page number.
        page_size (int): The number of items per page.

    Returns:
        Tuple[int, int]: A tuple containing the start index and end index.
    """
    # Calculate the starting index (0-indexed for Python lists)
    start_index: int = (page - 1) * page_size

    # Calculate the ending index
    end_index: int = page * page_size

    return (start_index, end_index)
