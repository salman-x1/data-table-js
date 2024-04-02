
// Add Modal
let modal = document.getElementById("addModal");
let addRowBtn = document.getElementById('addModalButton')
let close = document.getElementsByClassName('close')[0];

addRowBtn.onclick = function () {
    modal.style.display = 'block';
}

close.onclick = function () {
    modal.style.display = 'none';
}

window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = 'none';
    }
}

let addRowForm = document.getElementById('addRowForm');
let dataTable = document.getElementById('dataTable').getElementsByTagName('tbody')[0];
let rowCount = 7;

addRowForm.addEventListener('submit', function (event) {
    event.preventDefault();

    let productName = document.getElementById('productName').value;
    let productTitle = document.getElementById('productTitle').value;
    let productDesc = document.getElementById('productDesc').value;
    let productVendor = document.getElementById('productVendor').value;
    let inStock = document.getElementById('inStock').value;
    let buyingPrice = document.getElementById('buyingPrice').value;
    let salePrice = document.getElementById('salePrice').value;
    let purchaseQuantity = document.getElementById('purchaseQuantity').value;
    let productType = document.getElementById('productType').value;
    let shippingRates = document.getElementById('shippingRates').value;
    let refillLimit = document.getElementById('refillLimit').value;
    let productAddress = document.getElementById('productAddress').value;

    let newRow = dataTable.insertRow();
    rowCount++;
    newRow.id = 'row_' + rowCount;

    let dataTableCell_1 = newRow.insertCell(0);
    let dataTableCell_2 = newRow.insertCell(1);
    let dataTableCell_3 = newRow.insertCell(2);
    let dataTableCell_4 = newRow.insertCell(3);
    let dataTableCell_5 = newRow.insertCell(4);
    let dataTableCell_6 = newRow.insertCell(5);
    let dataTableCell_7 = newRow.insertCell(6);
    let dataTableCell_8 = newRow.insertCell(7);
    let dataTableCell_9 = newRow.insertCell(8);
    let dataTableCell_10 = newRow.insertCell(9);
    let dataTableCell_11 = newRow.insertCell(10);
    let dataTableCell_12 = newRow.insertCell(11);
    let dataTableCell_13 = newRow.insertCell(12);
    let dataTableCell_14 = newRow.insertCell(13);

    // let dataTableCell_13 = newRow.insertCell(12);

    // dataTableCell_1.innerHTML = productName;
    dataTableCell_1.innerHTML = "<input type='checkbox'>";
    dataTableCell_2.innerHTML = rowCount;
    dataTableCell_3.innerHTML = productName;
    dataTableCell_4.innerHTML = productTitle;
    dataTableCell_5.innerHTML = productDesc;
    dataTableCell_6.innerHTML = productVendor;
    dataTableCell_7.innerHTML = inStock;
    dataTableCell_8.innerHTML = buyingPrice;
    dataTableCell_9.innerHTML = salePrice;
    dataTableCell_10.innerHTML = purchaseQuantity;
    dataTableCell_11.innerHTML = productType;
    dataTableCell_12.innerHTML = shippingRates
    dataTableCell_13.innerHTML = refillLimit;
    dataTableCell_14.innerHTML = productAddress;
    // dataTableCell_13.innerHTML

    modal.style.display = 'none';

    addRowForm.reset();

})

dataTable.addEventListener('change', function (event) {
    let target = event.target;
    if (target.tagName === 'INPUT' && target.type === 'checkbox') {
        let row = target.closest('tr');
        let id = row.cells[1].textContent;
        let productName = row.cells[2].textContent;
        let productTitle = row.cells[3].textContent;
        let productDesc = row.cells[4].textContent;
        let productVendor = row.cells[5].textContent;
        let inStock = row.cells[6].textContent;
        let buyingPrice = row.cells[7].textContent;
        let salePrice = row.cells[8].textContent;
        let purchaseQuantity = row.cells[9].textContent;
        let productType = row.cells[10].textContent;
        let shippingRates = row.cells[11].textContent;
        let refillLimit = row.cells[12].textContent;
        let productAddress = row.cells[13].textContent;


        // If checkbox is checked, populate form fields with row data
        if (target.checked) {
            editRowIdField.value = id;
            editNameField.value = name;
            editAgeField.value = age;

            // Open the modal for editing
            modal.style.display = "block";
        }
    }
});


