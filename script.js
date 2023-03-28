console.log('Linked Up!')

let boxes = document.querySelectorAll('.box')
console.log(boxes)
// function colorChange(box){
//     console.log('called')
//     box.style.backgroundColor = 'red'
// }

let randomMode = false;

boxes.forEach(box => box.addEventListener('click', ()=>{
    if(randomMode===false){
        box.style.backgroundColor = box.style.backgroundColor === color ? 'black' : color
    }
    else{
        box.style.backgroundColor = `rgb(${Math.floor(Math.random()*256)},${Math.floor(Math.random()*256)},${Math.floor(Math.random()*256)})`
    }
}))
let color = 'white'
let buttons = document.querySelectorAll('header > button')
buttons.forEach(button => {
    // button.style.backgroundColor = color;
    button.addEventListener('click', () => {
        color = button.innerText
        console.log(`activated ${color} mode`)
        randomMode = false;
    }
    )
})

// Activates the random mode
let randomButton = document.querySelector('.random > button')
randomButton.addEventListener('click', () => {
    console.log(`Now we have entered the random mode`)
    randomMode = true
})