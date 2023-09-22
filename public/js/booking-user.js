
var date1 = new Date();
var dayNow =  date1.getDay();
var dateNow =  date1.getDate();
var monthNow =  date1.getMonth()+1; 
var yearNow =  date1.getFullYear(); 

function min(){
if(monthNow <= 9 && dateNow <= 9){
   var t1 = yearNow + '-0' + monthNow +'-0'+ dateNow ;
   document.getElementById("dateBookingUser").setAttribute("min",t1);
}else if(monthNow <= 9 && dateNow > 9){
   var t2 = yearNow + '-0' + monthNow +'-'+ dateNow ;
   document.getElementById("dateBookingUser").setAttribute("min",t2);
}else if(dateNow <= 9 && monthNow > 9 ){
   var t3 = yearNow + '-' + monthNow +'-0'+ dateNow ;
   document.getElementById("dateBookingUser").setAttribute("min",t3);
}else if(monthNow > 9 && dateNow > 9){
   var t4 = yearNow + '-' + monthNow +'-'+ dateNow ;
   document.getElementById("dateBookingUser").setAttribute("min",t4);
}
};


var t6,t7,t8,t9,t10,t11,t12;
function max(){
  if(dayNow === 1){
     dateNow = dateNow+6
     if(monthNow <= 9 && dateNow <= 9){
        t6 = yearNow + '-0' + monthNow +'-0'+ dateNow ;
     }else if (monthNow <= 9 && dateNow > 9){
        t6 = yearNow + '-0' + monthNow +'-'+ dateNow ;
     }else if(dateNow <= 9 && monthNow > 9 ){
        t6 = yearNow + '-' + monthNow +'-0'+ dateNow ;
     }else if(monthNow > 9 && dateNow > 9){
        t6 = yearNow + '-' + monthNow +'-'+ dateNow ;
     }
     document.getElementById("dateBookingUser").setAttribute("max",t6);


  }else if(dayNow === 2){
     dateNow = dateNow + 5
     if(monthNow <= 9 && dateNow <= 9){
        t7 = yearNow + '-0' + monthNow +'-0'+ dateNow ;
     }else if (monthNow <= 9 && dateNow > 9){
        t7 = yearNow + '-0' + monthNow +'-'+ dateNow ;
     }else if(dateNow <= 9 && monthNow > 9 ){
        t7 = yearNow + '-' + monthNow +'-0'+ dateNow ;
     }else if(monthNow > 9 && dateNow > 9){
        t7 = yearNow + '-' + monthNow +'-'+ dateNow ;
     }  
     document.getElementById("dateBookingUser").setAttribute("max",t7);

  }else if(dayNow === 3){
     dateNow = dateNow + 4
     if(monthNow <= 9 && dateNow <= 9){
        t8 = yearNow + '-0' + monthNow +'-0'+ dateNow ;
     }else if (monthNow <= 9 && dateNow > 9){
        t8 = yearNow + '-0' + monthNow +'-'+ dateNow ;
     }else if(dateNow <= 9 && monthNow > 9 ){
        t8 = yearNow + '-' + monthNow +'-0'+ dateNow ;
     }else if(monthNow > 9 && dateNow > 9){
        t8 = yearNow + '-' + monthNow +'-'+ dateNow ;
     }  
     document.getElementById("dateBookingUser").setAttribute("max",t8);

  }else if(dayNow === 4){
     dateNow = dateNow + 3
     if(monthNow <= 9 && dateNow <= 9){
        t9 = yearNow + '-0' + monthNow +'-0'+ dateNow ;
     }else if (monthNow <= 9 && dateNow > 9){
        t9 = yearNow + '-0' + monthNow +'-'+ dateNow ;
     }else if(dateNow <= 9 && monthNow > 9 ){
        t9 = yearNow + '-' + monthNow +'-0'+ dateNow ;
     }else if(monthNow > 9 && dateNow > 9){
        t9 = yearNow + '-' + monthNow +'-'+ dateNow ;
     }  
     document.getElementById("dateBookingUser").setAttribute("max",t9);

  }else if(dayNow === 5){
     dateNow = dateNow + 2
     if(monthNow <= 9 && dateNow <= 9){
        t10 = yearNow + '-0' + monthNow +'-0'+ dateNow ;
     }else if (monthNow <= 9 && dateNow > 9){
        t10 = yearNow + '-0' + monthNow +'-'+ dateNow ;
     }else if(dateNow <= 9 && monthNow > 9 ){
        t10 = yearNow + '-' + monthNow +'-0'+ dateNow ;
     }else if(monthNow > 9 && dateNow > 9){
        t10 = yearNow + '-' + monthNow +'-'+ dateNow ;
     }  
     document.getElementById("dateBookingUser").setAttribute("max",t10);

  }else if(dayNow === 6){
     dateNow = dateNow + 1
     if(monthNow <= 9 && dateNow <= 9){
        t11 = yearNow + '-0' + monthNow +'-0'+ dateNow ;
     }else if (monthNow <= 9 && dateNow > 9){
        t11 = yearNow + '-0' + monthNow +'-'+ dateNow ;
     }else if(dateNow <= 9 && monthNow > 9 ){
        t11 = yearNow + '-' + monthNow +'-0'+ dateNow ;
     }else if(monthNow > 9 && dateNow > 9){
        t11 = yearNow + '-' + monthNow +'-'+ dateNow ;
     }  
     document.getElementById("dateBookingUser").setAttribute("max",t11);

  }else if(dayNow === 7){
     
     if(monthNow <= 9 && dateNow <= 9){
        t12 = yearNow + '-0' + monthNow +'-0'+ dateNow ;
     }else if (monthNow <= 9 && dateNow > 9){
        t12 = yearNow + '-0' + monthNow +'-'+ dateNow ;
     }else if(dateNow <= 9 && monthNow > 9 ){
        t12 = yearNow + '-' + monthNow +'-0'+ dateNow ;
     }else if(monthNow > 9 && dateNow > 9){
        t12 = yearNow + '-' + monthNow +'-'+ dateNow ;
     }  
     document.getElementById("dateBookingUser").setAttribute("max",t12);
  }


};
min();
max();

