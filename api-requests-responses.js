// API'S, REQUESTS, AND RESPONSES

// The front end and the back end communicate through the API

// When you enter google.com in the search bar, you are sending a REQUEST to a specific URL
// The front end initiates requests to the back end
// The API routes the request from the front end to the correct part of the back end that contains the requested HTML file
// The back end sends the requested data (RESPONSE) to the front end

// Specifically, when you want to access google.com, you are sending a GET REQUEST
// In return, you are recieving a [200] RESPONSE, which is called a STATUS CODE
// The 200 means that the Request was successful
// The Response has a "body" or "data" attached, can also be different types of files (JSON) or just objects with data

// Every RESPONSE comes with a STATUS CODE

// Status Codes:

// 2xx Success
// 200: Request was successful
// 201: Post Request was successful

// 3xx Redirection
// 301: Permanent redirect
// 302: Temporary redirect
// 304: Not modified

// 4xx Client Error
// 401: Unauthorized Error
// 403: Forbidden
// 404: Not found (URL does not exist)
// 405: Method not allowed

// 5xx Server Error
// 501: Not implemented
// 502: Bad gateway
// 503: Service Unavailable
// 504: Gateway timeout

// A POST REQUEST is when you are sending data to the server, because we want the data to go somewhere
// Examples include a login form, a payment form, a contact form
// This time the REQUEST has the body, and the response does not

// Other examples of requests:
// POST: Create a new task
// DELETE: Delete an existing task
// GET: Get a specific task
// GET: Search for tasks
// PUT: Update an existing task

// GET Request:
// {
//   method: "GET",
//   url: "https://google.com"
// }

// Response:

// {
//   statusCode: 200,
//   body: `
//           <html> ... </html>
//         `
// }

// Requests aren't magic, just objects

// POST Request:
// {
//   method: 'POST',
//   url: 'https://google.com',
//   body: {
//     username: 'aaron jack'
//     password: 'my pw'
//   }
// }

// Response to POST Request
// {
//   statusCode: 201;
// }

// WE ALSO CALL THESE OBJECTS JSON: JavaScript Object Notation

// API Design is usually a back end developer's job -  you will just get "specs"

// In the case of Shopify, it's done for us: Liquid is the Client and Shopify is the Server
// AJAX API allows us to add to the cart

//////////////////////////////////////////////////////!!!!!!!!!!!!!!!!!!!!!!!!!//////////////////////////////////////

//Don't forget to turn off autosave in your VS Code whenever working with API - some APIs have limited requests 
// per day or month and you're likely to exceed them if you're using autosave. Because with autosave on, after 
// setting up the GET request, it will be fired every time you make a small change to your code.

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////