const fs = require("fs");

// const quote = "This is my first file, that I created using nodeJS.";
// fs.writeFile("./firstFileCreated.txt", quote, (err) => {
//   console.log("Completed Writing!!");
// });


const quote2 = "Live More, Worry Less 😄😍";

// for (let i=1; i<=10; i++) {
//     fs.writeFile("./Backup/text-1.html", quote2, (err) => {
//         console.log("Completed Writing!!");
//     });
// }

// const [ , , n] = process.argv;
// for (let i=1; i<=n; i++) {
//     fs.writeFile(`./Backup/text-${i}.html`, quote2, (err) =>{
//         console.log("Completed Writing!!!", `text-${i}.html`)
//     });
// }

// fs.unlink("./Backup/text-1.html", (err) => {
//     console.error("Failed to Delete");
// });

// fs.readdir("./Backup", (err, files) => {
//     if (err) {
//         console.error(err);
//         return;
//     }
//     console.log(files);
// })

fs.readdir("./Backup", (err, files) => {
    files.forEach((file) => fs.unlink(`./Backup/${file}`, (err) => {
        console.error(`${file} deleted successfully.`);
      }));
    }
);