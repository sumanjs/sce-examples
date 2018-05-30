#!/usr/bin/env python
# -*- coding: utf-8 -*-

import pytest
from python_basic.skeleton import fib

__author__ = "Olegzandr VD"
__copyright__ = "Olegzandr VD"
__license__ = "mit"


def test_fib():
    assert fib(1) == 1
    assert fib(2) == 1
    assert fib(7) == 13
    with pytest.raises(AssertionError):
        fib(-10)
