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