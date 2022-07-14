function getLastIndex (peoplelist) {
    let lastIndex  = peoplelist.length;
    return lastIndex + 1; 
}

function addToPeopleList (peoplelist, items) {
    const newPerson = {
        "id" : getLastIndex(peoplelist),
        "name" : items[0] ,
        "lastName" : items[1]
    }
    peoplelist.push(newPerson);
}


module.exports = {getLastIndex, addToPeopleList}