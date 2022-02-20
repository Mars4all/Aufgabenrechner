window.addEventListener("load", function(){
    


        let button2 = document.getElementById("calculate2");
        button2.addEventListener("click", function(){

            let height2 = document.getElementById("height2");
            let weight2 = document.getElementById("weight2");

            //mit value habe ich den Rückgabewert
            let bmi2 = (Math.sqrt((weight2.value * weight2.value) +  (height2.value *height2.value)));
            
            console.log(height2.value);
            console.log(weight2.value);
            alert ("Die Hypotenuse lautet: " + bmi2);

        });

        

    });


    window.addEventListener("load", function(){

    let button2 = document.getElementById("calculate3");
        button2.addEventListener("click", function(){

            let height3 = document.getElementById("height3");
            let weight3 = document.getElementById("weight3");

            //mit value habe ich den Rückgabewert
            let bmi3 = (weight3.value * weight3.value) - (height3.value * height3.value);
            let bmi3n = Math.sqrt(bmi3);
            
            
            console.log(height3.value);
            console.log(weight3.value);
            alert ("Die fehlende Katete ist: " + bmi3n);

        });

    });
