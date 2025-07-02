let numberA = document.querySelector('.a')
let numberB = document.querySelector('.b')
let confirmButton = document.querySelector('.confirm')
let answer1 = document.querySelector('.add')
let answer2 = document.querySelector('.subtract')
let answer3 = document.querySelector('.multiply')
let answer4 = document.querySelector('.divide')
confirmButton.addEventListener('click', function(){
let numberA1 = numberA.value
let numberB1 = numberB.value

if(numberA1 === '' || numberB1 === ''){
    alert('Please Enter Numbers into both fields')
}
else{
    answer1.textContent = Number(numberA1) + Number(numberB1) + ' Is Addition'
    answer2.textContent = Number(numberA1) - Number(numberB1) + ' Is Subtraction'
    answer3.textContent = Number(numberA1) * Number(numberB1) + ' Is Multiplication'
    answer4.textContent = Number(numberA1) / Number(numberB1) + ' Is Division'
}})
