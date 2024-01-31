

// header flutter js
var bottomNavbar = document.querySelector(".header-main");
var logo = document.querySelector(".logo");
var cssmenu = document.querySelector("#cssmenu");

window.addEventListener('scroll', () => {
    if (window.innerWidth > 768) {
        console.log("heloooooeweweooo");
        if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
            bottomNavbar.style.position = "fixed";
            bottomNavbar.style.top = "0";
            bottomNavbar.style.textAlign = "center";
            // bottomNavbar.style.height = "20%";
            bottomNavbar.style.width = "100%";
            bottomNavbar.style.backgroundColor = "white";
            bottomNavbar.style.boxShadow = "0 6px 8px rgba(0, 0, 0, 0.1)";
            cssmenu.style.paddingRight = "15%";
            if (logo) {
                logo.style.display = "none";
            }
            // cssmenu.style.paddingLeft = "10%";
        } else {
            bottomNavbar.style.position = "relative";
            bottomNavbar.style.top = "auto";
            bottomNavbar.style.width = "auto";
            bottomNavbar.style.boxShadow = "none";
            cssmenu.style.paddingRight = "0";
            logo.style.display = "block";
            // }

            // location.reload();
        }
    }
});

