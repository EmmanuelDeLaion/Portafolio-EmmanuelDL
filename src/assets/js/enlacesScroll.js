
// enlaces enlazados al scroll 
const menuLinks = document.querySelectorAll('.nav-item a[href^="#"]');

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        const id = entry.target.getAttribute("id");
        const menuLink = document.querySelector(`a[href^="#${id}"]`);

        if (entry.isIntersecting) {
            menuLink.classList.add("nav-link-enlaces");
        } else {
            menuLink.classList.remove("nav-link-enlaces");
        }
    });
}, { rootMargin: "-50% 0px -50% 0px" });

menuLinks.forEach((menuLink) => {
    // menuLink.addEventListener("click", function(){

    // });

    const hash = menuLink.getAttribute("href");
    const target = document.querySelector(hash);
    if (target) {
        observer.observe(target);
    }
});
