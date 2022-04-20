$(document).ready(function() {
	// when document loaded:
    $("#X_berechnen").mouseup(function() {
        let Summe = $("#Summe").val()*1;
        let Summand = $("#Summand").val()*1;
        let Ergebnis= Summe-Summand;

         
        alert("Rechenweg : "+Summe+" - "+Summand) ;
        alert("x = "+Ergebnis);
        
        
           
  });

    $("#X_berechnen2").mouseup(function() {
        let Summe = $("#Summe2").val()*1;
        let Summand = $("#Summand2").val()*1;
        let Ergebnis= Summe-Summand;

        
        alert("Rechenweg : "+Summe+" - "+Summand) ;
        alert("x = "+Ergebnis);
        
        
        
    });

    // hier nochmal ran 
    $("#X_berechnen3").mouseup(function() {
       let Differenz = $("#Differenz1").val()*1;
       let Substrahend = $("#Substrahend1").val()*1;
       let Ergebnis= Substrahend-Differenz;

        
        alert("Rechenweg : "+Substrahend+" - "+Differenz) ;
        alert("x = "+Ergebnis);
        
        
        
   });

    $("#X_berechnen4").mouseup(function() {
        let Differenz = $("#Differenz2").val()*1;
        let Minuend = $("#Minuend1").val()*1;
        let Ergebnis= Differenz+Minuend;

        
        alert("Rechenweg : "+Differenz+" + "+Minuend) ;
        alert("x = "+Ergebnis);
        
        
        
    });

    $("#Multiplikation1").mouseup(function() {
        let Produkt = $("#Produkt").val()*1;
        let Faktor = $("#Faktor").val()*1;
        let Ergebnis= Produkt/Faktor;

        
        alert("Rechenweg : x = "+Produkt+" / "+Faktor) ;
        alert("x = "+Ergebnis);
        
        
        
    });

    $("#Multiplikation2").mouseup(function() {
        let Produkt = $("#Produkt2").val()*1;
        let Faktor = $("#Faktor2").val()*1;
        let Ergebnis= Produkt/Faktor;

        
        alert("Rechenweg : x = "+Produkt+" / "+Faktor) ;
        alert("x = "+Ergebnis);
        
        
        
    });

    $("#Geteilt1").mouseup(function() {
        let Quotient = $("#Quotient1").val()*1;
        let Divident = $("#Divident1").val()*1;
        let Ergebnis= Quotient*Divident;

        
        alert("Rechenweg : x = "+Quotient+" x "+ Divident);
        alert("x = "+Ergebnis);
        
        
        
    });

    $("#Geteilt2").mouseup(function() {
        let Quotient = $("#Quotient2").val()*1;
        let Divident = $("#Divident2").val()*1;
        let Zwischen_ergebnis = Divident/Quotient;
        
        alert("Rechenweg : x = "+Divident+" / "+Quotient );
        alert("x = "+Zwischen_ergebnis);
        
        
        
    });

});