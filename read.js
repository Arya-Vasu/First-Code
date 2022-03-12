const fs = require("fs");

fs.readFile("./cool.html", "utf-8", (err, data) => {
    if (err) {
        console.error("Something Went Wrong", err);
        return;  // Early return
    }
    console.log(data);
});

// const quote = "Dream without fear, Love without Limits!!!";

// fs.appendFile("./cool.html", "\n" + quote, (err) => {
//     console.log("Completed Writing!!!");
// });