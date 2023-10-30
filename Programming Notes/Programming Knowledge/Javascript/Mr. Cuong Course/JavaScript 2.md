## Viết ứng dụng tính tổng từ 1 đến 100 (1 + 2 + 3 +…+ 99 + 100)
```js
// Sum to 100

        function sumTo100() {
            let result = 0;
            for (let i = 1; i <= 100; i++) {
                result += i;
            }
            return result;
        }

        const sumTo100Arrow = () => {
            let result = 0;
            for (let i = 1; i <= 100; i++) {
                result += i;
            }
            return result;
        };

        console.log(sumTo100());
        console.log(sumTo100Arrow());
```
## Chỉ sử dụng một Vòng lặp duy nhất (Có thể dùng một trong các vòng lặp WHILE, DO WHILE, FOR để giải quyết bài toán) để Viết ứng dụng tính tổng các số chẵn từ 1 đến 50 (2 + 4 + 6 +…+ 48 + 50)  và tổng các số lẻ từ 1 đến 50 (1 + 3 + 5 +…+ 47 + 49)
```js
// Sum Odd Even up to 50
        const sumOddEven = () => {
            let sumOdd = 0;
            let sumEven = 0;
            for (let i = 1; i <= 50; i++) {
                if (i % 2 == 0) {
                    sumEven += i;
                } else {
                    sumOdd += i;
                }
            }
            console.log(`Some Even = ${sumEven}`);
            console.log(`Some Odd = ${sumOdd}`);
            return sumOdd + sumEven;
        };

        console.log(sumOddEven());
```

## Viết ứng dụng tính Tổng liên tiếp các số từ A đến B với A và B là hai số bất kỳ do người dùng nhập vào từ hộp thoại Promt (Người dùng có quyền nhập vào A trước B sau hoặc B trước A sau)
```js
// Sum Prompt AB
        const sumPrompt = () => {
            const val1 = parseInt(prompt("Enter value for A: "), 10);
            const val2 = parseInt(prompt("Enter value for B: "), 10);
            let a = 0; let b = 0;
            let result = 0;
            if (val1 < val2) {
                a = val1;
                b = val2;
            } else {
                b = val1;
                a = val2;
            }
            console.log(`A = ${a}\nB = ${b}`);
            for (let i = a; i <= b; i++) {
                result += i;
            }
            console.log(`Tổng của các số liên tiếp từ số ${a} đến số ${b} là ${result}`);
            return result;
        };
```
## Viết ứng dụng tính giai thừa của một số **n** bất kỳ bằng 2 cách

·       Dùng vòng lặp WHILE

·       Dùng vòng lặp FOR
```js
// Factorial
        const factorialWithWhile = (n) => {
            const initialN = n;
            let mulArray = [];
            let result = 1;
            while (n > 0) {
                mulArray.push(n);
                result *= n;
                n--;
            }
            const mulArrayString = mulArray.join(" x ");
            console.log(`${initialN}! = ${mulArrayString} = ${result}`);
            return result;

        }
        console.log(factorialWithWhile(5));
        console.log(factorialWithWhile(4));

        const factorialWithFor = (n) => {
            const initialN = n;
            let mulArray = [];
            let result = 1;
            for (let i = n; i > 0; i--) {
                mulArray.push(i);
                result *= i;
            }
            const mulArrayString = mulArray.join(" x ");
            console.log(`${initialN}! = ${mulArrayString} = ${result}`);
            return result;
        }
        console.log(factorialWithFor(5));
        console.log(factorialWithFor(4));
```
## Viết ứng dụng tính nghiệm của phương trình bậc 2 một ẩn số với các hệ số A, B, C được nhập từ hộp thoại Prompt

·       **Ax2 + Bx + C = 0**
```js
//Quadratic Equation
        // Ax^2 + Bx + C = 0
        const quadraticEquation = (a, b, c) => {
            console.log(`Đi tìm lời giải cho ${a}x²+${b}x+${c} = 0`);
            let discriminant = 0;
            // Calculate delta b^2 - 4ac 
            const delta = (b * b) - 4 * a * c;
            if (delta < 0) {
                console.log("Phương trình vô nghiệm, trả về giá trị NaN");
                return NaN;
            } else if (delta == 0) {
                discriminant = ((-b) / (2 * a));
                console.log(`Nghiệm kép ${discriminant}`);
                return discriminant
            } else {
                let discriminant1 = ((-b + Math.sqrt(delta)) / (2 * a));
                let discriminant2 = ((-b - Math.sqrt(delta)) / (2 * a));
                console.log(`Phương trình có 2 nghiệm phân biệt là ${discriminant1} và ${discriminant2}`);
                const discriminantArray = [discriminant1, discriminant2]
                return discriminantArray;
            }
        }
        console.log(quadraticEquation(4, -2, -6));
        console.log(quadraticEquation(3, 2, 5));
```

## Viết chương trình tìm số lớn nhất **(SLN)** và số bé nhất **(SBN)** trong 5 số bất kỳ với các số bất kỳ được nhập từ hộp thoại Prompt
```js
const findMin = (a, b, c, d, e) => {
            let result = a;
            numArray = [a, b, c, d, e];
            numArray.forEach(num => {
                if (num < result) {
                    result = num;
                }
            });
            console.log(`Số nhỏ nhất của dãy 5 số ${numArray.join(", ")} là ${result}`);
            return result;
        }

const findMax = (a, b, c, d, e) => {
	let result = a;
	numArray = [a, b, c, d, e];
	numArray.forEach(num => {
		if (num > result) {
			result = num;
		}
	});
	console.log(`Số to nhất của dãy 5 số ${numArray.join(", ")} là ${result}`);
	return result;
}
        console.log(findMin(5, 21, 2, 4, -2));
        console.log(findMax(5, 21, 2, 4, -2));
```

## Viết chương trình hiển thị bảng cửu chương như hình dưới đây:

```html
<style>
        .demTable {
            border: 1px solid #b3adad;
            padding: 5px;
        }

        .demTable th {
            border: 1px solid #b3adad;
            padding: 2px;
            background: #7c8cd5;
            color: #313030;
        }

        .demTable td {
            border: 1px solid #b3adad;
            text-align: center;
            padding: 2px;
            font-size: 14px;
            background: #ffffff;
            color: #313030;
        }
    </style>
    </head>

    <body>
        <table class="demTable">
            <thead>
                <tr>
                    <th colspan="10">Bảng cửu chương</th>
                </tr>
            </thead>
            <tbody class="mainBody">
                <tr class="row1">
                </tr>
                <tr class="row2">
                </tr>
                <tr class="row3">
                </tr>
                <tr class="row4">
                </tr>
                <tr class="row5">
                </tr>
                <tr class="row6">
                </tr>
                <tr class="row7">
                </tr>
                <tr class="row8">
                </tr>
            </tbody>
        </table>

        <script>
            function createRow(x) {
                let finalRow = "";
                let result = 0;
                for (let i = 1; i <= 10; i++) {
                    result = x * i;
                    let rowHTML = `<td>${x} x ${i} = ${result}</td>`;
                    finalRow += rowHTML;
                }
                console.log(finalRow);
                return finalRow
            }

            function createFullTable() {
                for (let i = 2; i < 10; i++) {
                    document.querySelector(`.row${i - 1}`).innerHTML = createRow(i);
                }
            }
            createFullTable();
        </script>
```

