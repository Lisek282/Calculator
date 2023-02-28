const number = document.getElementsByClassName("number")
const display = document.getElementById('display')
let displayValue = ''
let number1 = null
let number2 = null
let operatorValue = ''



document.addEventListener('click', (e)=>{
  // Numbers
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
  // Operators
  if(e.target.dataset.clear === 'clear'){
    clearDisplay()
  }
  if(e.target.dataset.subtract === 'subtract'){
    conditionsToOperate('subtract')
  }
  if(e.target.dataset.add === 'add'){
    conditionsToOperate('add')
  }
  if(e.target.dataset.multiply === 'multiply'){
    conditionsToOperate('multiply')
  }
  if(e.target.dataset.divide === 'divide'){
    conditionsToOperate('divide')
  }
  if(e.target.dataset.equals === 'equals'){

    if(operatorValue && number1 && !number2){
      number2 = +displayValue
      operate(operatorValue, number1, number2)
      number2 = null
      displayValue = ''
      operatorValue = ''
    }
    
  }
})

function getNumbers(num){
  
  displayValue = displayValue.concat(num)
  display.innerText = displayValue
}

function clearDisplay(){
  displayValue = ''
  number1 = null
  number2 = null
  operatorValue = ''
  display.innerText = '0'

}

function conditionsToOperate(operator){

  if(displayValue && !number1){
    number1 = +displayValue
    operatorValue = operator
    displayValue = ''
    display.innerText = '---'
  }
  else if(number1){
    operatorValue = operator
    display.innerText = '---'
  }
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
  let result

  switch(operator){
    case 'add':
      result = add(num1,num2)
      break
    case 'subtract':
      result = subtract(num1, num2)
      break
    case 'divide':
      result = divide(num1, num2)
      break
    case 'multiply':
      result = multiply(num1, num2)
      break
    default:
      console.log("something goes wrong")
  }

  display.innerText = `${result}`
  number1 = result
  
}




