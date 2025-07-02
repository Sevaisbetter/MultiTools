let count = 0
let image = document.querySelector(".image")
let number = document.querySelector(".clicks")
image.addEventListener("click", function(){
    count ++
    number.textContent = count
})
