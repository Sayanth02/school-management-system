const express = require("express");
const auth = require("../middleware/auth");
const router = express.Router();
const userController = require("../controllers/userController");

// create user
router.post("/addUser", auth(["Admin"]), userController.createUser);
// get all users
router.get("/getAllUser", auth(["Admin"]), userController.getAllUsers);
// update user
router.put("/updateUser/:id", auth(["Admin"]), userController.updateUser);
// delete user
router.delete("/deleteUser/:id", auth(["Admin"]), userController.deleteUser);

module.exports = router;
