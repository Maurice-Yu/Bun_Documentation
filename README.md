# Intro to bun!
![download.png](/download.png)
## What is Bun
### Why use Bun?
```
STUFF HERE
```

### Differences between Bun and Node.js
```
stuff here
```

## Server Example

## React App Example
## How to convert your existing projects to use Bun

## Testing with bun!
### Intro to testing.
Bun provides a built in test runner that allows you to execute unit, integration and performance tests. Here are a list of the features the test runner ships with.
* JSX and Typescript compatiblity
* snapshot testing
* UI and DOM testing
* Preloading and watching scripts
### Writing Unit Tests.
It is easy to write unit tests in bun. First you need to import tests
`import { test } from "bun:test";`
then define a test by using
`test((funcarg1, funcarg2) => { expect(funcarg1+funcarg2).toBe(funcarg1+funcarg2);}
The expect.tobe is an example of an assert. This will determine if the test passes or fails. 

### Useful commands.

Run command.
* `bun test`
This runs all the tests you created
Useful flags.
* `--todo`
By marking tests with .todo you mark it as a regular test.
* `--only`
By marking test with .only you create a custom test suite that will exculsivly run

## Conclusion
```
A tech share for Bun js
```
