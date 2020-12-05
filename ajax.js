
list1 = responseInJson.Education;


const generateRows = () => {

}

const generateHeaders = () => {


}

const generateTable = () => {

    let tableHTML = "<table>"

        tableHTML += "<tr>"
            tableHTML += "<td>&nbsp;</td>"
            tableHTML += "<th>Program/Major</th>"
            tableHTML += "<th>Degree Type</th>"
            tableHTML +="<th>Graduation Year</th>"
        tableHTML += "</tr>"

        tableHTML += "<tr>"
        for (var i = 0; i < list1.length; i++){
            tableHTML += "<th>${list1[i].name}</th>"
            // var schoolNameValue = ;
            // var MajorValue = list1[i].major;
            // var DegreeValue = list1[i].degree;
            // var graduationDateValue = list1[i].graduation;
     }

        tableHTML += "</tr>"



    tableHTML += "</table>"


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
                responseInJson = JSON.parse(httpRequest.responseText)
                generateTable(responseInJson)
            } else {
                alert("There was a problem with the request");
            }
        }
    }})();
}