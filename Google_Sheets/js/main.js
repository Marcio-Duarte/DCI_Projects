$('#load-btn').click(async function () {
    console.time('executed in');
    let data = await fetchGS();
    $('#table-data').empty();
    createTableHead(data);
    createTableBody(data);
    console.timeEnd('executed in');
});

function createTableHead(data) {
    let table_row = $("<tr></tr>");
    data[0].forEach(function (cell) {
        table_row.append(`<th scope="col">${cell}</th>`);
    });
    $('#table-data').append($(`<thead></thead>`).append(table_row));
}

function createTableBody(data) {
    let table_body = $('<tbody></tbody>');
    data.forEach(function (row, index) {
        if (index > 0) {
            let table_row = $("<tr></tr>");
            row.forEach(function (cell) {
                table_row.append(`<td scope="col">${cell}</td>`);
            });
            $(table_body).append(table_row);
        }
    });
    $('#table-data').append(table_body);
}