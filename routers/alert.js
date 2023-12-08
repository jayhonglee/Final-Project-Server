const express = require("express");
const router = new express.Router();
const { testingEmail } = require("../emails/email");

// Variable to hold the value
let myVariable = 0;

// Testing
router.post("/alert/test", async (req, res) => {
    try {
        // Assuming the new value comes in the request body as 'newValue'
        const newValue = req.body.newValue;

        // If newValue is provided in the request body, update myVariable
        if (newValue !== undefined) {
            myVariable = newValue;
            res.status(201).send(`Variable updated to ${newValue}`);
        } else {
            res.status(400).send("No new value provided");
        }

        // Trigger email or other operations
        // testingEmail("ja34luv@gmail.com");
        
    } catch (e) {
        res.status(400).send(e);
        console.log(e);
    }
});

// Route to get the current value of myVariable
router.get("/alert/getVariable", (req, res) => {
    res.send({ myVariable });
});

module.exports = router;
