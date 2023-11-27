function convert(){
    const cval = document.getElementById("inputval").value
    const result = document.getElementById("result")
    //prevention for empty submission
    if (cval==""){
        //alert("enter a valid number")
        result.innerHTML ="Enter a valid Number"
        return false;
    }
    else{
    const fval = cval*(9/5)+32
    result.innerHTML = fval.toFixed(1) + "Fahrenheit" 
    }
}
// Enabling convertion key on Enter keypress  
inputval.addEventListener('keypress',(e) =>{
    if(e.keyCode === 13){
        convert();
    }

})