var express = require('express');
var router = express.Router();
var skillsCtrl = require("../controllers/skills")

// GET all skills
router.get("/", skillsCtrl.index);


module.exports = router;
