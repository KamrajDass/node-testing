var express = require("express");
const bodyParser = require("body-parser");

/* GET users listing. */

const matchRouter = express.Router();

matchRouter.use(bodyParser.json());

matchRouter
  .route("/")
  .get((req, res, next) => {
    res.statusCode = 200;
    res.setHeader("Content-Type", "application/json");
    res.json({
      message: "Success",
      data: `Urser Retrived Success`,
    });
  })
  .post((req, res, next) => {
    const customData = req.customData;
    res.statusCode = 200;
    res.setHeader("Content-Type", "application/json");
    res.json({
      message: "Success",
      data: `Users Added Success in ${customData.contentType} format-`,
    });
  });

matchRouter
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

module.exports = matchRouter;
