class Elements
{
    static FetchTableHeadings ()
    {
        return ["School Name", "Major", "Degree Type", "Graduation"]
    }
    static FetchKeyNames ()
    {
        return Object.keys(this.FetchJsonElement()[0])
    }
    static FetchJsonElement ()
    {
        return json.Education
    }
}

const generateTable = () => {

    const jsonElements = Elements.FetchJsonElement() ;
    const headings = Elements.FetchTableHeadings();
    const KeyVals = Elements.FetchKeyNames();

    const table = document.createElement("table");
    const caption = document.createElement('caption')

    const captionText = document.createTextNode("Education");

    caption.appendChild(captionText);
    table.appendChild(caption);

    const rowheadings = document.createElement("tr")
    table.appendChild(rowheadings);


    for (let heading of headings)
    {
        const th = document.createElement("th");
        const thinfo = document.createTextNode(heading);
        th.appendChild(thinfo);
        rowheadings.appendChild(th);
    }
    for (let element of jsonElements)
    {
        const drow = document.createElement("tr");
        table.appendChild(drow);

        for (let key of KeyVals)

        {
            const td = document.createElement("td");
            const tdinfo = document.createTextNode(element[key]);
            td.appendChild(tdinfo);
            drow.appendChild(td);
        }

    }

document.getElementById('div-table').appendChild(table);

}

window.onload = function() {
(function() {
    var httpRequest;
    document.getElementById("button").onclick = function() {
        makeRequest("data.json");
    };
    function makeRequest(url) {
        httpRequest = new XMLHttpRequest();

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
                json = JSON.parse(httpRequest.responseText)
                generateTable()
            } else {
                alert("There was a problem with the request");
            }
        }
    }})();
}




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