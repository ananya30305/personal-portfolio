/* =========================================
   MOBILE NAVIGATION MENU
========================================= */

const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");


/*
   When the hamburger button is clicked,
   add/remove the "active" class.
*/

menuBtn.addEventListener("click", function () {

    const isActive = navLinks.classList.toggle("active");

    /*
       Update accessibility attribute.
       true = menu is open
       false = menu is closed
    */

    menuBtn.setAttribute("aria-expanded", isActive);

});


/* =========================================
   CLOSE MOBILE MENU AFTER CLICKING A LINK
========================================= */

const navigationLinks = document.querySelectorAll(".nav-links a");

navigationLinks.forEach(function (link) {

    link.addEventListener("click", function () {

        navLinks.classList.remove("active");

        menuBtn.setAttribute("aria-expanded", "false");

    });

});


/* =========================================
   BACK TO TOP BUTTON
========================================= */

const topBtn = document.getElementById("topBtn");


/*
   Show the button after the user
   scrolls down more than 500px.
*/

window.addEventListener("scroll", function () {

    if (window.scrollY > 500) {

        topBtn.classList.add("show");

    } else {

        topBtn.classList.remove("show");

    }

});


/*
   When the button is clicked,
   smoothly scroll to the top.
*/

topBtn.addEventListener("click", function () {

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

});


/* =========================================
   SCROLL REVEAL ANIMATION
========================================= */


/*
   IntersectionObserver detects when an
   element becomes visible on the screen.
*/

const revealObserver = new IntersectionObserver(

    function (entries) {

        entries.forEach(function (entry) {

            if (entry.isIntersecting) {

                entry.target.classList.add("visible");

                /*
                   Stop observing the element after
                   it has appeared.
                */

                revealObserver.unobserve(entry.target);

            }

        });

    },

    {
        threshold: 0.12
    }

);


/*
   Find all elements that have the
   "reveal" class.
*/

const revealElements = document.querySelectorAll(".reveal");


/*
   Start observing each element.
*/

revealElements.forEach(function (element) {

    revealObserver.observe(element);

});


/* =========================================
   CONTACT FORM VALIDATION
========================================= */

const contactForm = document.getElementById("contactForm");


/*
   Get form fields
*/

const nameInput = document.getElementById("name");

const emailInput = document.getElementById("email");

const messageInput = document.getElementById("message");


/*
   Get error message elements
*/

const nameError = document.getElementById("nameError");

const emailError = document.getElementById("emailError");

const messageError = document.getElementById("messageError");


/*
   Success message
*/

const formSuccess = document.getElementById("formSuccess");


/*
   Listen for form submission
*/

contactForm.addEventListener("submit", function (event) {

    /*
       Prevent the browser from
       refreshing the page.
    */

    event.preventDefault();


    /* -----------------------------------------
       CLEAR PREVIOUS MESSAGES
    ----------------------------------------- */

    nameError.textContent = "";

    emailError.textContent = "";

    messageError.textContent = "";

    formSuccess.textContent = "";


    /* -----------------------------------------
       GET VALUES
    ----------------------------------------- */

    const name = nameInput.value.trim();

    const email = emailInput.value.trim();

    const message = messageInput.value.trim();


    /* -----------------------------------------
       FORM VALIDATION
    ----------------------------------------- */

    let isValid = true;


    /*
       NAME VALIDATION
    */

    if (name === "") {

        nameError.textContent = "Please enter your name.";

        isValid = false;

    }

    else if (name.length < 2) {

        nameError.textContent =
            "Name must contain at least 2 characters.";

        isValid = false;

    }


    /*
       EMAIL VALIDATION
    */

    /*
       Basic email pattern:
       example@email.com
    */

    const emailPattern =
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/;


    if (email === "") {

        emailError.textContent =
            "Please enter your email.";

        isValid = false;

    }

    else if (!emailPattern.test(email)) {

        emailError.textContent =
            "Please enter a valid email address.";

        isValid = false;

    }


    /*
       MESSAGE VALIDATION
    */

    if (message === "") {

        messageError.textContent =
            "Please enter your message.";

        isValid = false;

    }

    else if (message.length < 10) {

        messageError.textContent =
            "Message must contain at least 10 characters.";

        isValid = false;

    }


    /* -----------------------------------------
       IF FORM IS VALID
    ----------------------------------------- */

    if (isValid) {

        formSuccess.textContent =
            "Message validated successfully! Thank you for contacting me.";

        /*
           Clear the form
        */

        contactForm.reset();

    }

});


/* =========================================
   CLEAR ERROR WHEN USER STARTS TYPING
========================================= */


/*
   Name field
*/

nameInput.addEventListener("input", function () {

    nameError.textContent = "";

    formSuccess.textContent = "";

});


/*
   Email field
*/

emailInput.addEventListener("input", function () {

    emailError.textContent = "";

    formSuccess.textContent = "";

});


/*
   Message field
*/

messageInput.addEventListener("input", function () {

    messageError.textContent = "";

    formSuccess.textContent = "";

});


/* =========================================
   CURRENT YEAR IN FOOTER
========================================= */


/*
   Find the footer paragraph.
*/

const footerText = document.querySelector(
    ".footer-content p"
);


/*
   Automatically use the current year.
*/

if (footerText) {

    footerText.innerHTML =
        `© ${new Date().getFullYear()} Ananya. All rights reserved.`;

}