#!/usr/bin/env python3
"""
Module that provides a function to calculate element lengths.
"""
from typing import Iterable, List, Sequence, Tuple


def element_length(lst: Iterable[Sequence]) -> List[Tuple[Sequence, int]]:
    """
    Calculate the length of each element in an iterable.

    Args:
        lst (Iterable[Sequence]): An iterable containing sequence elements.

    Returns:
        List[Tuple[Sequence, int]]: A list of tuples containing each element
                                    and its calculated length.
    """
    return [(i, len(i)) for i in lst]
