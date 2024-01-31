let container = document.getElementById('container-form')

toggle = () => {
    container.classList.toggle('sign-in')
    container.classList.toggle('sign-up')
}

setTimeout(() => {
    container.classList.add('sign-in')
}, 500)


let toggles = document.querySelectorAll('.toggle');

toggles.forEach(toggle => {
    toggle.addEventListener('click', e => {
        toggles.forEach(el => el.classList.toggle('hide'));
    });
});





function onMenuToggle(e) {
    const navlinks = document.querySelector(".navLinks");
    e.name = e.name === "menu" ? "close" : "menu";
    navlinks.classList.toggle("left-[0%]");
}

