const skills = [
    {id: 125459, name: "React", language: "Javascript"},
    {id: 189125, name: "Django", language: "Python"},
    {id: 136445, name: "Node", language: "Javascript"}
];

module.exports = {
    getAll,
    getOne,
    create
}

function create(skill) {
    skill.id = Date.now() % 1000000;
    skills.push(skill);
}

function getAll() {
    return skills;
}

function getOne(id) {
    id = parseInt(id);
    return skills.find(skill => skill.id === id);
}