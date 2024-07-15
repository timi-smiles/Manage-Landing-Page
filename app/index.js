const $menuIcon = document.querySelector(".menu-icon");
const $mobileNav = document.querySelector(".mobile-nav");
const $overlay = document.querySelector(".overlay");

$menuIcon.addEventListener("click", e => {
    $mobileNav.classList.toggle("hide");
    $overlay.classList.toggle("hide");
})

//  Slider

const $slider = document.querySelector(".slider-track");
const $slideNum = document.querySelectorAll(".slider-num");
count = 1;
slide = 1;

const slider = setInterval(function() {
    if(count === 4) {
        count = 0;
        slide = 0;   
    }
    
    $slider.style.transform = `translateX(calc(${count} * -101vw))`;
    count++;

    if(slide === 0) {
        $slideNum[0].classList.add("active");
        $slideNum[3].classList.remove("active");
        slide++;
        return;
    }

    if(slide >= 1) {
    $slideNum[slide-1].classList.remove("active");
    $slideNum[slide].classList.add("active");
    slide++;
    }

}, 4000);

// Email input
const $emailInput = document.querySelector("#email");
const $form = document.querySelector(".newsletter");
const $errorMsg = document.querySelector(".error");
const $sucessMsg = document.querySelector(".success");
const emailPattern = /[a-zA-Z0-9_]+([.][a-zA-Z0-9_]+)*@[a-zA-Z0-9_]+([.][a-zA-Z0-9_]+)*[.][a-zA-Z]{2,5}/;
let valid = false;

$emailInput.addEventListener("input", e => {
    if(emailPattern.test(e.target.value)) {
        valid = true;
        $errorMsg.classList.add("hide");
    } else {
        valid = false;
        $errorMsg.classList.remove("hide");
    }
})

$form.addEventListener("submit", e => {
    e.preventDefault();

    if(valid === true) {
        $sucessMsg.classList.remove("hide");

        setTimeout(() => {
            $sucessMsg.textContent = "Sent";
        }, 3000);

        setTimeout(() => {
            $sucessMsg.classList.add("hide");
            $sucessMsg.textContent = "Sending...";
            valid = false;
            $form.reset();
        },5000)
    } else {
        $errorMsg.classList.remove("hide");
    }
})

