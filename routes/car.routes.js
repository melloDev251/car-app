const router = require("express").Router();
const carController = require("../controllers/car.controller");
const multer = require("multer");
const upload = multer();

router.get("/", carController.readCar);
router.post("/", upload.single("file"), carController.createCar);

// comments
router.patch("/comment-car/:id", carController.commentCar)




module.exports = router;

