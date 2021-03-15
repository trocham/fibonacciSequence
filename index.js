
const express = require("express");
const app = express();
app.listen(3030, () => {
 console.log("Server running on port 3030");
console.log ("Execute next url, where X is the position to know: http://localhost:3030/fibonacci?num=X");
 app.get("/fibonacci", (req, res, next) => {

    let num = req.query.num;   
    let response = {
                    "Position" :  num,
                    "Result into fibonnacci sequence: " : fibonacci(num)
                    }
    res.json(response);
   });
});

function fibonacci(n, prev) {
    prev = prev || [];
  
    if (n === 0) return 0;
    if (n === 1) return 1;
    if (prev[n]) return prev[n];
  
    return prev[n] = fibonacci(n - 1, prev) + fibonacci(n - 2, prev);
  }
  
