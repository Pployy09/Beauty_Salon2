function makeServiceId(){ 
    var i = 0;
    return function(){
       return i++;
    };
 };

 var id = makeServiceId();


 

 const bookingSe = document.getElementById("booking_service");

 bookingSe.querySelectorAll("option").forEach(bo =>{
    bo.classList.add('itemService'+id());
 })