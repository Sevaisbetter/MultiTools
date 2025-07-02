let aa = document.querySelector('.aa')
let confirmb = document.querySelector('.confirmb')
let aaa = document.querySelector('.average')
let array = []
confirmb.addEventListener('click', function(){        
    let sum = 0    
    if(aa.value !== ''){
        array.push(Number(aa.value))
        aa.value = ''
        array.forEach(i => { 
        sum += i
        })
        }
    let average = sum / array.length
    console.log(average)
    aaa.textContent = average
})


