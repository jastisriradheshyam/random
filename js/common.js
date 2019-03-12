var relativePathRoot = "";
document.addEventListener("DOMContentLoaded", function () {
    relativePathRoot = document.getElementById("relative-path-root").innerHTML;
    var commonDataRequest = new XMLHttpRequest();
    commonDataRequest.onreadystatechange = function () {
        // Checking the ready state and response
        if (this.readyState == 4 && this.status == 200) {
            let data = JSON.parse(this.response);
            document.getElementsByClassName("body-footer")[0].innerHTML = data.name;
        }
    };
    commonDataRequest.open("GET", relativePathRoot + "/data/common-data.json", true);
    commonDataRequest.send(null);
});