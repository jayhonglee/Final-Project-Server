const express = require("express");
const cors = require("cors");
const alertRouter = require("../routers/alert");

const app = express();
const port = 3000;

// Enable CORS for all routes
const corsOptions = {
    origin: process.env.ORIGIN,
    credentials: true, //access-control-allow-credentials:true
    optionSuccessStatus: 200,
};

// app.use(express.json());
app.use(cors(corsOptions));

app.use(express.json());
app.use(alertRouter);

app.use(express.static('public')); // Assuming index.html is in the 'public' directory

app.listen(port, () => {
    console.log("Server is up on port " + port);
});

module.exports = app;





