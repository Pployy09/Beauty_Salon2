/* ส่วนแอดมิน พนักงาน */
/*หน้าโฮมแอดมิน*/
/* แสดงเปลี่ยนโลโก้ header footer*/ 
var InputLogo = document.getElementById("input-logo");
var atChangeLogoHeader = document.getElementById("logo-header");
var atChangeLogoFooter = document.getElementById("logo-footer");

InputLogo.addEventListener("input", changeLogo );
function changeLogo(event){
    atChangeLogoHeader.textContent = event.target.value;
    atChangeLogoFooter.textContent = event.target.value;
};


/* แสดงเปลี่ยนรูปการจอง*/ 
var imgBooking = document.getElementById("img-booking");
var inputImgBooking = document.getElementById("input-img-booking");
inputImgBooking.onchange = (event) =>{
    if(inputImgBooking.files[0])
    imgBooking.src = URL.createObjectURL(inputImgBooking.files[0]);
   
};

/* แสดงเปลี่ยนรูปโปรโมชั่น*/ 
var imgPromotion = document.getElementById("img-promotion");
var inputImgPromotion = document.getElementById("input-promotion");

inputImgPromotion.onchange = (event) =>{
    if(inputImgPromotion.files[0])
    imgPromotion.src = URL.createObjectURL(inputImgPromotion.files[0]);
};

/* แสดงเปลี่ยนรูป คำอธิบายบริการ*/ 
/*ช่อง1 */ 
/*เพิมรูป*/
var imgServices1 = document.getElementById("imgServices1");
var inputImgServices1 = document.getElementById("input-img-services1");
inputImgServices1.onchange = (event) =>{
    if(inputImgServices1.files[0])
    imgServices1.src = URL.createObjectURL(inputImgServices1.files[0]);
};
/*เพิ่มคำอธิบายบริการ*/
var Description1 = document.getElementById("Description1");
var inputDescri1 = document.getElementById("input-descri1");
inputDescri1.oninput = (event) =>{
    Description1.textContent = event.target.value;
}

/*ช่อง2 */ 
/*เพิมรูป*/
var imgServices2 = document.getElementById("imgServices2");
var inputImgServices2 = document.getElementById("input-img-services2");
inputImgServices2.onchange = (event) =>{
    if(inputImgServices2.files[0])
    imgServices2.src = URL.createObjectURL(inputImgServices2.files[0]);
};
/*เพิ่มคำอธิบายบริการ*/
var Description2 = document.getElementById("Description2");
var inputDescri2 = document.getElementById("input-descri2");
inputDescri2.oninput = (event) =>{
    Description2.textContent = event.target.value;
}

/*ช่อง3 */ 
/*เพิมรูป*/
var imgServices3 = document.getElementById("imgServices3");
var inputImgServices3 = document.getElementById("input-img-services3");
inputImgServices3.onchange = (event) =>{
    if(inputImgServices3.files[0])
    imgServices3.src = URL.createObjectURL(inputImgServices3.files[0]);
};
/*เพิ่มคำอธิบายบริการ*/
var Description3 = document.getElementById("Description3");
var inputDescri3 = document.getElementById("input-descri3");
inputDescri3.oninput = (event) =>{
    Description3.textContent = event.target.value;
}

/*เพิ่มคำอธิบายบริการ footer*/
var Description4 = document.getElementById("Description4");
var inputDescri4 = document.getElementById("input-descri4");
inputDescri4.oninput = (event) =>{
    Description4.textContent = event.target.value;
}

var Description5 = document.getElementById("Description5");
var inputDescri5 = document.getElementById("input-time-open");
inputDescri5.oninput = (event) =>{
    Description5.textContent = event.target.value;
}








