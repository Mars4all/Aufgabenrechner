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
             
             
              let Seitenflaeche = (1/2)*Seitenflaeche_a*Seitenflaeche_h;
              alert("Rechenweg : 1/2 x "+Seitenflaeche_a+" x "+Seitenflaeche_h);
              alert("Die Seitenflaeche der Pyramide lautet: "+Seitenflaeche);
              
              
                 
        });


        $("#Neigung_Seitenflaeche_A_Button").mouseup(function() {
              let Neigung_Seitenflaeche_a = $("#Neigung_Seitenflaeche_A_Input").val()*1;
              let = Zwischen_Ergebnis = Neigung_Seitenflaeche_a/2;
              
             
             
              let Neigung_Seitenflaeche = Math.atan(Zwischen_Ergebnis);
              
              alert("Rechenweg : arctan("+Neigung_Seitenflaeche_a+" /2 )");
              alert("alpha der Pyramide lautet: "+Neigung_Seitenflaeche);
              
              
                 
        });

        $("#Neigung_Seitenkante_A_Button").mouseup(function() {
              let Neigung_Seitenkante_H = $("#Neigung_Seitenkante_H_Input").val()*1;
              let Neigung_Seitenkante_D = $("#Neigung_Seitenflaeche_D_Input").val()*1;
              let Zwischen_Ergebnis = Neigung_Seitenkante_H / (Neigung_Seitenkante_D/2);

              let Neigung_Seitenkante =Math.atan(Zwischen_Ergebnis) ; 

              
              alert("Rechenweg : arctan("+Neigung_Seitenkante_H+" /("+Neigung_Seitenkante_D+ "/2))");
              alert("gamma der Pyramide lautet: "+Neigung_Seitenkante);
              
              
                 
        });
       

      // $("#img1").mouseup(function() {
              
           //   alert("Die Pyramide ist eine Bauform, meist mit quadratischer Grundfläche, die aus unterschiedlichen alten Kulturen bekannt ist, wie Ägypten, Lateinamerika oder China. Pyramiden wurden vorwiegend als Gebäude mit religiösem und/oder zeremoniellem Charakter errichtet. Quelle: Wikipedia");
                 
       // });

       $("#ha_A_Button").mouseup(function() {
              let ha_H = $("#ha_H_Input").val()*1;
              let ha_a = $("#ha_A_Input").val()*1;
              let Zwischen_Ergebnis= (ha_H*ha_H)+((ha_a/2)*(ha_a/2));

              let Ergebnis= Math.sqrt(Zwischen_Ergebnis); 

              
              alert("Rechenweg : Wurzel aus "+ha_H+"hoch 2 +( "+ha_a+"/2) hoch 2" );
              alert("ha der Pyramide lautet: "+Ergebnis);
              
              
                 
        });

        $("#Diagonale_A_Button").mouseup(function() {
              let d_a = $("#d_A_Input").val()*1;
              let Zwischen_Ergebnis= (d_a*d_a)+(d_a*d_a);

              let Ergebnis= Math.sqrt(Zwischen_Ergebnis); 

              
              alert("Rechenweg : Wurzel aus "+d_a+" hoch 2 +"+d_a+" hoch2");
              alert("Diagonale der Pyramide lautet: "+Ergebnis);
              
              
                 
        });

        $("#Seitenkante1_A_Button").mouseup(function() {
            let Seitenkante_H = $("#Seitenkante_H_Input").val()*1;
            let Seitenkante_D = $("#Seitenkante_D_Input").val()*1;
            let Zwischen_Ergebnis= (Seitenkante_H*Seitenkante_H) + ((Seitenkante_D/2)*(Seitenkante_D/2));

            let Ergebnis= Math.sqrt(Zwischen_Ergebnis); 

            
            alert("Rechenweg : Wurzel aus "+Seitenkante_H+" hoch 2 + ("+Seitenkante_D+" geteilt durch 2) hoch2");
            alert("Die Seitenkante der Pyramide lautet: "+Ergebnis);
            
            
               
      });

      $("#Seitenkante_A_Button").mouseup(function() {
            let Seitenkante_Ha = $("#Seitenkante_ha_Input").val()*1;
            let Seitenkante_A = $("#Seitenkante_a_Input").val()*1;
            let Zwischen_Ergebnis= (Seitenkante_Ha*Seitenkante_Ha) + ((Seitenkante_A)*(Seitenkante_A)/2);

            let Ergebnis= Math.sqrt(Zwischen_Ergebnis); 

            
            alert("Rechenweg : Wurzel aus "+Seitenkante_Ha+" hoch 2 + ("+Seitenkante_A+" hoch2) geteilt durch 2");
            alert("Die Seitenkante der Pyramide lautet: "+Ergebnis);
            
            
               
      });
