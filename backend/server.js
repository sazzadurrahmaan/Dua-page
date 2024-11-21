const express = require("express");
const sqlite3 = require("sqlite3");
const app = express();
const port = 5000;

// database connection from "dua_main.sqlite"
const db = new sqlite3.Database("./database/dua_main.sqlite");

// Endpoint for fetching all categories
app.get("/api/categories", (req, res) => {
  db.all("SELECT * FROM category", (err, rows) => {
    if (err) {
      console.error(err.message);
      res.status(500).json({ error: "Internal Server Error" });
    } else {
      res.json(rows);
    }
  });
});


// Start the server
app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
  });
  