About Project: simple project on asynchronous programming techniques such as callbacks, promises, and async/await, while 
integrating API calls to display data.
Tools used: HTML, CSS, JS, VS Code
Author: Sangita Saha

Callback implementation (callback.js)
Included a button and a div element in the HTML file callback.html. Implemented JavaScript functionality that utilizes a callback function to simulate 
a delay of 5 seconds when the button is clicked. It then fetches data from the JSONPlaceholder API (https://dummyjson.com/posts) and displays the 
fetched data in the div element after the callback is executed.

Promise Implementation (promise.js)
Included a button and a div element in the HTML file promise.html. Implemented JavaScript functionality that creates a Promise to fetch data from 
the JSONPlaceholder API (https://dummyjson.com/posts) and displays "Loading..." in the div element while the Promise is pending and updates the text
to show the fetched data once the Promise is resolved.

Async/Await Implementation (async_await.js)
Included a button and a div element in the HTML file async_await.html. Implemented JavaScript functionality that uses async/await to fetch data from 
the JSONPlaceholder API (https://dummyjson.com/posts) and displays "Loading..." in the div element while the data is being fetched and updates the text
to show the fetched data once it is received.
