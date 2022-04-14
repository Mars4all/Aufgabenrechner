



window.addEventListener("load", function(){
    


    let button2 = document.getElementById("calculate1");
    button2.addEventListener("click", function(){

        let height2 = document.getElementById("height1");
        let weight2 = document.getElementById("weight1");

        //mit value habe ich den Rückgabewert
        let bmi2 = (Math.sqrt((weight2.value * weight2.value) +  (height2.value *height2.value)));
        
        console.log(height2.value);
        console.log(weight2.value);
        alert (bmi2);

    });

    

});