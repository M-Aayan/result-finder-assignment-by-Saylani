# result-finder-assignment-by-Saylani

How It Performs

User Interaction:
When the page is loaded or a button is clicked, the user is prompted to input their total marks and obtained marks through the prompt() function.
The user inputs their scores as directed.

Result Evaluation:
JavaScript uses conditional statements to evaluate the input and determine:
The percentage score.
Whether the user has passed or failed.
A grade or performance message based on predefined criteria.

Feedback Display:
The calculated result is shown using the alert() function, providing immediate feedback in the form of a message like:
“You passed with a percentage of 85%!”
“You failed. Better luck next time.”

Error Handling:
The program handles invalid inputs (e.g., non-numeric values or scores greater than total marks) by displaying appropriate error messages.

How It Was Made

HTML:
Provides the structure for the tool, such as a button labeled "Find Result" to initiate the process.
Keeps the interface simple and intuitive.

CSS:
Styles the button and layout for a clean appearance.
Enhances usability with hover effects and colors matching the theme.
JavaScript:

Prompt for Input: Prompts the user to enter total marks and obtained marks.

Calculations:
Percentage is calculated using the formula:
Percentage=(Obtained Marks/Total Marks)×100

Conditional statements check if the user has passed or failed and assign grades.

Display Result: The result (e.g., percentage, pass/fail status, and grade) is shown using alert().

Validation: Ensures valid numeric input and logical score relationships (e.g., obtained marks ≤ total marks).
