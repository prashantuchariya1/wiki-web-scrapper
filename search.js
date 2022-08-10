const fetch = require("node-fetch");
const cheerio = require("cheerio");

const url = "https://en.wikipedia.org/wiki/";

function searchItem(item) {
  return fetch(`${url}${item}`)
    .then(res => res.text())
    .then(body => {
      var data = [];
      const $ = cheerio.load(body);

      var Heading = $(".firstHeading").text();
      var Img = $(".infobox tbody tr td a img").attr("src");
      var p1 = $(".infobox")
        .next("p")
        .text();
      var p2 = $(".infobox")
        .next("p")
        .next("p")
        .text();
      var p3 = $(".infobox")
        .next("p")
        .next("p")
        .next("p")
        .text();

      var dat = {
        Heading: Heading,
        Image: Img,
        Paragraph1: p1,
        Paragraph2: p2,
        Paragraph3: p3
      };

      data.push(dat);
      return data;
    });
}

module.exports = {
  searchItem
};
