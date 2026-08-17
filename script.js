/* =========================================
   MOBILE NAVIGATION MENU
========================================= */

const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");


/*
   Open and close the mobile navigation menu.
*/

if (menuBtn && navLinks) {

    menuBtn.addEventListener("click", function () {

        const isActive = navLinks.classList.toggle("active");

        /*
           Update accessibility attribute.
           true  = menu is open
           false = menu is closed
        */

        menuBtn.setAttribute("aria-expanded", isActive);

    });


    /* =========================================
       CLOSE MENU AFTER CLICKING A LINK
    ========================================= */

    const navigationLinks =
        document.querySelectorAll(".nav-links a");


    navigationLinks.forEach(function (link) {

        link.addEventListener("click", function () {

            navLinks.classList.remove("active");

            menuBtn.setAttribute("aria-expanded", "false");

        });

    });

}


/* =========================================
   BACK TO TOP BUTTON
========================================= */

const topBtn = document.getElementById("topBtn");


if (topBtn) {

    /*
       Show the button after scrolling
       more than 500 pixels.
    */

    window.addEventListener("scroll", function () {

        if (window.scrollY > 500) {

            topBtn.classList.add("show");

        } else {

            topBtn.classList.remove("show");

        }

    });


    /*
       Scroll smoothly back to the top.
    */

    topBtn.addEventListener("click", function () {

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    });

}


/* =========================================
   SCROLL REVEAL ANIMATION
========================================= */


/*
   IntersectionObserver detects when elements
   become visible on the screen.
*/

const revealObserver = new IntersectionObserver(

    function (entries) {

        entries.forEach(function (entry) {

            if (entry.isIntersecting) {

                entry.target.classList.add("visible");

                /*
                   Stop observing after the
                   animation has happened.
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
   Find all elements with the "reveal" class.
*/

const revealElements =
    document.querySelectorAll(".reveal");


/*
   Observe each reveal element.
*/

revealElements.forEach(function (element) {

    revealObserver.observe(element);

});


/* =========================================
   CURRENT YEAR IN FOOTER
========================================= */


/*
   Find the footer paragraph.
*/

const footerText =
    document.querySelector(".footer-content p");


/*
   Automatically display the current year.
*/

if (footerText) {

    footerText.textContent =
        `© ${new Date().getFullYear()} Ananya P. All rights reserved.`;

}