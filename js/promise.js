document.getElementById("promiseBtn").addEventListener("click",
    function()
    {
        document.getElementById("tableContent").innerHTML = "Loading...";

        Promise.race([
            fetch("https://dummyjson.com/posts"),
            new Promise((reject) => {
              
              setTimeout(() => reject(new Error("Operation timed out")), 5000);
            }),
            ])
            .then((response) => response.json())
            .then((jsonData => display(jsonData)))
            .catch((error) => document.getElementById("tableContent").innerHTML = error.message );


    })

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