document.getElementById("aaBtn").addEventListener("click",
    async function()
    {
        document.getElementById("tableContent").innerHTML = "Loading...";
   
        try{
            const response = await fetch('https://dummyjson.com/posts');
            const result = await response.json();
            display(result);
        }catch(error){
            document.getElementById("tableContent").innerHTML = error;
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