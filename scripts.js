const toggleMenuButton = document.getElementById("toggleButton");
const navbarLinks = document.querySelector(".navbarLinks");
toggleMenuButton.addEventListener('click', ()=>{
    toggleMenuButton.classList.toggle('open');
    navbarLinks.classList.toggle('open');
});

const allNavLinks = document.querySelectorAll('.navbarLinks li');
allNavLinks.forEach(link => {
    link.addEventListener('click', () => {
        navbarLinks.classList.remove('open');
        toggleMenuButton.classList.remove('open');
    })
})