//
function displayNumber(num){
    result.value+=num
}
function clearBox() {
    result.value=""
}
function evaluateExp() {
    result.value=eval(result.value)
}
function removeLastItem(){
    result.value=result.value.slice(0,-1)
}