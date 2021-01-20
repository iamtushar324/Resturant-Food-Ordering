const app = require("express")();
const mongoose = require("mongoose");

app.get("/api/query", (req, res) => {
  res.send("hii");
});

app.listen(4545, () => {
  console.log("Query Service is running on 4545");
});
