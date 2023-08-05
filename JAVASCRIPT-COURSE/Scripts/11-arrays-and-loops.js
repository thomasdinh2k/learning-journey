const nums = [10, 20, 30];
nums[2] = 99;
console.log(nums);

function getLastArray(array) {
    lastItem = array[array.length - 1];
    console.log(`The last item of this Array is ${lastItem}`);
}

getLastArray(nums);

getLastArray(['Happy', 'Birthday', 'To', 'You', '!!!']);

// 11d
for (let i = 0; i <= 10; i+=2) {
    console.log(i);   
}

for (let i = 5; i >= 0; i--) {
    console.log(i);
    
}

// 11g
new_nums = []
for (let i = 0; i < nums.length; i++) {
    new_nums.push(nums[i] + 1)
}

console.log(new_nums);

// 11h

function addOne(array) {
    arrayResult = [];
    for (let i = 0; i < array.length; i++) {
        arrayResult.push(array[i] + 1);
    }
    console.log(arrayResult)
}

addOne([1, 2, 3, 123]);

// 11i
function addNum(array, num) {
    let arrayResult = [];
    for (let i = 0; i < array.length; i++) {
        arrayResult.push(array[i] + num);
    }
    console.log(arrayResult);
}

addNum([1, 2, 3], 10);


// 11j
function addArrays(array1, array2) {
    let arrayResult = [];
    for (let i = 0; i < array1.length; i++) {
        arrayResult.push(array1[i] + array2[i]);
    }
    console.log(arrayResult);
}

addArrays([1,1,2], [1, 1, 3]);

// 11k
function countPositive(array) {
    let quantityOfPos = 0
    for (let i = 0; i < array.length; i++) {
        if (array[i] >= 0) {
            quantityOfPos ++;
        }
        
    }
    console.log(quantityOfPos);
}

countPositive([1, 2, 3, 4, -2, -1, 0, 1])

// 11l

function minMax(array) {
    let result = {
        min: 0,
        max: 0
    }
    // Begin the algorithm
    for (let i = 0; i < array.length; i++) {
        if (array[i] < result.min) {
            result.min = array[i];
        } else if (array[i] > result.max){
            result.max = array[i];
        } else if (array.length === 1){
            result.max = array[0];
            result.min = 3;
        }
    }


    console.log(result);
}
minMax([1, -3, 5]);
minMax([-2, 3, -5, 7, 10]);
minMax([3]);
minMax([ ]);

console.log([3].length)

//11n
function countWords(array) {
    result = {}
    console.log(array.length)
    // console.log(array[1])
    for (let i = 0; i < array.length; i++) {
        let dupCount = 0;
        for (let k = 1; k < array.length; k++) {
            if (array[i] === array[k]) {
                dupCount ++;
            }
        }
        console.log(`${array[i]} appears ${dupCount} times`)
        result[array[i]] = dupCount;
        console.log(dupCount)
        dupCount = 0;
    }
    console.log(result);
}   

countWords(['apple', 'grape', 'apple', 'apple', 'apple', 'tiger','wood', 'wood']);

// 11o
function e11o(array) {
    let searchCount = 0
    for (let i = 0; i < array.length; i++) {
        if (array[i].toLowerCase() == 'search') {
            searchCount = i
            break
        }
    }
    if (searchCount == 0) {
        console.log(-1)
    } else {
        console.log(searchCount)
    }
}

e11o(['hello', 'world', 'SEARCH','good', 'search'])
e11o(['not', 'found'])

// 11q
// Return index if found, (-1) if can't be found
function findIndex(array, word) {
    let wordIndex = 0;
    let flag = 0
    for (let index = 0; index < array.length; index++) {
        if (array[index] == word) {
            wordIndex = index;
        }
    }
    if (wordIndex == 0) {
        console.log(-1);
        flag = -1
        return flag
    } else {
        console.log(wordIndex)
    }
}

findIndex(['green', 'red', 'blue', 'red'], 'red');
findIndex(['green', 'red', 'blue', 'red'], 'yellow');

//11r

function removeEgg(foodArray) {
    let flag = 0;
    for (let i = foodArray.length; i >= 0; i--) {
        if (foodArray[i] == 'egg') {
            foodArray.splice(i, 1);
        }
    }
    console.log(foodArray);
}

function removeEgg2(array) {
    let result = []
    for (let i = 0; i < array.length; i++) {
        if (array[i] == 'egg') {
            continue
        } else {
            result.push(array[i])
        }
        
    }
    console.log(result);
}

//11s

function removeEgg3(array) {
    array = array.reverse();
    console.log(array)
    let result = []
    for (let i = 0; i < array.length; i++) {
        if (array[i] == 'egg' && i < 3) {
            continue
        } else {
            result.push(array[i])
        }
        
    }
    console.log(result.reverse());
    
}

removeEgg(['egg', 'apple', 'egg', 'egg', 'ham']);
removeEgg2(['egg', 'apple', 'egg', 'egg', 'ham', 'egg']);
removeEgg3(['egg', 'apple', 'egg', 'egg', 'ham']);

// Challenge Exercise
let listHTML = ``;

function addLog(message) {
    const HTML = `<p>${message}</p>`;
    listHTML += HTML
    document.querySelector('.result').innerHTML = listHTML;
}

let resultFizz = []
for (let i = 1; i <= 20; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        resultFizz.push('FizzBuzz');
    } else if (i % 3 === 0) {
        resultFizz.push('Fizz');
    } else if (i % 5 == 0) {
        resultFizz.push('Buzz');  
    } else {
        resultFizz.push(i);
    }
        
}

addLog('1');
addLog('2');
addLog('3');
addLog(resultFizz)

// 11w

function findUnique(array) {
    let returnArr = []
    addLog(findIndex(['green', 'red', 'blue', 'red'],'red'))
    for (let i = 0; i < array.length; i++) {
        if (!(findIndex(array, array[i]) == -1)) {
            returnArr.push(array[i])
        }
    }
    addLog(returnArr)
}


findUnique(['green', 'red', 'blue', 'red']);