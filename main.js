
const div = document.querySelector('div')
const btn = document.querySelector('.btn')

console.log(div.childNodes);

const setBackground = () => {
    div.childNodes[1].style.backgroundColor = 'red'
    div.childNodes[3].style.backgroundColor = 'yellow'
}


btn.addEventListener('click', setBackground)

const redP = document.querySelector('.first')
const goldP = document.querySelector('.second')

const btnToggle = document.querySelector('.btn_toggle')

const setBackground2 = () => {
  redP.classList.toggle('red')
  goldP.classList.toggle('gold')
}
btnToggle.addEventListener('click',setBackground2)