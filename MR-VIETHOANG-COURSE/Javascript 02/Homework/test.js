var rows = 1;
var cols = 1;
var table = `<table border = '1'>`;

//     for(var i=0; i < rows; i++){
//         table = table + '<tr>';
//         for(var j=0; j<cols; j++){
//             var content = prompt('Enter content row: '+(i+1)+', col '+(j+1)+' :');
//             table = table + '<td>'+ content + '</td>';
//         }
//         table = table + '</tr>';
//     }
// document.write(table);

function createTable() {
	
	let row = 2;
	let col = 3;
	
	for (let r = 0; r <= row; r++) {
		
		
	}


	return `
		<h1>Table</h1>
		<table>
		<tr>
				<th>1234</th>
			</tr>
			<tr>
				<th>1234</th>
				<th>1234</th>
				<th>1234</th>
			</tr>
		</table>
	`


}

document.write(createTable());