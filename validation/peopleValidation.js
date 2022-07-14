function propertyEmptinessValidation (items){
    for (var i = 0 ; i < items.length ; i++){
        if (!items[i]){
            return false;
        }
    }
    return true;
}

function isPersonFound (person) {
    if (!person){
        return false;
    }
    return true;
}

module.exports = { propertyEmptinessValidation, isPersonFound }