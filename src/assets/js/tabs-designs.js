var web = document.getElementById("web");
var mobile = document.getElementById("mobile");
var desktop = document.getElementById("desktop");
var other = document.getElementById("other");

var btnWeb = document.getElementById("btn-web");
var btnMobile = document.getElementById("btn-mobile");
var btnDesktop = document.getElementById("btn-desktop");
var btnOther = document.getElementById("btn-other");

function openWeb() {
    web.style.display = "block";
    mobile.style.display = "none";
    desktop.style.display = "none";
    other.style.display = "none";

    btnWeb.style.background = "#ff0096";
    btnMobile.style.background = "transparent";
    btnDesktop.style.background = "transparent";
    btnOther.style.background = "transparent";

    btnWeb.style.color = "#ffff";
    btnMobile.style.color = "#020b16";
    btnDesktop.style.color = "#020b16";
    btnOther.style.color = "#020b16";
    
}

function openMobile() {
    web.style.display = "none";
    mobile.style.display = "block";
    desktop.style.display = "none";
    other.style.display = "none";
    btnWeb.style.background = "transparent";
    btnMobile.style.background = "#ff0096";
    btnDesktop.style.background = "transparent";
    btnOther.style.background = "transparent";

    btnWeb.style.color = "#020b16";
    btnMobile.style.color = "#ffff";
    btnDesktop.style.color = "#020b16";
    btnOther.style.color = "#020b16";


}

function openDesktop() {
    web.style.display = "none";
    mobile.style.display = "none";
    desktop.style.display = "block";
    other.style.display = "none";

    btnWeb.style.background = "transparent";
    btnMobile.style.background = "transparent";
    btnDesktop.style.background = "#ff0096";
    btnOther.style.background = "transparent";

    btnWeb.style.color = "#020b16";
    btnMobile.style.color = "#020b16";
    btnDesktop.style.color = "#ffff";
    btnOther.style.color = "#020b16";
}

function openOther() {
    web.style.display = "none";
    mobile.style.display = "none";
    desktop.style.display = "none";
    other.style.display = "block";

    btnWeb.style.background = "transparent";
    btnMobile.style.background = "transparent";
    btnDesktop.style.background = "transparent";
    btnOther.style.background = "#ff0096";

    btnWeb.style.color = "#020b16";
    btnMobile.style.color = "#020b16";
    btnDesktop.style.color = "#020b16";
    btnOther.style.color = "#ffff";
}

