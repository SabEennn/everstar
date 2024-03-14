const express = require("express");
const app = express();
const path = require("path");

// Serve static files
app.use(express.static(path.join(__dirname, "public")));

app.get("/bikes1", (req, res) => {
  // Send the HTML file as the response
  res.sendFile(path.join(__dirname, "public", "src", "pages", "yourbike.html"));
});
app.get("/bikes2", (req, res) => {
  // Send the HTML file as the response
  res.sendFile(path.join(__dirname, "public", "src", "pages", "yourbike.html"));
});
app.get("/bikes3", (req, res) => {
  // Send the HTML file as the response
  res.sendFile(path.join(__dirname, "public", "src", "pages", "yourbike.html"));
});

app.get("/gears", (req, res) => {
  res.send("hey here are your gears");
});
// Start the server
const PORT = 5500;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
