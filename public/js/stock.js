    document.addEventListener('DOMContentLoaded', () => {
        const productForm = document.getElementById('productForm');
    productForm.addEventListener('submit', (event) => {
        event.preventDefault();

        const data = {
            name_product: document.getElementById('name_product').value,
            brand_product: document.getElementById('brand_product').value,
            unit_product: document.getElementById('unit_product').value,
            price_product: document.getElementById('price_product').value,
            detail_product: document.getElementById('detail_product').value,
        };

        fetch('/stock-admin', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        })
        .then(response => response.text()) // ใช้ .text() แทน .json()
        .then(result => {
            // ทำอะไรก็ตามที่คุณต้องการกับ HTML หรือข้อมูลที่ไม่ใช่ JSON ที่คุณได้รับ
            window.location.href = '/stock-admin';
        })
        .catch(error => console.error('เกิดข้อผิดพลาด: ' + error));
    });
});

