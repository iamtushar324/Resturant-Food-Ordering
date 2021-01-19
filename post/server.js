const app = require("express")();

app.get("/", (req, res) => {
  res.send("post");
});

app.listen(6666, () => {
  console.log("Post Service is running on 6666");
});
