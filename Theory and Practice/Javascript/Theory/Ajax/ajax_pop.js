let popbtn = document.getElementById('popbtn');
popbtn.addEventListener('click', popButtonClickHandler);

function popButtonClickHandler()
{
    //instantiate an xhr object
    const xhr = new XMLHttpRequest();

    //open the object
    xhr.open('GET', 'http://dummy.restapiexample.com/api/v1/employees', true);

    //when response is ready
    xhr.onload = function()
    {
        if(this.status == 200)
        {
            let obj = JSON.parse(this.responseText);
            console.log(obj);
            let list = document.getElementById('list');
            str = "";
            for(key in obj)
            {
                str += `<li>${obj[key].employee_name}</li>`;
            }
            list.innerHTML = str;
        }
        else
        {
            console.log(new Error('404: json data not found'));
        }
    }
    xhr.send();
}