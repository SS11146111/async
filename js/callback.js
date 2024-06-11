document.getElementById("callbackBtn").addEventListener("click",
    function()
    {
        document.getElementById("tableContent").innerHTML = " Result will be obtained after 5s...";
        
        setTimeout( () => {
        
            document.getElementById("tableContent").innerHTML = "Callback executed after 5 seconds";
            
            fetch('https://dummyjson.com/posts') //to check status: 200 , ok
            //fetch('https://dummyjson.com/postss') //to check status: 404, data not found 
            //fetch('https://dummyjsson.com/posts') //to check failed to fetch error
                .then( res => 
                {
                    if(res.status === 200)
                    {
                        return res.json();
                    }
                    else if(res.status === 404)
                    {
                        return -1;
                    }
                })
                .then( json => 
                {
                    if(json === -1)
                    {
                        document.getElementById("tableContent").innerHTML = "Data not found";
                    }
                    else
                    {
                        display(json);
                    }
                })
                .catch((error) => document.getElementById("tableContent").innerHTML = error.message );
        }, 5000)
        
    }
)

//function to display data in the div element
function display(json)
{
   
    var tableData = json.posts.map(record => (
        `
        <tr>
            <td>${record.title}</td>
        </tr>
        `
    )).join('');

    document.getElementById("tableContent").innerHTML = tableData;
   
}