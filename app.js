
//  ===============================================
// Problems and Solution for Array Method Some & Every.
//  =================================================


// Write a function called hasOddNumber which accepts an array and returns true if the array contains at least one odd number, otherwise it returns false.

function hasOddNumber(str) {
    return str.some(function (el) {
        return el % 2 !== 0;
    })
};

// Write a function called hasAZero which accepts a number and returns true if that number contains at least one zero. Otherwise, the function should return false.

function hasZero(str) {
    const splitZero = str.toString().split('');
    return splitZero.some(function (val) {
        return val === '0';
    })
};

// Write a function called hasOnlyOddNumbers which accepts an array and returns true if every single number in the array is odd. If any of the values in the array are not odd, the function should return false.

function hasOnlyOddNumbers(str) {
    return str.some(function (el) {
        return el % 2 === 0;
    })
};

// Write a function called hasNoDuplicates which accepts an array and returns true if there are no duplicate values (more than one element in the array that has the same value as another). If there are any duplicates, the function should return false.

function hasNoDuplicates(str) {
    return str.every(function (el) {
        return str.indexOf(el) === str.lastIndexOf(el);
    });
};

// Write a function called hasCertainKey which accepts an array of objects and a key, and returns true if every single object in the array contains that key. Otherwise it should return false.

function hasCertainKey(obj, key) {
    return obj.every(function (val) {
        return key in val;
    })
};

// Write a function called hasCertainValue which accepts an array of objects and a key, and a value, and returns true if every single object in the array contains that value for the specific key. Otherwise it should return false.

function hasCertainValue(str, key, value) {
    return str.every(function (val) {
        return val[key] === value;
    })
};


//  SOLUTIONS FOR FIND / FINDINDEX


// Write a function called findUserByUsername which accepts an array of objects, each with a key of username, and a string. The function should return the first object with the key of username that matches the string passed to the function. If the object is not found, return undefined.

function findUserByUsername(arr, username) {
    return arr.find(function (el) {
        return el.user === username;
    })
};

//  Write a function called removeUser which accepts an array of objects, each with a key of username, and a string. The function should remove the object from the array and return this object. If the object is not found, return undefined.

function removeUser(arr, username) {
    let identifiedIdx = arr.findIndex(function (val) {
        return val.username === username;
    })
    if (identifiedIdx === -1) return;

    return arr.splice(identifiedIdx, 1)[0];
};