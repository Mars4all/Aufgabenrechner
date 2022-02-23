function NaNo(){
    alert("Die Hypotenuse kann nicht kleiner sein als die Katete und Komma´s bitte mit . schreiben");
}


window.addEventListener("load", function(){
    


        let button2 = document.getElementById("calculate2");
        button2.addEventListener("click", function(){

            let height2 = document.getElementById("height2");
            let weight2 = document.getElementById("weight2");

            //mit value habe ich den Rückgabewert
            let bmi2 = (Math.sqrt((weight2.value * weight2.value) +  (height2.value *height2.value)));
            
            console.log(height2.value);
            console.log(weight2.value);
            alert (bmi2);

        });

        

    });


    window.addEventListener("load", function(){

    let button2 = document.getElementById("calculate4");
        button2.addEventListener("click", function(){

            let height4 = document.getElementById("height4");
            let weight4 = document.getElementById("weight4");
            let weight4anders = document.getElementById("weight4anders");

            let laenge1 =  Math.floor(height4.value);
            let laenge2 =  Math.floor(weight4.value);
            let laenge3 = Math.floor(weight4anders.value);

            //mit value habe ich den Rückgabewert
            let bmi4 = laenge1 + laenge2 + laenge3;
            
            
            
            
            alert(bmi4);

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
                alert (bmi3n);
    
            });
    
        });
        window.addEventListener("load", function(){

            let button2 = document.getElementById("calculate5");
                button2.addEventListener("click", function(){
        
                    let height5 = document.getElementById("height5");
                    let weight5 = document.getElementById("weight5");
        
                    //mit value habe ich den Rückgabewert
                    let bmi5 = 0.5 * (height5.value * weight5.value);
                
                    alert (bmi5);
        
                });
        
            });
            window.addEventListener("load", function(){

                let button2 = document.getElementById("calculate6");
                    button2.addEventListener("click", function(){
            
                        let height6 = document.getElementById("height6");
                        let weight6 = document.getElementById("weight6");
            
                        //mit value habe ich den Rückgabewert
                        let bmi6 = height6.value * weight6.value;
                    
                        alert (bmi6);
            
                    });
            
                });

                window.addEventListener("load", function(){

                    let button2 = document.getElementById("calculate7");
                        button2.addEventListener("click", function(){
                
                            let height7 = document.getElementById("height7");
                            let weight7 = document.getElementById("weight7");
                
                            //mit value habe ich den Rückgabewert
                            let bmi7 = (height7.value * 2) + (weight7.value * 2);
                        
                            alert (bmi7);
                
                        });
                
                    });               
                    window.addEventListener("load", function(){

                        let button2 = document.getElementById("calculate8");
                            button2.addEventListener("click", function(){
                    
                                let height8 = document.getElementById("height8");
                                let weight8 = document.getElementById("weight8");
                    
                                //mit value habe ich den Rückgabewert
                                let bmi8 = weight8.value - height8.value;
                            
                                alert ("X = " + bmi8);
                    
                            });
                    
                        });                                   
                        window.addEventListener("load", function(){

                            let button2 = document.getElementById("calculate9");
                                button2.addEventListener("click", function(){
                        
                                    let height9 = document.getElementById("height9");
                                    let weight9 = document.getElementById("weight9");
                        
                                    //mit value habe ich den Rückgabewert
                                    let Ziffer1 =  Math.floor(height9.value);
                                    let Ziffer2 =  Math.floor(weight9.value);
                                    let bmi9 = Ziffer1 + Ziffer2 ;
                                
                                    alert ("X = " + bmi9);
                        
                                });
                        
                            });       
                            
                            window.addEventListener("load", function(){

                                let button2 = document.getElementById("calculate10");
                                    button2.addEventListener("click", function(){
                            
                                        let height9 = document.getElementById("height10");
                                        let weight9 = document.getElementById("weight10");
                            
                                        //mit value habe ich den Rückgabewert
                                        let Ziffer11 =  Math.floor(height9.value);
                                        let Ziffer21 =  Math.floor(weight9.value);
                                        let bmi10 = Ziffer21 / Ziffer11;
                                    
                                        alert ("X = " + bmi10);
                            
                                    });
                            
                                });           

                                
                                window.addEventListener("load", function(){

                                    let button2 = document.getElementById("calculate11");
                                        button2.addEventListener("click", function(){
                                
                                            let height11 = document.getElementById("height11");
                                            let weight11 = document.getElementById("weight11");
                                
                                            //mit value habe ich den Rückgabewert
                                            let Ziffer12 =  Math.floor(height11.value);
                                            let Ziffer22 =  Math.floor(weight11.value);
                                            let bmi11 =   (Ziffer12 / Ziffer22);
                                        
                                        
                                            alert ("X = " + bmi11);
                                
                                        });
                                
                                    });                       
                                window.addEventListener("load", function(){

                                        let button2 = document.getElementById("calculate12");
                                            button2.addEventListener("click", function(){
                                    
                                                let height12 = document.getElementById("height12");
                                                let weight12 = document.getElementById("weight12");
                                    
                                                //mit value habe ich den Rückgabewert
                                                let Ziffer13 =  Math.floor(height12.value);
                                                let Ziffer23 =  Math.floor(weight12.value);
                                                let bmi12 =   (Ziffer13 * Ziffer23);
                                            
                                            
                                                alert ("X = " + bmi12);
                                    
                                            });
                                    
                                });          
window.addEventListener("load", function(){

        let button2 = document.getElementById("calculate13");
         button2.addEventListener("click", function(){
                                
        let height13 = document.getElementById("height13");
        let weight13 = document.getElementById("weight13");
                                
         //mit value habe ich den Rückgabewert
        let Ziffer14 =  Math.floor(height13.value);
        let Ziffer24 =  Math.floor(weight13.value);
        let bmi13 =   (Ziffer14 + Ziffer24);
                                        
                                        
        alert ("X = " + bmi13);
                                
         });
                                
});                
