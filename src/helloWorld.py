class HelloWorld:
    def __init__(self, text: str):
        #Stores characters in a list
        self.char_list = []

        # text = text.upper()  # Convert text to uppercase

        # Loop through forward but insert each character at the start of the list
        for char in text:
            self.char_list.insert(0, char)  # This will produce a mistake for the test case.

    def get_combined_string(self) -> str:
        """Combines characters into a string, ensures it ends with '!', and returns it."""
        combined_text = "".join(self.char_list)
        return combined_text if combined_text.endswith("!") else combined_text + "!"


# Example usage
hw = HelloWorld("Hello World")
print(hw.get_combined_string())  # Output: words with ! at the end
