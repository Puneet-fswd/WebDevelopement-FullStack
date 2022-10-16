const fs = require('fs');
let text = fs.readFileSync("text.txt", "utf-8");      //fs is nodejs module
console.log("The content of text.txt is: ");
console.log(text);
text = text.replace("text","txt");      //contents replaced in backend
console.log(text);

// fs.writeFileSync("txt.txt", text); --> this creates a new file txt.txt with the contents of text.txt