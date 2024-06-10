document.getElementById("aaBtn").addEventListener("click",
    async function()
    {
        document.getElementById("tableContent").innerHTML = "Loading...";
   
        try{
            const fetchObj = await fetch('https://dummyjjson.com/posts');
            const timer = await new Promise((reject) => {
              
                setTimeout(() => reject(new Error("Operation timed out")), 5000);
            })
            Promise.race([fetchObj, timer])
            .then((response) => response.json())
            .then((jsonData => display(jsonData)))
        }
        catch(error)
        {

            document.getElementById("tableContent").innerHTML = error.message
        }
    }
)

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