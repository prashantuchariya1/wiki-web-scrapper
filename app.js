const express = require("express");
const cheerio = require("cheerio");
const search = require("./search");
const fetch = require("node-fetch");
const ejs = require("ejs");

const app = express();
const url = "https://en.wikipedia.org/wiki/";
app.set("view engine", "ejs");
app.use(express.static(__dirname + "/public"));
app.set("views", __dirname);

app.get("/", (req, res) => {
  search.searchItem(req.params.Item).then(data => {
    res.render("search", { data: data[0] });
  });
});

app.post("/:Item?", (req, res) => {
  search.searchItem(req.params.Item).then(data => {
    res.render("search", { data: data[0] });
  });
});

const port = process.env.PORT || 2000;

app.listen(port, () => {
  console.log("Server is listening 0n port: 2000");
});
