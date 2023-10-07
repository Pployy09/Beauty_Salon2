function makeServiceId(){ 
   var i = 0;
   return function(){
      return i++;
   };
};
var id = makeServiceId();

class CustomSelectService{
   constructor(originalSelect){
      this.originalSelect = originalSelect;
      this.customSelect = document.createElement("div");
      this.customSelect.classList.add("select");

      this.originalSelect.querySelectorAll("option").forEach(optionElement =>{
         const itemElement = document.createElement("div");

         
         itemElement.classList.add("item-service");
         
            
            itemElement.id = 'itemService'+id();
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
         this.customSelect.querySelectorAll(".item-service").forEach(it =>{
            it.classList.remove("item--selected")
            
         })
        
         
         this.originalSelect.querySelectorAll("option")[index].selected = true; //เพิ่มแอดทริบิวให้กับ css
         itemElement.classList.add("item--selected");
        
      
      }else{
         
         this.originalSelect.querySelectorAll("option")[index].selected = true; //เพิ่มแอดทริบิวให้กับ css
         itemElement.classList.add("item--selected");
      }

         
     
      
      
   }
   
   deselect(itemElement){
      const index = Array.from(this.customSelect.children).indexOf(itemElement);
      this.originalSelect.querySelectorAll("option")[index].selected = false; //เพิ่มแอดทริบิวให้กับ css
      itemElement.classList.remove("item--selected");
   }

};

document.querySelectorAll(".custom-select-service").forEach(selectElement => {
   new CustomSelectService(selectElement);
  
});


class CustomSelectTime{
   constructor(originalSelect){
      this.originalSelect = originalSelect;
      this.customSelect = document.createElement("div");
      this.customSelect.classList.add("select");

      this.originalSelect.querySelectorAll("option").forEach(optionElement =>{
         const itemElement = document.createElement("div");

         
         itemElement.classList.add("item-time");
         
            
            
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
         this.customSelect.querySelectorAll(".item-time").forEach(it =>{
            it.classList.remove("item--selected")
            
         })
        
         
         this.originalSelect.querySelectorAll("option")[index].selected = true; //เพิ่มแอดทริบิวให้กับ css
         itemElement.classList.add("item--selected");
        
      
      }else{
         
         this.originalSelect.querySelectorAll("option")[index].selected = true; //เพิ่มแอดทริบิวให้กับ css
         itemElement.classList.add("item--selected");
      }

         
     
      
      
   }
   
   deselect(itemElement){
      const index = Array.from(this.customSelect.children).indexOf(itemElement);
      this.originalSelect.querySelectorAll("option")[index].selected = false; //เพิ่มแอดทริบิวให้กับ css
      itemElement.classList.remove("item--selected");
   }

};

document.querySelectorAll(".custom-select-time").forEach(selectElement => {
   new CustomSelectTime(selectElement);
  
});





 













