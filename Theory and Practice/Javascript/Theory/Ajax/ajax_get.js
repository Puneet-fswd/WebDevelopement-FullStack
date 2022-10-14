//GET

let getbtn = document.getElementById('getbtn');
getbtn.addEventListener('click', getButtonClickHandler);

function getButtonClickHandler()
{
    console.log("you clicked the fetch button");

    //instantiate an xhr object
    const xhr = new XMLHttpRequest();

    //open the object
    xhr.open('GET', 'https://jsonplaceholder.typicode.com/todos/1', true);      //true => asynchronous, false => synchronous

    //what to do on progress(optional)
    xhr.onprogress = function()
    {
        console.log('loading..');
    }

    //when response is ready
    xhr.onload = function()
    {
        if(this.status == 200)
        {
            console.log(this.responseText);
        }
        else
        {
            console.log(new Error('404: json data not found'));
        }
    }

    //send the request
    xhr.send();
}