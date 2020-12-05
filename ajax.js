



const generateTable = () => {

    list1 = responseInJson.Education;



    var schoolName = list1[0]['name'];
    var Major = list1[1]['major'];
    var Degree = list1[2]['degree'];
    var graduationDate = list1[3]['graduation'];





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