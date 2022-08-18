function getInputValue(inputId){
    const inputValue = document.getElementById(inputId);
    const inputValueString = inputValue.value;
    const valueInputed = parseFloat(inputValueString);
    inputValue.value = '';
    return valueInputed; 
}
function setDisplay(inputNumber, newNumber){
    const textElements = document.getElementById(inputNumber);
    textElements.innerText = newNumber;
    console.log('hellow homefunc')
}

function greet (){
    console.log('clicked homefunc')
}