//POST request

let postbtn = document.getElementById('postbtn');
postbtn.addEventListener('click', postButtonClickHandler);

function postButtonClickHandler()
{
    //instantiate an xhr object
    const xhr = new XMLHttpRequest();

    //open the object
    xhr.open('POST', 'http://dummy.restapiexample.com/api/v1/create', true);
    xhr.getResponseHeader('Content-type', 'application/json');

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
    param = `{"name":"testname","salary":"1234","age":"18"}`;
    xhr.send(param);
}