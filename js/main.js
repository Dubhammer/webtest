
//Sticky

window.onscroll = function () { myFunction() };

var navbar = document.getElementById("navbar");
var bgnavbar = document.getElementById("bgnavbar");
var sticky = navbar.offsetTop;


function myFunction() {

    if (window.pageYOffset >= 10) {
        navbar.classList.add("sticky")
        bgnavbar.classList.add("stickyshadow")
    } else {
        navbar.classList.remove("sticky");
        bgnavbar.classList.remove("stickyshadow")
    }
}



const hamburger = document.querySelector(".hamburger");
const menu = document.querySelector(".menu");
const menuclick = document.querySelectorAll(".menulink");




//hamberger menu open
hamburger.addEventListener("click", mobileMenu);

function mobileMenu() {
    hamburger.classList.toggle("active");
    menu.classList.toggle("active");
}

//choosing each button closes menu
menuclick.forEach(n => n.addEventListener("click", closeMenu));

function closeMenu() {
    hamburger.classList.remove("active");
    menu.classList.remove("active");
}






// Dark mode
// https://codepen.io/cortez/pen/jOrNGGQ?editors=1010


var toggle = document.getElementById("darkmode");
var currentTheme = localStorage.getItem('theme');

if (currentTheme){
    document.documentElement.setAttribute('data-theme', currentTheme)

    if (currentTheme === 'dark') {
        toggle.checked = true;
    }
}


function switchTheme(e) {
    if (e.target.checked) {
        document.documentElement.setAttribute('data-theme', 'dark');
        localStorage.setItem('theme', 'dark');
    }
    else {
        document.documentElement.setAttribute('data-theme', 'light');
        localStorage.setItem('theme', 'light');
    }    
}

toggle.addEventListener('change', switchTheme, false);



//iframe loading

const vectaryframe = document.getElementById('vectaryframe');
const arloading = document.getElementById('arloading');

vectaryframe.addEventListener('load', function () {

    setTimeout(function () {

        arloading.style.display = 'none';

    }, 1500);
});



// //Trigger Button Animation when visible using Intersection Observer API
// //https://stackoverflow.com/questions/52626955/detecting-that-user-has-scrolled-to-the-bottom-of-the-div-without-scroll-event/52627221#52627221

// const workAnimated = document.getElementsByClassName("reskaletumbnail");

// const onIntersection = ([{isIntersecting, target}]) =>
//   isIntersecting && (target.style.backgroundColor = 'red');

// const io = new IntersectionObserver(onIntersection, {threshold: 1})

// io.observe(workAnimated)


// // target.style.backgroundSize  = "80%, 90%", target.style.backgroundPosition  = "center, 50% 30%"