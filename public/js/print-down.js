// ฟังก์ชันสำหรับดาวน์โหลด PDF โดยใช้ html2pdf
function downloadPdf() {
    const content = document.querySelector('.London'); // เลือกเนื้อหาที่ต้องการสร้างเป็น PDF
    html2pdf()
        .from(content)
        .save("reportService.pdf"); // กำหนดชื่อไฟล์ PDF
}

// สร้างฟังก์ชันสำหรับการพิมตในหน้าใหม่
function printConto() {
    // สร้างหน้าใหม่เพื่อพิมพ์เฉพาะส่วนนี้
    const printWindow = window.open('', '', 'width=10000,height=1000');
    // กำหนดเนื้อหาของหน้าใหม่เป็นส่วน <div class="tabcontent">
    printWindow.document.write(`
        <html>
        <head>
            <style>
               
                .tabcontent {
                    text-align: center;
                }
                .tabless {
                    text-align: center;
                    border-collapse: collapse;
                    width: 100%;
                    font-size: 16px;
                    margin-left: 15px;
                }
                .h1 {
                    font-size: 20px;
                    text-align: center;
                    margin-top: 20px;
                }
                .total3 {
                    float: right;
                    margin-right: 125px;
                }
            </style>
        </head>
        <body>
            ${document.querySelector('.London').innerHTML}
        </body>
        </html>
    `);

    // ทำการพิมตให้หน้าใหม่
    printWindow.print();

    // ปิดหน้าใหม่หลังการพิมพ์
    printWindow.close();
}

// เพิ่มการดักจับคลิกปุ่ม "Print"
printButton.addEventListener('click', printConto);






// ฟังก์ชันสำหรับดาวน์โหลด PDF โดยใช้ html2pdf
function downloadPdf1() {
    const content = document.querySelector('.Paris'); // เลือกเนื้อหาที่ต้องการสร้างเป็น PDF
    html2pdf()
        .from(content)
        .save("reportStock.pdf"); // กำหนดชื่อไฟล์ PDF
}

// สร้างฟังก์ชันสำหรับการพิมตในหน้าใหม่
function printConto1() {
    // สร้างหน้าใหม่เพื่อพิมพ์เฉพาะส่วนนี้
    const printWindow = window.open('', '', 'width=10000,height=1000');
    // กำหนดเนื้อหาของหน้าใหม่เป็นส่วน <div class="tabcontent">
    printWindow.document.write(`
        <html>
        <head>
            <style>
                .tables2 {
                    text-align: center;
                    border-collapse: collapse;
                    width: 100%;
                    font-size: 16px;
                }
                .h1 {
                    font-size: 20px;
                    text-align: center;
                    margin-top: 20px;
                }
                .total {
                    float: right;
                    margin-right: 30px;
                  }
                 
            </style>
        </head>
        <body>
            ${document.querySelector('.Paris').innerHTML}
        </body>
        </html>
    `);

    // ทำการพิมตให้หน้าใหม่
    printWindow.print();

    // ปิดหน้าใหม่หลังการพิมพ์
    printWindow.close();
}

// เพิ่มการดักจับคลิกปุ่ม "Print"
printButton.addEventListener('click', printConto);
