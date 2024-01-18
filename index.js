const { Router } = require("express");
const getDetailsController = require("./apis/controllers/getDetails");
const router = Router();

router.post(
  "/list-students",
  function (req, res, next) {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader(
      "Access-Control-Allow-Methods",
      "GET, POST, OPTIONS, PUT, PATCH, DELETE"
    );
    res.setHeader(
      "Access-Control-Allow-Headers",
      "X-Requested-With,content-type, Accept"
    );
    res.setHeader("Access-Control-Allow-Credentials", true);
    next();
  },
  getDetailsController.getStudentDetails
);

module.exports = router;
