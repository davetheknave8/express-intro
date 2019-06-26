// Get (require in) express
const express = require('express')

const app = express();
const port = 5000;


//Telling express where to find our static files
//That's things like HTML, CSS, JS...all files
app.use( express.static('server/public'));

//Tell our express server to start listening to our requests
app.listen( port, () => {
    console.log(`Server is listening on port ${port}`)
})