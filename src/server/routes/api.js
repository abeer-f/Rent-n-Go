const express = require("express");
const CarController = require("../controllers/CarController");
const router = express.Router();

router.post("/add", CarController.createCar, (req, res) => {
  try {
    res
      .status(200)
      .set("Content-Type", "application/javascript")
      .json(res.locals);
  } catch (e) {
    console.error(e);
  }
});


module.exports = router;
