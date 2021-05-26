$(document).ready(function () {
    $(window).scroll(function () {
        if ($("body,html").scrollTop() > 150) {
            $(".nav").addClass('fixed__menu');
            $(".nav__full").css("box-shadow", "0px 2px 5px rgb(158, 155, 155)")
            $(".back__top").css("display", "block");

        }
        else {
            $(".back__top").css("display", "none");
            $(".nav").removeClass('fixed__menu');
            $(".nav__full").css("border-bottom", "none")
            $(".nav__full").css("box-shadow", "none")

        }
    });
});

function clicks(n) {
    let mySliderss = document.querySelectorAll(".mySliderss__img");
    for (let i = 0; i < mySliderss.length; i++) {
        mySliderss[i].style.display = "none";
    }
    mySliderss[n - 1].style.display = "block";
    let dots = document.querySelectorAll(".tron");
    for (let i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" focus__dot", "");
    }
    dots[n - 1].className += " focus__dot";
}
let next = 0;
function nextLeft() {
    let dots = document.querySelectorAll(".tron");
    for (let i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" focus__dot", "");
    }
    let mySliderss = document.querySelectorAll(".mySliderss__img");
    for (let i = 0; i < mySliderss.length; i++) {
        mySliderss[i].style.display = "none";
    }
    if (next == 0) {
        next = 2;
        mySliderss[next].style.display = "block";
        dots[next].className += " focus__dot";
        console.log(next);
    }
    else if (next == 2) {
        next--;
        mySliderss[next].style.display = "block";
        dots[next].className += " focus__dot";
        console.log(next);
    }
    else if (next == 1) {
        next--;
        mySliderss[next].style.display = "block";
        dots[next].className += " focus__dot";
        console.log(next);
    }


}
function nextRight() {
    let dots = document.querySelectorAll(".tron");
    for (let i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" focus__dot", "");
    }
    let mySliderss = document.querySelectorAll(".mySliderss__img");
    for (let i = 0; i < mySliderss.length; i++) {
        mySliderss[i].style.display = "none";
    }
    if (next == 0) {
        next = 1;
        mySliderss[next].style.display = "block";
        dots[next].className += " focus__dot";
        console.log(next);
    }
    else if (next == 1) {
        next++;
        mySliderss[next].style.display = "block";
        dots[next].className += " focus__dot";
        console.log(next);
    }
    else if (next == 2) {
        next = 0;
        mySliderss[next].style.display = "block";
        dots[next].className += " focus__dot";
        console.log(next);
    }
}

window.$(".banner__title").css("padding-top", "35%");
window.$(".btn__banner").css("padding-top", "5%");




// portfolio
let listNut = $(".list__buton")
function all__() {
    $(".portfolio__content-item-img.mot__img").css("display", "block");
    $(".portfolio__content-item-img.ba__img").css("display", "block");
    $(".portfolio__content-item-img.hai__img").css("display", "block");
    console.log(listNut.length);
    listNut[0].className += " portfolio__content-menu-active"
    listNut[1].className.replace("list__buton portfolio__content-menu-active", "list__buton")
    listNut[2].className.replace("list__buton portfolio__content-menu-active", "list__buton")
    listNut[3].className.replace("list__buton portfolio__content-menu-active", "list__buton")

}

function app() {
    $(".portfolio__content-item-img.mot__img").css("display", "block");
    $(".portfolio__content-item-img.ba__img").css("display", "none");
    $(".portfolio__content-item-img.hai__img").css("display", "none");
    listNut[1].className += " portfolio__content-menu-active"
    listNut[0].className.replace("list__buton portfolio__content-menu-active", "list__buton")
    listNut[2].className.replace("list__buton portfolio__content-menu-active", "list__buton")
    listNut[3].className.replace("list__buton portfolio__content-menu-active", "list__buton")
}
function web() {
    $(".portfolio__content-item-img.mot__img").css("display", "none");
    $(".portfolio__content-item-img.ba__img").css("display", "block");
    $(".portfolio__content-item-img.hai__img").css("display", "none");
    listNut[2].className += " portfolio__content-menu-active"
    listNut[0].className.replace("list__buton portfolio__content-menu-active", "list__buton")
    listNut[1].className.replace("list__buton portfolio__content-menu-active", "list__buton")
    listNut[3].className.replace("list__buton portfolio__content-menu-active", "list__buton")
}
function card() {
    $(".portfolio__content-item-img.mot__img").css("display", "none");
    $(".portfolio__content-item-img.ba__img").css("display", "none");
    $(".portfolio__content-item-img.hai__img").css("display", "block");
    listNut[3].className += " portfolio__content-menu-active"
    listNut[1].className.replace("list__buton portfolio__content-menu-active", "list__buton")
    listNut[2].className.replace("list__buton portfolio__content-menu-active", "list__buton")
    listNut[0].className.replace("list__buton portfolio__content-menu-active", "list__buton")
}

function oms() {
    console.log("ffff");
}