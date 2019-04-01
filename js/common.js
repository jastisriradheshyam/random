var relativePathRoot = "";
document.addEventListener("DOMContentLoaded", function () {
    relativePathRoot = document.getElementById("relative-path-root").innerHTML;
    var commonDataRequest = new XMLHttpRequest();
    commonDataRequest.onreadystatechange = function () {
        // Checking the ready state and response
        if (this.readyState == 4 && this.status == 200) {
            let data = JSON.parse(this.response);
            addDataToBodyFooter(document.getElementsByClassName("body-footer")[0], data);
        }
    };
    commonDataRequest.open("GET", relativePathRoot + "/data/common-data.json", true);
    commonDataRequest.send(null);
});

/**
 * add data to body footer div
 * @param {object} footerObject 
 * @param {object} data 
 */
function addDataToBodyFooter(footerObject, data) {
    footerObject.innerHTML = '';

    // horizontal line div
    var hrDiv = document.createElement("div");
    hrDiv.setAttribute("class", "hr-line");
    footerObject.appendChild(hrDiv);

    // home span
    var homeSpan = document.createElement("span");
    var anchor = document.createElement("a");
    anchor.href = document.getElementById("relative-path-root").innerHTML + `index.html`;
    anchor.innerHTML = "<< home >>";
    homeSpan.appendChild(anchor);
    footerObject.appendChild(homeSpan);

    // break
    footerObject.appendChild(document.createElement("br"));

    // name span
    var nameSpan = document.createElement("span");
    nameSpan.innerHTML = data.name;
    footerObject.appendChild(nameSpan);
};