class CustomSelect{
   constructor(originalSelect){
      this.originalSelect = originalSelect;
      this.customSelect = document.createElement("div");
      this.customSelect.classList.add("select");

      this.originalSelect.querySelectorAll("option").forEach(optionElement =>{
         const itemElement = document.createElement("div");

         itemElement.classList.add("item");
         itemElement.textContent = optionElement.textContent;
         this.customSelect.appendChild(itemElement);

         itemElement.addEventListener("click", () =>{
            if(itemElement.classList.contains("item--selected")){
               this.deselect(itemElement);
            }else{
               this.select(itemElement);
            }
         });
      });
      
      this.originalSelect.insertAdjacentElement("afterend", this.customSelect);
      this.originalSelect.style.display = "none";
   }

   select(itemElement){
      const index = Array.from(this.customSelect.children).indexOf(itemElement);

      if(!this.originalSelect.multiple){
         this.customSelect.querySelectorAll(".item").forEach(it =>{
            it.classList.remove("item--selected")
         })
      }
      this.originalSelect.querySelectorAll("option")[index].selected = true; //เพิ่มแอดทริบิวให้กับ css
      itemElement.classList.add("item--selected");
      
      
   }

   deselect(itemElement){
      const index = Array.from(this.customSelect.children).indexOf(itemElement);
      this.originalSelect.querySelectorAll("option")[index].selected = false; //เพิ่มแอดทริบิวให้กับ css
      itemElement.classList.remove("item--selected");
   }

};

document.querySelectorAll(".custom-select").forEach(selectElement => {
   new CustomSelect(selectElement);
  
});






