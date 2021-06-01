// tabs categoria diseños 
var web = document.getElementById("web");
var mobile = document.getElementById("mobile");
var desktop = document.getElementById("desktop");
var all = document.getElementById("all");

var btnWeb = document.getElementById("btn-web");
var btnMobile = document.getElementById("btn-mobile");
var btnDesktop = document.getElementById("btn-desktop");
var btnAll = document.getElementById("btn-all");


// Galeria de imagenes
var imagenes = [1, 2, 3, 4, 5, 6, 7, 8, 9];
var galeria = document.getElementById("galeria");

var imagenesMobile = [1, 2, 3, 4];
var galeriaMobile = document.getElementById("galeriamobile");

function openWeb() {
    // display 
    web.style.display = "block";
    mobile.style.display = "none";
    desktop.style.display = "none";
    all.style.display = "none";
    // transition 
    web.style.transitionDelay = "0.4s";
    mobile.style.transitionDelay = "0s";
    desktop.style.transitionDelay = "0s";
    all.style.transitionDelay = "0";
    // color botones 
    btnWeb.style.background = "#ff0096";
    btnMobile.style.background = "transparent";
    btnDesktop.style.background = "transparent";
    btnAll.style.background = "transparent";
    // background botones 
    btnWeb.style.color = "#ffff";
    btnMobile.style.color = "#020b16";
    btnDesktop.style.color = "#020b16";
    btnAll.style.color = "#020b16";

}

function openMobile() {
    web.style.display = "none";
    mobile.style.display = "block";
    desktop.style.display = "none";
    all.style.display = "none";

    web.style.transitionDelay = "0s";
    mobile.style.transitionDelay = "0.4s";
    desktop.style.transitionDelay = "0s";
    all.style.transitionDelay = "0s";

    btnWeb.style.background = "transparent";
    btnMobile.style.background = "#ff0096";
    btnDesktop.style.background = "transparent";
    btnAll.style.background = "transparent";

    btnWeb.style.color = "#020b16";
    btnMobile.style.color = "#ffff";
    btnDesktop.style.color = "#020b16";
    btnAll.style.color = "#020b16";
}

function openDesktop() {
    web.style.display = "none";
    mobile.style.display = "none";
    desktop.style.display = "block";
    all.style.display = "none";

    web.style.transitionDelay = "0s";
    mobile.style.transitionDelay = "0s";
    desktop.style.transitionDelay = "0.4s";
    all.style.transitionDelay = "0s";

    btnWeb.style.background = "transparent";
    btnMobile.style.background = "transparent";
    btnDesktop.style.background = "#ff0096";
    btnAll.style.background = "transparent";

    btnWeb.style.color = "#020b16";
    btnMobile.style.color = "#020b16";
    btnDesktop.style.color = "#ffff";
    btnAll.style.color = "#020b16";
}

function openAll() {
    web.style.display = "none";
    mobile.style.display = "none";
    desktop.style.display = "none";
    all.style.display = "block";

    web.style.transitionDelay = "0s";
    mobile.style.transitionDelay = "0s";
    desktop.style.transitionDelay = "0s";
    all.style.transitionDelay = "0.4s";

    btnWeb.style.background = "transparent";
    btnMobile.style.background = "transparent";
    btnDesktop.style.background = "transparent";
    btnAll.style.background = "#ff0096";

    btnWeb.style.color = "#020b16";
    btnMobile.style.color = "#020b16";
    btnDesktop.style.color = "#020b16";
    btnAll.style.color = "#ffff";
}


for (imagen of imagenes) {
    galeria.innerHTML += `
    <div class="card">
        <a data-toggle="modal" data-target="#modalall">
            <img class="card-img-top" src="/assets/images/designs/${imagen}.png" alt="">
        </a>
    </div>
    `
}

for (imagen of imagenesMobile) {
    galeriaMobile.innerHTML += `
    <div class="card">
        <a data-toggle="modal" data-target="#modalall">
            <img class="card-img-top" src="/assets/images/designs/mobile/${imagen}.png" alt="">
        </a>
    </div>
    `
}



