console.log('Linked Up!')

let box = document.querySelectorAll('.box')
console.log(box)
function colorChange(box){
    console.log('called')
    box.style.backgroundColor = 'red'
}
box.forEach(item => {
    item.addEventListener('click', () => colorChange(item))
})
// box.style.backgroundColor = 'red'