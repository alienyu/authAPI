for(var key in apiData) {
    var dom = document.getElementById(key)
    if(dom) {
        var text = JSON.stringify(apiData[key]);
        dom.innerText = text;
    }
}