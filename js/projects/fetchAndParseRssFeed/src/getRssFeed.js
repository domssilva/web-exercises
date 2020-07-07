const fetch = require('node-fetch');
const parser = require('htmlparser2');

async function getRssFeed(source) {
  return await fetch(source)
                          .then(res => res.text())
                          .then(data => parser.parseFeed(data, {xmlmode: true, recognizeCDATA: true}))
                          .catch(err => err);
}

module.exports = getRssFeed;
