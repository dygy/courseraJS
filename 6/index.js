let phoneBook = {};
let commandWordsArray;
let commandName;
module.exports = (command)=> {
    commandWordsArray = command.split(' ');
    commandName = commandWordsArray[0];
    if (commandName === 'ADD') return addContact(command);
    if (commandName === 'REMOVE_PHONE') return removePhone(command);
    if (commandName === 'SHOW') return show();
};
function addContact() {
    let newName = commandWordsArray[1];
    let phoneNumbersArrayToAdd = commandWordsArray[2].split(',');
    if (phoneBook.hasOwnProperty(newName)) {
        let initialPhonesArray = phoneBook[newName].split(', ');
        let updatedPhoneList = initialPhonesArray.concat(phoneNumbersArrayToAdd);
        phoneBook[newName] = updatedPhoneList.join(', ');
        return;
    }
    phoneBook[newName] = phoneNumbersArrayToAdd.join(', ');
}
function removePhone() {
    let phoneToRemove = commandWordsArray[1];
    let clone = {};
    for (let key in phoneBook) {
        clone[key] = phoneBook[key];
    }
    for (let name in phoneBook) {
        if (phoneBook[name] === phoneToRemove) {
            delete phoneBook[name];
        } else if (phoneBook[name].split(', ').indexOf(phoneToRemove) !== -1) {
            let initialPhonesArray = phoneBook[name].split(', ');
            for (let i = 0; i < initialPhonesArray.length; i++) {
                if (initialPhonesArray[i] === phoneToRemove) {
                    initialPhonesArray.splice(i, 1);
                }
            }
            phoneBook[name] = initialPhonesArray.join(', ');
        }
    }

    return JSON.stringify(clone) !== JSON.stringify(phoneBook);
}

function show() {
    let arr = [];
    let i = 0;
    for (let key in phoneBook) {
        arr[i] = key + ': ' + phoneBook[key];
        i++;
    }

    return arr.sort();
}