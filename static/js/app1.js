// import the data from data.js
const tableData = data;

// Reference the HTML table using D3
var tbody = d3.select("tbody");

// Create table
function buildTable(data) {
    tbody.html("");
// Loop through each object in the data and append row and cells for each value in the row
data.forEach((dataRow) => {
    // append a row to the table body
    let row = tbody.append("tr");
    //Loop through each field in the dataRow and add each value as a table cell
    Object.values(dataRow).forEach((val) => {
        let cell = row.append("td");
        cell.text(val);
    });
});
};

// Setting up function to handle clicks
function handleClick() { 
    let date = d3.select("#datetime").property("value");
    let filteredData = tableData;
    // check if date was entered and filter data using date.
    if (date) {
        filteredData = filteredData.filter(row => row.datetime === date);
    };
    // rebuild table using the filtered data
    buildTable(filteredData);
};

// Attach an event to listen for the form button
d3.selectAll("#filter-btn").on("click", handleClick);

// Build the table when the page loads
buildTable(tableData);
