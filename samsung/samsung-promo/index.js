const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show')
        } else {
            entry.target.classList.remove('show')
        }
    })
})

const hiddenElements = document.querySelectorAll('.hidden')
let openMenu = document.querySelector('.menu-toggler');
let navList = document.querySelector('.nav-list');

openMenu.addEventListener('click', () => {
    navList.classList.toggle('active');
});
hiddenElements.forEach((el) => observer.observe(el));