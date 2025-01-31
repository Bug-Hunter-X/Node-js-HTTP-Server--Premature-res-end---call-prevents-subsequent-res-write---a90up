# Node.js HTTP Server: Premature `res.end()` Error

This repository demonstrates a common error in Node.js HTTP servers: prematurely calling `res.end()` before writing all the desired response data.  This leads to incomplete or missing responses sent to the client.

The `bug.js` file contains the erroneous code.  The `bugSolution.js` file provides the corrected implementation.

## How to Reproduce

1. Clone this repository.
2. Navigate to the directory.
3. Run `node bug.js`.
4. Make a request to `http://localhost:3000`. You'll observe an empty response.
5. Then run `node bugSolution.js` and make another request. You will receive the full response.

## Solution

The solution involves ensuring that all `res.write()` calls are completed before calling `res.end()`.  The corrected code is provided in `bugSolution.js`.