document.getElementById("asyncBtn").addEventListener("click",
    async function()
    {
        
        document.getElementById("tableContent").innerHTML = "Loading...";
   
        try{
            
            const fetchObj = fetch('https://dummyjson.com/posts') //to check status: ok - 200 , fetching the posts
            //const fetchObj = fetch('https://dummyjson.com/postss') //to check status: Not found - 404, data not found 
            //const fetchObj = fetch('https://dummyjsson.com/posts') //to check failed to fetch error
            
            const timer = new Promise((resolve, reject) => {
              
                setTimeout(() => reject(new Error("Operation timed out")), 5000);
            })

         
            await Promise.race([fetchObj, timer])
                        .then((response) => {
                            if(response.status === 200)
                            {
                                return response.json();
                            }
                            else if(response.status === 404)
                            {
                                return -1;
                            }
                        }
                        )
                        .then((jsonData => {

                            if(jsonData === -1)
                            {
                                document.getElementById("tableContent").innerHTML = "Data not found";
                            }
                            else
                            {
                                display(jsonData)
                            }
                        }
                        ))
        }
        catch(error)
        {   
            document.getElementById("tableContent").innerHTML = error.message;
        }
    }
)

//function to display data in div element
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