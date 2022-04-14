$(document).ready(function() {
	// when document loaded:

       $("#Umfang_A_Button").mouseup(function() {
              let Flaeche1 = $("#Umfang_A_Input").val()*1;
              Flaeche = 4 *Flaeche1;
              alert("Rechenweg : 4 x "  +Flaeche1+  " !");
              alert("Die Fläche der Pyramide lautet: "+Flaeche);
              
              
       });

       $("#Grundfläche_A_Button").mouseup(function() {
              let Grundflaeche1 = $("#Grundfläche_A_Input").val()*1;
              Grundfläche = Grundflaeche1*Grundflaeche1 ;
              alert("Rechenweg : "  +Grundflaeche1+  " zum Quadrat!");
              alert("Die Grundfläche der Pyramide lautet: "+Grundfläche);
              
              
       });

       $("#Oberfläche_A_Button").mouseup(function() {
             let Oberflaeche_a = $("#Oberfläche_A_Input").val()*1;
              let Oberflaeche_h = $("#Hoehe_H_Input").val()*1;

              let Oberflaeche = (Oberflaeche_a*Oberflaeche_a)+(2*Oberflaeche_a*Oberflaeche_h) ;
              alert("Rechenweg : "  +Oberflaeche_a+"x"+Oberflaeche_a+" + 2 x"+Oberflaeche_a+"x"+ Oberflaeche_h);
              alert("Die Oberfläche der Pyramide lautet: "+Oberflaeche);
             

              
       });


       $("#Mantelfläche_A_Button").mouseup(function() {
              let Mantellaeche_a = $("#Mantelfläche_A_Input").val()*1;
               let Mantelflaeche_h = $("#Mantel_H_Input").val()*1;

              let Mantelflaeche = 2*Mantellaeche_a*Mantelflaeche_h;
               alert("Rechenweg : 2 x "+Mantellaeche_a+" x "+Mantelflaeche_h);
               alert("Die Mantelfläche der Pyramide lautet: "+Mantelflaeche);
              
 
               
        });

        $("#Volumen_A_Button").mouseup(function() {
              let Volumen_a = $("#Volumen_A_Input").val()*1;
               let Volumen_h = $("#Volumen_H_Input").val()*1;

              let Volumen = (1/3)*(Volumen_a*Volumen_a*Volumen_h);
               alert("Rechenweg : 1/3 x "+Volumen_a+" hoch2  x "+Volumen_h);
               alert("Das Volumen der Pyramide lautet: "+Volumen);
                 
        });

        $("#Seitenflaeche_A_Button").mouseup(function() {
              let Seitenflaeche_a = $("#Seitenflaeche_A_Input").val()*1;
              let Seitenflaeche_h = $("#Seitenflaeche_H_Input").val()*1;
              let test= Math.tan (Seitenflaeche_a );

              let Seitenflaeche = (1/2)*Seitenflaeche_a*Seitenflaeche_h;
              alert("Rechenweg : 1/2 x "+Seitenflaeche_a+" x "+Seitenflaeche_h);
              alert("Das Volumen der Pyramide lautet: "+Seitenflaeche);
              alert(test);
              
                 
        });
       
});