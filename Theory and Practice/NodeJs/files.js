//creating files through command line/command prompt or vscode terminal 
const fs = require('fs');
const input = process.argv;
if(input[2] == 'add')
{
    fs.writeFileSync(input[3], input[4]);
    console.log('New file created'.rainbow);
}
else if(input[2] == 'remove')
{
    fs.unlinkSync(input[3]);
    console.log('New file removed'.rainbow);
}
else
{
    console.log('invalid input'.red);
}

//creating multiple files through command line/command prompt or vscode terminal
const path = require('path');
const dir = path.join(__dirname, 'demofiles');
for(let i=0; i<5; i++)
{
    fs.writeFileSync(dir+`/demo_${i}.txt`, 'this is a demo file');
}
console.log('new files created'.rainbow);

// listing the files in a particular directory
fs.readdir(dir, (err, demofiles) =>
{
    demofiles.forEach((item) =>
    {
        console.log(item);
    })
});