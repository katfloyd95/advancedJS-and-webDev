// CLIENTS & SERVERS

// Non Determinism

// Fundamentally, when we write out code in 1 file and don't do any Requests, such as calculating two numbers together, 
// our code is considered DETERMINISTIC. It is a very controlled environment

// When add these network Requests, the code becomes NONDETERMINISTIC, because, for example, we run our code twice, once it
// succeeds, and once it fails. 
// There can be two different behaviors for different runs, because there are so many different paths that can be taken 
// for NONDETERMINISTIC code.

// Example:
// There is always a rate limit to the amount of requests we can call (per hour for example), and this is an example of code
// being NONDETERMINISTIC

// Callback functions are functions that run in different cases, depending on what happens in the request.
// We will write these. We will have a Success Function, an Error Function, a way to handle the data that we get back or 
// lack thereof, as well as notifying the user if there is some sort of error.