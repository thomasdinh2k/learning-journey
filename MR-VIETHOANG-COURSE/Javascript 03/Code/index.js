// Make Array Function
const makeArray = () => {
  let input;
  finalArray = [];
  while (input != 0) {
    input = prompt(
      `Nhập giá trị muốn lưu vào mảng\nNhập "0" để xem toàn bộ mảng`
    );
    finalArray.push(input);
    console.log(`Đã nhập giá trị [[${input}]] vào mảng!`);
  }
  renderFinalArray = finalArray.join(", ");
  console.log(
    `Mảng đã tạo bao gồm những giá trị sau: [[ ${renderFinalArray} ]]`
  );
  console.log(`Đóng chương trình`);
  return renderFinalArray;
};

// Make Even Odd Function From Array
const makeEvenOddArray = (x) => {
  let input;
  finalArray = [];

  while (input != 0) {
    input = prompt(
      `Nhập đủ ${x} giá trị số để bắt đầu chương trình [${finalArray.length}/${x}]`
    );

    if (isNaN(parseInt(input, 10))) {
      alert(`${input} không phải giá trị số, vui lòng nhập lại`);
    } else {
      if (input >= 0) {
        console.log(`Đã thêm ${input}`);
      } else {
        console.log(`Đã thêm ${Math.abs(input)} vì ${input} là số nguyên âm`);
      }
      finalArray.push(Math.abs(input));
    }

    if (finalArray.length == x) {
      break;
    }
  }

  //   renderFinalArray = finalArray.join(", ");
  console.log(finalArray);
  const oddArray = finalArray.filter((num) => num % 2 !== 0);
  const evenArray = finalArray.filter((num) => num % 2 === 0);

  console.log(oddArray);
  console.log(evenArray);
  console.log(`Số nguyên dương lẻ ${oddArray.join(", ")}`);
  console.log(`Số nguyên dương chẵn ${evenArray.join(", ")}`);
};

// Create a table function
function createTable() {
  // Ask user for Col content value
  let numOfCol = prompt(`Nhập số cột muốn tạo? `);
  let numOfRow = prompt(`Nhập số hàng muốn tạo? `);
  let colContent = [];
  while (colContent.length < numOfCol) {
    let tempContent = prompt(
      `Lập dữ liệu cho cột ${colContent.length + 1}/${numOfCol}`
    );
    colContent.push(tempContent);
  }
  let firstCol = ``;
  for (let i = 1; i <= numOfCol; i++) {
    firstCol += `<td>${colContent[i - 1]}</td>\n`;
    var firstColHTML = `<tr>${firstCol}</tr>`;
  }
  console.log(firstColHTML);

  let colHTML = ``;
  for (let i = 1; i <= numOfCol; i++) {
    colHTML += `<td>.....</td>\n`;
  }
  console.log(colHTML);
  // Create row
  console.log(`Creating table with ${numOfRow} rows`);
  let rowHTML = ``;
  for (let i = 1; i < numOfRow; i++) {
    rowHTML += `<tr>
      ${colHTML}
    </tr>\n`;
  }
  // console.log(rowHTML);
  let finalHTML = firstColHTML + rowHTML;
  // Render to Table
  const tableElement = document.querySelector(`.auto-table`);
  tableElement.innerHTML = finalHTML;
}


