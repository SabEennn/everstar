const express = require("express");
const app = express();
const path = require("path");
const hbs = require("express-hbs");

// Serve static files
app.use(express.static(path.join(__dirname, "public")));

// Use `.hbs` for extensions and find partials in `views/partials`.
app.engine(
  "hbs",
  hbs.express4({
    partialsDir: __dirname + "/views/partials",
  })
);
app.set("view engine", "hbs");
app.set("views", __dirname + "/views");
app.get("/", (req, res) => {
  // Send the HTML file as the response
  res.render(path.join(__dirname, "public", "src", "index.hbs"));
});
app.get("/bike1", (req, res) => {
  // Send the HTML file as the response
  res.render(path.join(__dirname, "public", "src", "pages", "yourbike.hbs"));
});
app.get("/bike2", (req, res) => {
  // Send the HTML file as the response
  res.render(path.join(__dirname, "public", "src", "pages", "yourbike.hbs"));
});
app.get("/bike3", (req, res) => {
  // Send the HTML file as the response
  res.render(path.join(__dirname, "public", "src", "pages", "yourbike.hbs"));
});

app.get("/gears", (req, res) => {
  res.send("hey here are your gears");
});
// Start the server
const PORT = 5500;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
