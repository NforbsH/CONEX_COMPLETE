const express = require('express');
const cors = require('cors');
require('./database/connection.js')


//const customerRoutes = require('./src/customer/routes');
const userRoute= require('./route/userRoute.js');

const app = express();
app.use(cors());
const port = 3000;

// Middleware (post and get json from our endpoints)
app.use(express.json()); 

app.get("/", (req, res) => {
    res.send("WELCOME TO FOKOU GROUP OF COMPANIES."); //sends something to the browser when connect to localhost.6
});

app.use("/api/user", userRoute); ///creating the route leading to customer route.

app.listen(port, () => console.log('app listening on port'+ port)); //callback fxn which just specifies if port is running.
