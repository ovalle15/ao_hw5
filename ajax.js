
// Class that will hold information about the json file
class Elements
{
    // Sets the headings for the table
    static FetchTableHeadings ()
    {
        return ["School Name", "Major", "Degree Type", "Graduation"]
    }
    // Fetches the key names of the json file
    static FetchKeyNames ()
    {
        // Returns the keys
        return Object.keys(this.FetchJsonElement()[0])
    }
    // Fetches the whole json file and returns it as an array
    static FetchJsonElement ()
    {
        return json.Education
    }
}

// Function that generates the table
const generateTable = () => {
    // constants
    const jsonElements = Elements.FetchJsonElement() ;
    const headings = Elements.FetchTableHeadings();
    const KeyVals = Elements.FetchKeyNames();
    // Create the initial table element
    const table = document.createElement("table");
    // Creates the cpation of the table
    const caption = document.createElement('caption')
    // Create the text that should be added to the caption element
    const captionText = document.createTextNode("Education");
    // appends the text to the caption tag
    caption.appendChild(captionText);
    // appends the caption to the table
    table.appendChild(caption);

    //  Creates the row headings html element
    const rowheadings = document.createElement("tr")
    table.appendChild(rowheadings);

    // for the list of headings specified in "headings" adds
    // the heading to the heading table
    for (let heading of headings)
    {
        // First it creates an HTML element th
        const th = document.createElement("th");
        // creates the text, which is a heading
        const thinfo = document.createTextNode(heading);
        // appends the text
        th.appendChild(thinfo);
        // appends the text and row heading to the table
        rowheadings.appendChild(th);
    }

    // Adding the information for each  of the columns of the table
    // iterates through all of the elements in the jsonElements array
    for (let element of jsonElements)
    {
        // creates an row element
        const drow = document.createElement("tr");
        // appends it to the table
        table.appendChild(drow);
        // Iterates through the key values
        for (let key of KeyVals)

        {
            // adds a "td" element
            const td = document.createElement("td");
            // the element is a json object, for each key's value the value at this
            // html element will be added
            const tdinfo = document.createTextNode(element[key]);
            // appends the info to the td element
            td.appendChild(tdinfo);
            // appends the td element fo the row
            drow.appendChild(td);
        }

    }
// once all the iterations are complete append the table to the
// html where the "div-table" id is found.
document.getElementById('div-table').appendChild(table);

}


/** HTTP request, this application is hosted on: https://ovalle15.github.io/ao_hw5/ */
// Waits for the whole window to load to execute the function
window.onload = function() {
// function that will be executed when the button "fetch data" is clicked
(function() {
    var httpRequest;
    document.getElementById("button").onclick = function() {
        // requests the data json file
        makeRequest("data.json");
    };
    // makes the XMLHttp request
    function makeRequest(url) {
        httpRequest = new XMLHttpRequest();
        // if the request is not valid trows and alert
        if(!httpRequest){
            alert("Exiting: Cannot create an XMLHTTP instance");
            return false;
        }
        httpRequest.onreadystatechange = alertContents;
        httpRequest.open("GET", url);
        httpRequest.send();
    }
    function alertContents() {
        if (httpRequest.readyState === XMLHttpRequest.DONE) {
            if(httpRequest.status === 200) {
                // parse the reponse string into a json format
                json = JSON.parse(httpRequest.responseText)
                // generate the table with the json contents
                generateTable()
            } else {
                alert("There was a problem with the request");
            }
        }
    }})();
}



/// This a different approach, for more dinamy row-to-row manipulation, will

// function createTableCells() {
//     let tableCells = "";
//     for (const key in list1[0]) {
//         tableCells += `<td>${list1[0][key]}</td>`
//     }
//     return tableCells;
// }

// const templateTableRow = `
// <tr>
//     ${createTableCells()}
// </tr>
// `;

// document.getElementsById('div-table')[0].insertAdjacentHTML("beforeend", templateTableRow);