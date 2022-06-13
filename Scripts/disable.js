
function disableselect(_e) {
    return false
}

function reEnable() {
    return true
}

document.onselectstart = new Function("return false")
document.addEventListener('contextmenu', event => event.preventDefault());

if (window.sidebar) {
    document.onmousedown = disableselect
    document.onclick = reEnable
}

$(document).ready(function () {

    $("a").click();

});