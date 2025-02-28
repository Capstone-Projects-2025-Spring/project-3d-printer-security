# These tests are performed by Shafiq Rahman

import unittest

import sys
import os

# Add the helloWorld src directory to Python's module search path
sys.path.insert(0, os.path.abspath(os.path.join(os.path.dirname(__file__), '../src')))

from helloWorld import HelloWorld 

class TestHelloWorld(unittest.TestCase):
    # Unit tests for HelloWorld class.
    #All tests check if the text is correctly printed with the addition of punctuation.

    def test_reverse_text(self):
        testText = "Hello World"  # Words without the !
        hw = HelloWorld(testText)
        self.assertEqual(hw.get_text(), testText + "!")

    def test_add_exclamation(self):
        testText = "Microsoft is popular"  # Words without the !
        hw = HelloWorld(testText)
        self.assertEqual(hw.get_text(), testText + "!")

if __name__ == "__main__":
    unittest.main()
