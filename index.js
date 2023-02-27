const number = document.getElementsByClassName("number")
const display = document.getElementById('display')
let displayValue = ''

document.addEventListener('click', (e)=>{
  if(e.target.dataset.one === '1'){
    getNumbers('1')
  }
  if(e.target.dataset.two === '2'){
    getNumbers('2')
  }
  if(e.target.dataset.three === '3'){
    getNumbers('3')
  }
  if(e.target.dataset.four === '4'){
    getNumbers('4')
  }
  if(e.target.dataset.five === '5'){
    getNumbers('5')
  }
  if(e.target.dataset.six === '6'){
    getNumbers('6')
  }
  if(e.target.dataset.seven === '7'){
    getNumbers('7')
  }
  if(e.target.dataset.eight === '8'){
    getNumbers('8')
  }
  if(e.target.dataset.nine === '9'){
    getNumbers('9')
  }
  if(e.target.dataset.zero === '0' && displayValue !== ''){
    getNumbers('0')
  }

  if(e.target.dataset.clear === 'clear'){
    clearDisplay()
  }
})

function getNumbers(num){
  
  displayValue = displayValue.concat(num)
  display.innerText = displayValue
}

function clearDisplay(){
  displayValue = ''
  display.innerText = '0'
}

function add(num1, num2){
  return num1 + num2
}

function subtract(num1, num2){
  return num1 - num2
}

function multiply(num1, num2){
  return num1 * num2
}

function divide(num1, num2){
  return num1 / num2
}

function operate(operator, num1, num2){
  add(num1, num2)
}

