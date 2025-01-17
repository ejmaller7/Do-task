const express = require("express");
// Setup express
const app = express();

const PORT = process.env.PORT || 3000

function doWork (task) {
    return `Task is complete: ${task}`
}

// Configure your doors -- Your routes
app.get("/doWork", (request, response) => {
    // Input
    const task = request.query.task;

    // Dowork
    const result = doWork(task);

    // Output
    // Server output
    console.log(result);

    // Client output
    response.json({
        message: result
    });
});

app.get("/" , (req, res) => res.send("This is the default route .. Happy face"));

app.listen(PORT, () => console.log(`Server is listening on port ${PORT}`));