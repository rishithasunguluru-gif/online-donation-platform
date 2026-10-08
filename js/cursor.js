document.addEventListener("DOMContentLoaded", () => {

    /* ==========================================
       MOVING HEART CURSOR
    ========================================== */

    const heart = document.createElement("div");

    heart.className = "cursor-heart";

    heart.innerHTML = "♥";

    document.body.appendChild(heart);


    let mouseX = 0;
    let mouseY = 0;

    let heartX = 0;
    let heartY = 0;


    document.addEventListener("mousemove", (event) => {

        mouseX = event.clientX;
        mouseY = event.clientY;

    });


    function animateHeart() {

        heartX += (mouseX - heartX) * 0.15;

        heartY += (mouseY - heartY) * 0.15;

        heart.style.left = heartX + "px";

        heart.style.top = heartY + "px";

        requestAnimationFrame(animateHeart);

    }


    animateHeart();


    /* ==========================================
       HEART TRAIL
    ========================================== */

    let lastTrailTime = 0;


    document.addEventListener("mousemove", (event) => {

        const now = Date.now();


        if (now - lastTrailTime < 90) {
            return;
        }


        lastTrailTime = now;


        const trail = document.createElement("span");

        trail.className = "heart-trail";

        trail.innerHTML = "♥";

        trail.style.left = event.clientX + "px";

        trail.style.top = event.clientY + "px";


        document.body.appendChild(trail);


        setTimeout(() => {

            trail.remove();

        }, 600);

    });



    /* ==========================================
       ACTIVE NAVIGATION
    ========================================== */

    const currentPage =
        window.location.pathname.split("/").pop();


    const navLinks =
        document.querySelectorAll(".navbar nav a");


    navLinks.forEach(function(link) {

        const linkPage =
            link.getAttribute("href");


        if (!linkPage) {
            return;
        }


        /*
           Ignore special links such as
           external links or # links
        */

        if (
            linkPage.startsWith("#") ||
            linkPage.startsWith("http")
        ) {
            return;
        }


        /*
           Compare current page with
           navbar link page
        */

        if (linkPage === currentPage) {

            link.classList.add("active");

        }

    });


    /*
       When opening index.html,
       highlight Home.
    */

    if (
        currentPage === "" ||
        currentPage === "index.html"
    ) {

        navLinks.forEach(function(link) {

            if (
                link.getAttribute("href") ===
                "index.html"
            ) {

                link.classList.add("active");

            }

        });

    }

});