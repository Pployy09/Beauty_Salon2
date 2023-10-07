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
      
var renderFile = function(event) {
    var r = new FileReader();
    r.onload = function(){
      var preview = document.getElementById('images1');
      preview.src = r.result;
    };
    r.readAsDataURL(event.target.files[0]);
  };

  var renderFile2 = function(event) {
    var r = new FileReader();
    r.onload = function(){
      var preview = document.getElementById('images2');
      preview.src = r.result;
    };
    r.readAsDataURL(event.target.files[0]);
  };

  var renderFile3 = function(event) {
    var r = new FileReader();
    r.onload = function(){
      var preview = document.getElementById('images3');
      preview.src = r.result;
    };
    r.readAsDataURL(event.target.files[0]);
  };

  var renderFile4 = function(event) {
    var r = new FileReader();
    r.onload = function(){
      var preview = document.getElementById('images4');
      preview.src = r.result;
    };
    r.readAsDataURL(event.target.files[0]);
  };

  var renderFile5 = function(event) {
    var r = new FileReader();
    r.onload = function(){
      var preview = document.getElementById('images5');
      preview.src = r.result;
    };
    r.readAsDataURL(event.target.files[0]);
  };


/*คำอธิบายบริการ*/ 
/*ช่อง1 */ 
/*เพิ่มคำอธิบายบริการ*/
var Description1 = document.getElementById("Description1");
var inputDescri1 = document.getElementById("input-descri1");
inputDescri1.oninput = (event) =>{
    Description1.textContent = event.target.value;
}

/*เพิ่มคำอธิบายบริการ*/
var Description2 = document.getElementById("Description2");
var inputDescri2 = document.getElementById("input-descri2");
inputDescri2.oninput = (event) =>{
    Description2.textContent = event.target.value;
}

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








