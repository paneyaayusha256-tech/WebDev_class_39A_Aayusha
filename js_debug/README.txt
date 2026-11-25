JavaScript Debugging Practice

Files ending in _wrong.js contain the original buggy code.
Files ending in _correct.js contain the fixed code.

Run a file with:
node q1_correct.js

Fix summary:
1. message was declared inside the function, so log it inside the function.
2. Numbers do not have toUpperCase(); convert the input to a string first.
3. Add the missing closing parenthesis to the first Final Grade console.log.
4. Add the missing closing parenthesis to the second calculateBill call. Validate inputs before calculating.
5. Fix the misspelled variable netSallary to netSalary.
6. Add a base case so recursion stops. This version prints 5 down to 0.
