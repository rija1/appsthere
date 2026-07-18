const { createServer } = require("node:http");
const { parse } = require("node:url");
const next = require("next");

process.env.NODE_ENV = process.env.NODE_ENV || "production";
const dev = process.env.NODE_ENV !== "production";
const port = parseInt(process.env.PORT || "3000", 10);

const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  createServer((req, res) => {
    handle(req, res, parse(req.url, true));
  }).listen(port, () => console.log(`ready on ${port}`));
});
