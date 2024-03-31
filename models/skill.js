const skills = [
    {id: 125459, name: "React", language: "Javascript"},
    {id: 189125, name: "Django", language: "Python"},
    {id: 136445, name: "Node", language: "Javascript"}
];

module.exports = {
    getAll,
    getOne,
    create,
    deleteOne,
    update
}

function update(id, updatedSkill) {
    id = parseInt(id);
    const skill = skills.find(skill => skill.id === id);
    Object.assign(skill, updatedSkill);
}

function deleteOne(id) {
    id = parseInt(id);
    const idx = skills.findIndex(skill => skill.id === id);
    skills.splice(idx, 1);
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