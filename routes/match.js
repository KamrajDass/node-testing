var express = require("express");
const bodyParser = require("body-parser");
const auth = require("../middleware/auth");
const checkContentType = require("../middleware/checkContentType");

/* GET users listing. */

const userRouter = express.Router();

userRouter.use(bodyParser.json());

userRouter
  .route("/")
  .get((req, res, next) => {
    res.statusCode = 200;
    res.setHeader("Content-Type", "application/json");
    res.json({
      message: "Success",
      data: `Urser Retrived Success`,
    });
  })
  .post(auth, checkContentType, (req, res, next) => {
    const customData = req.customData;
    res.statusCode = 200;
    res.setHeader("Content-Type", "application/json");
    res.json({
      message: "Success",
      data: `Users Added Success in ${customData.contentType} format`,
    });
  });

userRouter
  .route("/:matchId/palyer/:playerId")
  .get(auth, function (req, res, next) {
    res.statusCode = 200;
    res.setHeader("Content-Type", "application/json");
    res.json({
      message: "Success",
      data: `Fetched matchId: ${req.params.matchId}, playerId: ${req.params.playerId}`,
    });
  });

module.exports = userRouter;
