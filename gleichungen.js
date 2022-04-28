$(document).ready(function() {
   

	// when document loaded:
     
     
        // alert("der Operant lautet "+Operant);
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////adition
$("#Erg").mouseup(function() {
   let Pos1 = $("#pos1").val()*1;
   let Pos1a = eval(Pos1);
   let Pos2 = $("#pos2").val()*1;
   let Pos2a = eval(Pos2);
   let Ergebnis = $("#ergfield").val()*1;
   let Operant = $("#operant").html();
  
   if(Operant == "+"){
      
   
   if (isNaN (Pos1a) == true && isNaN (Pos2a) == false ){
     
      
      let newPos1 = Ergebnis - Pos2;
      $("#rechenweg").html("Rechenweg :<br> x = "+Ergebnis+" - "+Pos2a+" <br> Ergebnis :<br> x = " +newPos1);
      

     

   }
   else{
     
   }}
   
});

$("#Erg").mouseup(function() {
   let Pos1 = $("#pos1").val()*1;
   let Pos1a = eval(Pos1);
   let Pos2 = $("#pos2").val()*1;
   let Pos2a = eval(Pos2);
   let Ergebnis = $("#ergfield").val()*1;
   let Operant = $("#operant").html();
  
   if(Operant == "+"){
      
   
   if (isNaN (Pos2a) == true && isNaN (Pos1a) == false ){
     
      
      let newPos1 = Ergebnis - Pos1;
      $("#rechenweg").html("Rechenweg :<br> x = "+Ergebnis+" - "+Pos1a+" <br> Ergebnis :<br> x = " +newPos1);
      

     

   }
   else{
     
   }}
   
});
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////subtration
$("#Erg").mouseup(function() {
   let Pos1 = $("#pos1").val()*1;
   let Pos1a = eval(Pos1);
   let Pos2 = $("#pos2").val()*1;
   let Pos2a = eval(Pos2);
   let Ergebnis = $("#ergfield").val()*1;
   let Operant = $("#operant").html();

   if(Operant == "/"){
     

   if (isNaN (Pos2a) == true && isNaN (Pos1a) == false ){
      
      let newPos2 = Pos1 /Ergebnis ;

      $("#rechenweg").html("Rechenweg :<br> x = "+Pos1a+" / "+Ergebnis+" <br> Ergebnis :<br> x = " +newPos2);
      

   }
   else{
    
   }}
   
});

$("#Erg").mouseup(function() {
   let Pos1 = $("#pos1").val()*1;
   let Pos1a = eval(Pos1);
   let Pos2 = $("#pos2").val()*1;
   let Pos2a = eval(Pos2);
   let Ergebnis = $("#ergfield").val()*1;
   let Operant = $("#operant").html();

   if(Operant == "/"){
     

   if (isNaN (Pos2a) == false && isNaN (Pos1a) == true ){
      
      let newPos2 = Pos2 *Ergebnis ;

      $("#rechenweg").html("Rechenweg :<br> x = "+Pos2a+" * "+Ergebnis+" <br> Ergebnis :<br> x = " +newPos2);
      

   }
   else{
    
   }}
   
});
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////multiplikation
$("#Erg").mouseup(function() {
   let Pos1 = $("#pos1").val()*1;
   let Pos1a = eval(Pos1);
   let Pos2 = $("#pos2").val()*1;
   let Pos2a = eval(Pos2);
   let Ergebnis = $("#ergfield").val()*1;
   let Operant = $("#operant").html();

   if(Operant == "*"){
     

   if (isNaN (Pos2a) == true && isNaN (Pos1a) == false ){
      
      let newPos2 = Ergebnis / Pos1;

      $("#rechenweg").html("Rechenweg :<br> x = "+Ergebnis+" / "+Pos1a+" <br> Ergebnis :<br> x = " +newPos2);
      

   }
   else{
    
   }}
   
});


$("#Erg").mouseup(function() {
   let Pos1 = $("#pos1").val()*1;
   let Pos1a = eval(Pos1);
   let Pos2 = $("#pos2").val()*1;
   let Pos2a = eval(Pos2);
   let Ergebnis = $("#ergfield").val()*1;
   let Operant = $("#operant").html();

   if(Operant == "*"){
     

   if (isNaN (Pos1a) == true && isNaN (Pos2a) == false ){
      
      let newPos2 = Ergebnis / Pos2;

      $("#rechenweg").html("Rechenweg :<br> x = "+Ergebnis+" / "+Pos2a+" <br> Ergebnis :<br> x = " +newPos2);
      

   }
   else{
    
   }}
   
});


////////////////////////////////////////////////////////////////////////////////////////////////////division


$("#Erg").mouseup(function() {
   let Pos1 = $("#pos1").val()*1;
   let Pos1a = eval(Pos1);
   let Pos2 = $("#pos2").val()*1;
   let Pos2a = eval(Pos2);
   let Ergebnis = $("#ergfield").val()*1;
   let Operant = $("#operant").html();

   if(Operant == "-"){

   if (isNaN (Pos2a) == true && isNaN (Pos1a) == false ){
      
      let newPos2 = Pos1 - Ergebnis;

      $("#rechenweg").html("Rechenweg :<br> x = "+Pos1a+" / "+Ergebnis+" <br> Ergebnis :<br> x = " +newPos2);
      

   }
   else{
      let newPos2 = Ergebnis + Pos2;
      $("#rechenweg").html("Rechenweg :<br> x = "+Ergebnis+" + "+Pos2a+" <br> Ergebnis :<br> x = " +newPos2);
   }}
   
});

///////////////////////////////////////////////////////////////////////////////////////////////////////Operator Wechsel
  $("#plus").mouseup(function() {
   $("#operant").html("+");
   });

   $("#minus").mouseup(function() {
      $("#operant").html("-");
   });

   $("#mal").mouseup(function() {
      $("#operant").html("*");
   });
   
   $("#geteilt").mouseup(function() {
      $("#operant").html("/");
   });


});

