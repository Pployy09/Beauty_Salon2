// รับอ้างอิง DOM elements ที่ต้องใช้
const addFormButton = document.getElementById('addFormButton');
const formContainer = document.getElementById('formContainer');

// ฟังก์ชันสำหรับเพิ่มฟอร์ม
function addForm() {
    // สร้าง div ที่ใช้เป็น container ของฟอร์ม
    const formDiv = document.createElement('div');
    formDiv.className = 'container';

    // HTML ของฟอร์มที่คุณต้องการเพิ่ม
    const formHTML = `
        <form action="">
        <div class = "add">
        <div class = "block">
            <div class="row">
                <div class="col-25">
                    <label for="fname">หัวข้อ</label>
                </div>
                <div class="col-75">
                    <input type="text" id="fname" name="subject" placeholder="หัวข้อ...">
                </div>
            </div>

            <div class="row">
                <div class="col-25">
                    <label for="subject">คำอธิบาย</label>
                </div>
                <div class="col-75">
                    <textarea id="subject" name="information" placeholder="คำอธิบาย...." style="height:200px"></textarea>
                </div>
            </div>
            <br>
            <div class="row">
                <input type="submit" value="Submit">
            </div>
            </div>
            </div>
        </form>
    `;

    // กำหนด HTML ของฟอร์มใน div container
    formDiv.innerHTML = formHTML;

    // เพิ่มฟอร์มลงใน container
    formContainer.appendChild(formDiv);
}

// เรียกใช้ฟังก์ชัน addForm เมื่อหน้าเว็บโหลดเสร็จ
window.addEventListener('load', addForm);

// เพิ่ม Event Listener สำหรับปุ่ม "เพิ่มฟอร์ม"
addFormButton.addEventListener('click', addForm);

