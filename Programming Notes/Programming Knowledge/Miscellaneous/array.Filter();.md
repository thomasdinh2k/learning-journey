```js
let testArray = [8,1, -3, -5].filter((value, index) => {
    if (value < 0) {
        return false
    } else {
        return true;
    }
});

Output: [8, 1]

let testArray = [8,1, -3, -5].filter((value, index) => {
    return value > 0;
});

```