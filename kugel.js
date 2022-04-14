
// Fläche Kugel calculate4
$(document).ready(function() {
	// when document loaded:

       $("#flaeche").mouseup(function() {
              let Flaeche1 = $("#radius_kreis").val()*1;
              Flaeche = 3.14 *(Flaeche1*Flaeche1);
              alert("Rechenweg : PI x "  +Flaeche1+  " hoch 2");
              alert("Die Fläche des Kreises lautet: "+Flaeche);
              
              
              });
       
              $("#Umfang").mouseup(function() {
                     let Volumen1 = $("#radius_kreis2").val()*1;
                     Volumen = (4/3) * Math.PI  *(Volumen1**3);
                    // Volumen = Math.round(Volumen,2);
                     //alert("Die Fläche des Kreises lautet: "+ Volumen);
                     //$("#test").html(Volumen);
                     alert("Rechenweg: 4/3 x PI x "+Volumen1+" hoch 3" );
                    // alert("Rechenweg: 1.333333333 x PI "+ Volume1 +" hoch 3");
                     alert("Ergenbnis: "+ Volumen);
              
                     });
           








});

	