//Add Column in Data Table Function 
function addColumn() {
    const dropdown = document.getElementById("addColumnDropdown");
    const selectedOption = dropdown.options[dropdown.selectedIndex].value;

    const table = document.getElementById("dataTable");
    const headerRow = table.querySelector("thead tr");

    
    if (!headerRow.querySelector(`th[data-name = "${selectedOption}"]`)) {
        const newColumn = document.createElement("th");
        newColumn.textContent = selectedOption;
        newColumn.setAttribute("data-name", selectedOption); // Set data-name attribute for identifying column
        newColumn.classList.add("sortable");
        headerRow.appendChild(newColumn);

        const bodyRows = table.querySelectorAll("tbody tr");
        bodyRows.forEach(row => {
            const cell = document.createElement("td");
            cell.textContent = "New Data";
            row.appendChild(cell);
        });
    } else {
        const decision = confirm("Column already exists. Do you want to delete or disable it?");
        if (decision) {
            const action = prompt("Type 'delete' to delete the column or 'disable' to disable it.");
            if (action === "delete") {
                const columnName = headerRow.querySelector(`th[data-name = "${selectedOption}"]`).getAttribute("data-name");
                deleteColumn(columnName);
            } else if (action === "disable") {
                const columnName = headerRow.querySelector(`th[data-name = "${selectedOption}"]`).getAttribute("data-name");
                disableColumn(columnName);
            } else {
                alert("Invalid action. Please type 'delete' or 'disable'.");
            }
        }
    }
}

//Delete Column 

function deleteColumn() {
    const dropdown = document.getElementById("addColumnDropdown");
    const selectedOption = dropdown.options[dropdown.selectedIndex].value;

    const table = document.getElementById("dataTable");
    const headerRow = table.querySelector("thead tr");
    const columnIndex = Array.from(headerRow.children).findIndex(th => th.textContent === selectedOption);

    if (columnIndex !== -1) {
        headerRow.children[columnIndex].remove();
        const bodyRows = table.querySelectorAll("tbody tr");
        bodyRows.forEach(row => {
            row.children[columnIndex].remove();
        });
    } else {
        alert("Column does not exist!");
    }
}





// let getTable = document.getElementById('dataTable')
// const getButton = document.getElementById('addColumn')


// document.addEventListener("DOMContentLoaded", function () {
//     const form = document.getElementById('searchData');
//     form.addEventListener('submit', function (event) {
//         event.preventDefault();

//         const searchInput = document.getElementById('inputSearch').value.trim().toLowerCase();
//         const rows = document.querySelectorAll("tbody tr");
//         console.log(rows);
//         rows.forEach((row) => {
//             const tableDataCells = row.querySelectorAll('td');
//             let inputResult = false;
//             console.log(tableDataCells);

//             tableDataCells.forEach((cells) => {
//                 if (cells.textContent.trim().toLowerCase().includes(searchInput)) {
//                     inputResult = true;
//                 }
//             })
//             row.style.display = inputResult ? "table-row" : "none";
//         })
//     })

// })

document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("searchForm");
    form.addEventListener("submit", function (event) {
        event.preventDefault();
        const searchTerm = document
            .getElementById("searchInput")
            .value.trim()
            .toLowerCase();

        const rows = document.querySelectorAll("tbody tr");
        rows.forEach((row) => {
            const cells = row.querySelectorAll("td"); // Select only td elements within each tr
            let found = false;
            cells.forEach((cell) => {
                if (cell.textContent.trim().toLowerCase().includes(searchTerm)) {
                    found = true;
                }

            });
            row.style.display = found ? "table-row" : "none";
        });
    });
});






// function searchTable() {
//     var input, filter, table, tr, td, i, txtValue;
//     input = document.getElementById("searchInput");
//     filter = input.value.toUpperCase();
//     table = document.getElementById("dataTable");
//     tr = table.getElementsByTagName("tr");
//     for (i = 0; i < tr.length; i++) {
//         td = tr[i].getElementsByTagName("td")[2]; // Assuming search is based on the first column (Name)
//         if (td) {
//             txtValue = td.textContent || td.innerText;
//             if (txtValue.toUpperCase().indexOf(filter) > -1) {
//                 tr[i].style.display = "";
//             } else {
//                 tr[i].style.display = "none";
//             }
//         }
//     }
// }

// const searchInput = document.getElementById('inputSearch');
// const searchButton = document.getElementById('searchButton');

