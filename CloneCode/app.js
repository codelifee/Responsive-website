const navSlide = () => {
    const nav = document.querySelector(".nav-links");
    const burger = document.querySelector(".burger");
    const navLinks = document.querySelectorAll(".nav-links li")

    burger.addEventListener('click', () => {
        nav.classList.toggle("nav-active");

        navLinks.forEach((link, index) => {
            if(link.style.animation) {
                link.style.animation = '';
            } else {
                link.style.animation = `navFade 1s ease forwards ${index/5}s`;
            }
        }); 

    })
}

navSlide();