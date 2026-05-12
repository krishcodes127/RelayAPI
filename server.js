const express = require("express");
const app = express();
const path = require("path"); // ADD THIS

app.use(express.json());
app.use(express.static(path.join(__dirname, "public"))); // ADD THIS

const relayRoute = require("./apiRelay465");
app.use("/", relayRoute);

const relayRoute25 = require("./apiRelay25");
app.use("/", relayRoute25);

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

module.exports = app;