let menuBtn = document.getElementById('menu-Btn')
let menuLists = document.getElementById('navLists')

menuBtn.addEventListener('click', function () {
    if(menuLists.style.display === "block") {
        menuLists.style.display = "none";
    } else {
        menuLists.style.display = "block";
    }
})




