let outputscreen = document.getElementById("output-screen");
equal.addEventListener("keyup", function(e){
    if (outputscreen.value ==''){
     outputscreen.value="";
    }
    else{
     let ans= eval(outputscreen.value);
     outputscreen.value= ans;
    }
     
 })   
    function display(num){
        outputscreen.value += num;
    }
    function calculate(){
        
        try{
            outputscreen.value= eval(outputscreen.value);
            
        }
        catch(err)
        {
            alert("Invalid")
        }
    }
    
    function cl()
    {
        outputscreen.value = "";
    }
    function del(){
        outputscreen.value=outputscreen.value.slice(0,-1);
    }