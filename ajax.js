


const generateTable = () => {
    var content = '';
    for  (var i =0; responseInJson.events.length; i++){
        content += '<div class="event">';
    }
    return content;



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