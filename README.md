# NgSafeEval

NgSafeEval is a angular package designed to provide a secure and controlled environment for executing JavaScript code dynamically within a specified context. Built as a wrapper around the built-in eval function, ngSafeEval ensures that only strings with a defined context are executed, enhancing the security and predictability of your application.

## Key Features

- Context-Specific Execution: Executes JavaScript code strings only within a specified context, preventing unauthorized access to the global scope or other unintended side effects.
- Flexible Context Definition: Allows you to define the context in which the code will be executed, ensuring that variables and functions within the code string are scoped correctly.
- Enhanced Security: Reduces the risk of executing malicious code by confining the execution environment to a predefined context.
- Easy Integration: Designed to integrate seamlessly into existing Node.js projects, with a simple API that makes it easy to use within your applications.

## Usage Example

```
const SafeEvalWrapper = require('safe-eval-wrapper');

// Define the context in which the code will be executed 
const context = { variable1: 'Hello', variable2: 'World' };

// JavaScript code string to be executed 
const codeString = 'variable1 + " " + variable2';

//   Execute the code string within the specified context 
const result = SafeEvalWrapper.execute(codeString, context);
    console.log(result); // Outputs: Hello World Installation:
```

## Installation Process

To install NgSafeEval, simply run the following command in your project directory:
`npm install NgSafeEval`

While SafeEvalWrapper provides a secure way to execute dynamic code, it's essential to use it judiciously. Always validate and sanitize input strings to prevent injection attacks and ensure that the context is defined as narrowly as possible to limit the scope of execution.

SafeEvalWrapper is a powerful tool for applications that require dynamic code execution, offering a balance between flexibility and security. With its focus on controlled execution within a specified context, it helps developers build more secure and robust applications.

Repository: For more information, visit the official GitHub repository at github.com/yourusername/safe-eval-wrapper.
