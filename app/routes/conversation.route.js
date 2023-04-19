const express = require("express");
const conversations = require("../controllers/conversation.controller");
const router = express.Router();

router.route("/")
    .post(conversations.create)
router.route("/:userId")
    .get(conversations.findOne)

module.exports = router;