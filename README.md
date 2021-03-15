# FIBONNACCI SEQUENCE

This is a simple REST API using the GET method, where giving a number that indicates the position into the Fibonacci sequence.

This algorithm is so tricky, it seems so simple, but a simple solution is not efficient.

The mathematical formula is: F(n) = F(n-1) + F(n-2).

But if we just try to iterate into a simple loop using for o while loops, in some point consume the process memory.

Making another approach. Using recursive solution:

function fibonacci(n) {
  return fibonacci(n - 1) + fibonacci(n - 2);
}

Looks great but more complex, in fact less efficient.

I have to say it;  I had to make a research in how to improve this algorithm, when I found something called memorization, using an array to store the previous results and make the memory process less stressful.

The solution you can see it in the index.js

# REST API 

Now, for a simple use of the node library express, I use it to generate a simple GET method to create the service that receive a number that represents the position in the Fibonacci sequence.

I use the localhost:3030.

So, the final end point to test the function is:

http://localhost:3030/fibonacci?num=X

where X is the position number you want to know.

The result looks something like:

{
  "Position":  “6”,
  "Result into fibonnacci sequence: ": 8
}

# EXECUTE

To execute the pnode project
1. Download the code
2. execure into the project path 
  > npm install 
3. Then Execute:
  > node index.js