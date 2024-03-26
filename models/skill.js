const skills = [
    {id: 1254, name: "React"},
    {id: 1891, name: "Django"},
    {id: 1364, name: "Node"}
];

module.exports = {
    getAll,
    getOne
}

function getAll() {
    return skills;
}

function getOne(id) {
    id = parseInt(id);
    return skills.find(skill => skill.id === id);
}