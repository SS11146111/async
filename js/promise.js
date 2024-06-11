document.getElementById("promiseBtn").addEventListener("click",
    function()
    {
        document.getElementById("tableContent").innerHTML = "Loading...";

        Promise.race([

            fetch('https://dummyjson.com/posts') //to check status: 200 , ok
            //fetch('https://dummyjson.com/postss') //to check status: 404, data not found 
            //fetch('https://dummyjsson.com/posts') //to check failed to fetch error
            ,
            new Promise((resolve, reject) => {
                // Reject after 5 seconds
                setTimeout(() => reject(new Error("Operation timed out")), 5000);
            }),
            ])

            .then((res) => {
                if(res.status === 200)
                {
                    return res.json();
                }
                else if(res.status === 404)
                {
                    return -1;
                }
            })
            .then((jsonData) => {

                if(jsonData === -1)
                {
                    document.getElementById("tableContent").innerHTML = "Data not found";
                }
                else 
                {
                    display(jsonData);
                }
            })
            .catch((err) => document.getElementById("tableContent").innerHTML = err.message);

    })

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