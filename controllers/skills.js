const Skill = require("../models/skill");

module.exports = {
    index
};

function index(req, res) {
    res.render("todos/index", {
        skills: Skill.getAll()
    });
}