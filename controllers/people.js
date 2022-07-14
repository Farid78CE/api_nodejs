let {people} = require("../data.js");
const {addToPeopleList} = require("../utils/peopleUtil.js");
const {propertyEmptinessValidation, isPersonFound} = require("../validation/peopleValidation.js")

const getPeople = (req, res) => {
    res.status(200).json(people);
}

const addPerson = (req, res) => {
    const {name, lastName} = req.body;
    let validate = propertyEmptinessValidation([name, lastName])
    if (!validate){
        return res.status(404).json({"success": false, "message": "Please fill the fields"});
    }
    addToPeopleList(people, [name, lastName]);
    res.status(201).json(
        {
            success: true, 
            data: people
        });
}

const updatePerson = (req, res) => {
    const {name, lastName} = req.body;
    const {id} = req.params; 
    let validate = propertyEmptinessValidation([name, lastName])
    if (!validate){
        return res.status(404).json({"success": false, "message": "Please Fill the fields"});
    }
    const person = people.find((person) => {
        if (person.id === Number(id)){
            return person;
        }
    });
    validate = isPersonFound(person);
    if (!validate){
        return res.status(404).json({"success": false, "message": `There is not person with id=${id}`})
    }
    const newPerson = people.map((person) => {
        if (person.id === parseInt(id)){
            person.name = name;
            person.lastName = lastName;
        }
    })
    res.status(200).json({"success": true, "data": people});
}

const deletePerson = (req, res) => {
    const {id} = req.params;
    const person = people.find( (person) => {
        if (person.id === Number(id)){
            return person;
        }
    });
    let validate = isPersonFound(person);
    if (!validate) {
        return res.status(404).json({"success": false, "message":`There is no person with id=${id}`});
    }
    people = people.filter((person) => {
        if (person.id !== Number(id)){
            return person;
        }
    });
    res.status(200).json({"success": true, "data":people});

}

module.exports = {getPeople, addPerson, updatePerson, deletePerson}