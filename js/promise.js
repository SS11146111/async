document.getElementById("promiseBtn").addEventListener("click",
    function()
    {
        const promise = new Promise (function(resolve, reject){
     
        document.getElementById("tableContent").innerHTML = "Loading...";
        
        setTimeout(() => {
        
            fetch('https://dummyjson.com/posts')
            .then(response => {
                if(response.ok) {

                    resolve(response);
                }
                else {
                    reject("***Not Found***");
                }
            })
            .catch( () => {

                reject("Operation timed out");
            });

        }, 5000)
        });

        promise.then( res => res.json()).then( json => display(json));
        promise.catch(err => document.getElementById("tableContent").innerHTML = err)
        
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