let block = document.querySelector('.mouseTracker')
let div = document.querySelector('.game1')
div.addEventListener('mousemove', function(event) {
    let rect = div.getBoundingClientRect()
    let newX = event.clientX - rect.left - block.offsetWidth 
    let newY = event.clientY - rect.top - block.offsetHeight 

    block.style.left = newX + 'px';
    block.style.top = newY + 'px';
})
