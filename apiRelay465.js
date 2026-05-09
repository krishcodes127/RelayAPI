const express = require("express");
const router = express.Router();

router.post("/APIRelay465", (req, res) => {
  const { AuthenticateID, password, SenderID, Portnumber } = req.body;

  const missingFields = [];
  if (!AuthenticateID) missingFields.push("AuthenticateID");
  if (!password) missingFields.push("password");
  if (!SenderID) missingFields.push("SenderID");
  if (Portnumber === undefined || Portnumber === null) missingFields.push("Portnumber");

  if (missingFields.length > 0) {
    return res.status(400).json({ success: false, message: `Missing required fields: ${missingFields.join(", ")}` });
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(AuthenticateID)) {
    return res.status(400).json({ success: false, message: "Invalid AuthenticateID email format." });
  }
  if (!emailRegex.test(SenderID)) {
    return res.status(400).json({ success: false, message: "Invalid SenderID email format." });
  }

  const port = parseInt(Portnumber, 10);
  if (isNaN(port) || port !== 465) {
    return res.status(400).json({ success: false, message: "Portnumber must be 465." });
  }

  return res.status(200).json({
    success: true,
    message: "APIRelay465: Configuration parsed successfully.",
    data: {
      authenticateID: AuthenticateID.trim(),
      senderID: SenderID.trim(),
      portNumber: port,
      secure: true,
    },
  });
});

module.exports = router;
