let a = 10;
let b = 0;

let fetchData = new Promise((resolve, reject) =>
{
    setTimeout(() =>
    {
        resolve(30);
    }, 4000);
}).then((b) =>
{
    console.log(a+b);
})