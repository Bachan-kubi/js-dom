// factory 
document.getElementById('btn-double').addEventListener('click', function(){
    // fucntion for double result 
    const inputValue = getInputValue('input-feild');
    const totalValue = inputValue * 2;
    setDisplay('display-field', totalValue);
});
document.getElementById('btn-triple').addEventListener('click', function(){
    const inputValue = getInputValue('input-feild');
    const tripleResult = inputValue * 3;
    setDisplay('display-field', tripleResult);
})

greet();