const express = require("express");
const router = express.Router();

router.post("/APIRelay25", (req, res) => {
  const { SenderID, Portnumber } = req.body;

  const missingFields = [];
  if (!SenderID) missingFields.push("SenderID");
  if (Portnumber === undefined || Portnumber === null) missingFields.push("Portnumber");

  if (missingFields.length > 0) {
    return res.status(400).json({ success: false, message: `Missing required fields: ${missingFields.join(", ")}` });
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(SenderID)) {
    return res.status(400).json({ success: false, message: "Invalid SenderID email format." });
  }

  const port = parseInt(Portnumber, 10);
  if (isNaN(port) || port !== 25) {
    return res.status(400).json({ success: false, message: "Portnumber must be 25." });
  }

  return res.status(200).json({
    success: true,
    message: "APIRelay25: Configuration parsed successfully.",
    data: {
      senderID: SenderID.trim(),
      portNumber: port,
      secure: false, // port 25 is non-secure/plain SMTP
    },
  });
});

module.exports = router;