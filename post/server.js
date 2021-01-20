const app = require("express")();

app.get("/api/post", (req, res) => {
  res.send("post");
});

app.listen(3535, () => {
  console.log("Post Service is running on 3535");
});
