const express = require("express");
const users = require("../controllers/user.controller");
const auth = require("../middlewares/auth");
const uploadCloud = require("../middlewares/uploader.js");

const router = express.Router();

router.route("/")
    .get(users.findAll)
router.route("/friends")
    .get(users.findFriendList)
router.route("/logout")
    .get(users.logOut)
router.route("/addfriend")
    .put(users.addFriend)
router.route("/unfriend")
    .put(users.unFriend)
router.route("/:id")
    .get(users.findOne)
    .put(auth.verifyTokenAdmin, uploadCloud.single('avatar'), users.update)
    .delete(auth.verifyTokenAdmin, users.delete)

module.exports = router;