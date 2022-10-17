const fs = require('fs');
const path = require('path');
const dirPath = path.join(__dirname, 'CRUD');
const filePath = `${dirPath}/apple.txt`;


// creating a file
fs.writeFileSync(`${dirPath}/apple.txt`, 'apple is red colored fruit which tastes sweet.');

//reading a file
fs.readFile(filePath, 'utf-8', (error, item) =>
    {
        console.log(item);
    });

//updating a file
fs.appendFile(filePath, ' kashmir is famous for apples', (err) =>
{
    if(!err)
    {
        console.log('file is updated');
    }
});

// renaming a file
fs.renameSync(filePath, `${dirPath}/fruit.txt`, (err) =>
{
    console.log('file is renamed');
}); 

// deleting a file
fs.unlinkSync(`${dirPath}/fruit.txt`);