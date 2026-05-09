const express = require("express");
const app = express();

app.use(express.json());

const relayRoute = require("./apiRelay465");
app.use("/", relayRoute);

const relayRoute25 = require("./apiRelay25");  // ADD THIS
app.use("/", relayRoute25);                     // ADD THIS

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});