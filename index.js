const express = require("express");
const app = express();
const path = require("path");
const proxy = require("express-http-proxy");
const PORT = process.env.PORT || 3000;
const HOST = process.env.HOST || "localhost";

const { exec } = require("child_process");
exec("yarn start:server");

app.use("/api", proxy(`http://localhost:4000`));
app.use("/", express.static(path.join(__dirname + "/recipies-frontend/build")));
app.listen(PORT, () => console.log(`Example app listening on http://${HOST}:${PORT}`));
