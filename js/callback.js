document.getElementById("callbackBtn").addEventListener("click",
    function()
    {
        document.getElementById("tableContent").innerHTML = " Result will be obtained after 5s...";
        setTimeout( () => {
        
            document.getElementById("tableContent").innerHTML = "Callback executed after 5 seconds";
            fetch('https://dummyjson.com/posts')
                .then( res => res.json())
                .then( json => display(json))}, 5000)
        
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