const express = require("express");
const path = require("path");
const app = express();

app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));

const relayRoute = require("./apiRelay465");
app.use("/", relayRoute);

const relayRoute25 = require("./apiRelay25");
app.use("/", relayRoute25);

app.listen(4000, () => {
  console.log("Server running on port 4000");
});