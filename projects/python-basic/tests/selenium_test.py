

import pytest
@pytest.mark.nondestructive
def test_nondestructive(selenium):
    selenium.get('http://www.example.com')