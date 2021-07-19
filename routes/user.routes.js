const router = require("express").Router();
const authController = require("../controllers/auth.controller");
const userController = require("../controllers/user.controller");

// auth
router.post("/register", authController.signUp);
router.post("/login", authController.signIn);
router.get("/logout", authController.logOut);

// user
router.get("/", userController.getAllUsers)
router.get("/:id", userController.userInfo);


module.exports = router;
