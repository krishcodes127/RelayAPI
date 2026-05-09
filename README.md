# RelayAPI
REST API service built with Node.js and Express.js for parsing and validating SMTP relay configurations
1. APIRelay465 — Secure SMTP Relay (SSL)
Validates and parses SMTP configuration for Port 465 (SSL/TLS)
Endpoint:
POST /APIRelay465
Request Body:
json{
    "AuthenticateID": "you@email.com",
    "password": "yourpassword",
    "SenderID": "sender@email.com",
    "Portnumber": 465
}
Success Response:
json{
    "success": true,
    "message": "APIRelay465: Configuration parsed successfully.",
    "data": {
        "authenticateID": "you@email.com",
        "senderID": "sender@email.com",
        "portNumber": 465,
        "secure": true
    }
}
Validations:

All fields are required
AuthenticateID must be valid email format
SenderID must be valid email format
Portnumber must be 465
Password never returned in response


2. APIRelay25 — Plain SMTP Relay
Validates and parses SMTP configuration for Port 25 (Plain SMTP)
Endpoint:
POST /APIRelay25
Request Body:
json{
    "SenderID": "sender@email.com",
    "Portnumber": 25
}
Success Response:
json{
    "success": true,
    "message": "APIRelay25: Configuration parsed successfully.",
    "data": {
        "senderID": "sender@email.com",
        "portNumber": 25,
        "secure": false
    }
}
Validations:

All fields are required
SenderID must be valid email format
Portnumber must be 25

🛠️ Tech Stack

Runtime: Node.js
Framework: Express.js
Testing: Postman
Deployment: Railway 


