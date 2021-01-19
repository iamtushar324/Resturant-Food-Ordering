const app = require("express")();

app.get("/", (req, res) => {
  res.send("hii");
});

app.listen(4444, () => {
  console.log("Query Service is running on 4444");
});
