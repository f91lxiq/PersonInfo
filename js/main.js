var xmlHttp;
var data;
function showExp() {

    if (window.XMLHttpRequest) {
        xmlHttp = new XMLHttpRequest();
    } else {
        if (window.ActiveXObject) {
            xmlHttp = new ActiveXObject("Microsoft.XMLHTTP");
        } else {
            xmlHttp = null;
        }
    }
    xmlHttp.onreadystatechange = checkStatus;
    xmlHttp.open("GET", "/data/title.jp.json", true);

    xmlHttp.send(null);
}

function replaceWord(mapDate) {
    var replaceDatas = document.getElementsByClassName("dataTeyp");
    var tempData;
    [].forEach.call(replaceDatas, function (el) {
        el.innerHTML = el.innerHTML.replace(el.innerHTML, mapDate[el.innerHTML]);
    });
}

function checkStatus(showtype) {
    if (xmlHttp.readyState == 4 && xmlHttp.status == 200) {
        data = JSON.parse(xmlHttp.responseText);
        replaceWord(data);
    } else {

    }
}