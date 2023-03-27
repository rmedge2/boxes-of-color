console.log('Linked Up!')

let boxes = document.querySelectorAll('.box')
console.log(boxes)
// function colorChange(box){
//     console.log('called')
//     box.style.backgroundColor = 'red'
// }

let buttons = document.querySelectorAll('button')
buttons.forEach(button =>{
    let color = button.innerText
    button.addEventListener('click', () => {
        console.log('clicked color button')
        boxes.forEach(box => box.addEventListener('click', () => box.style.backgroundColor = color))
    } 
    )
})

// box.style.backgroundColor = 'red'