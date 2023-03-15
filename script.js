const hamburger = document.getElementById("hamburger")
const navList = document.getElementById("nav-list")

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active")
    navList.classList.toggle("active")
})

document.querySelectorAll("nav-link").forEach(n => n.
    addEventListener("click", () => {
        hamburger.classList.remove("active");
        navList.classList.remove("active");
    }))