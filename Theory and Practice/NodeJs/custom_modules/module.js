function sum(arr)
{
    let sum = 0;
    arr.forEach(element =>
        {
            sum = sum+element;
        });
    return sum;
}

function average(arr)
{
    let sum_avg = 0;
    arr.forEach(element =>
        {
            sum_avg = sum_avg + element;
        });
    return sum_avg/arr.length;
}

module.exports =
{
    sum: sum,
    avg: average
};