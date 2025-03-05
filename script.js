let menu = document.querySelector('.menu1 > .fa-bars')
console.log(menu)
let ul = document.getElementById("menuList")

menu.addEventListener('click',function(){
    ul.classList.toggle('active')
})