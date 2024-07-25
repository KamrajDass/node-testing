var express = require("express");
const bodyParser = require("body-parser");

/* GET users listing. */

const messageRouter = express.Router();

messageRouter.use(bodyParser.json());

messageRouter
  .route("/")
  .get((req, res, next) => {
    res.statusCode = 200;
    res.setHeader("Content-Type", "application/json");
    res.json({
      message: "Success",
      data: `User Retrived Success`,
    });
  })
  .post((req, res, next) => {
    const message = "Hello world";

    // Broadcast the message to all connected WebSocket clients
    for (let index = 0; index < 200; index++) {
      wss.clients.forEach((client) => {
        client.send(`Broadcastsss: ${message}  ${index}`);
      });
    }

    res.status(200).json({ status: "Message sent to all clients" });
  });

messageRouter
  .route("/:matchId/palyer/:playerId")
  .get(function (req, res, next) {
    res.statusCode = 200;
    res.setHeader("Content-Type", "application/json");
    res.json({
      message: "Success",
      data: `Fetched matchId: ${req.params.matchId}, playerId: ${req.params.playerId}`,
    });
  })
  .post((req, res, next) => {
    res.statusCode = 403;
    res.end("POST operation not supported on /playerId/" + req.params.dishId);
  });

module.exports = messageRouter;
