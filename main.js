const btBigMac = document.querySelector(".big-mac-toggle")
const mainMenu = document.querySelector("nav.main-menu")

btBigMac.addEventListener("click", () => {
    btBigMac.classList.toggle("opened")
    mainMenu.classList.toggle("opened", btBigMac.classList.contains("opened"))
})