let clickColor = document.querySelectorAll('.btn');
clickColor.forEach(function (button) {
    button.addEventListener('click', function () {
        button.style.opacity = "0.5";
        button.style.fontSize = "25px";
    });
    button.addEventListener('mouseleave', function () {
        button.style.opacity = "1";
        button.style.fontSize = "20px";
    });
});

// use script

let buttons = document.querySelectorAll('.btn');
let result = document.getElementById('input');

// Gán sự kiện cho các nút
buttons.forEach(function(button) {
    button.addEventListener('click', function () {
        // Chỉ thêm số hoặc phép toán nếu không phải nút xóa hoặc nút "="
        if (this.value !== 'C' && this.value !== 'AC' && this.value !== '=') {
            result.innerHTML += this.value; // Thêm văn bản nút vào kết quả
        }
    });
});

// Hàm tính toán biểu thức
function equal() {
    let res = result.innerHTML;
    try {
        let output = eval(res);
        result.innerHTML = output;
    } catch (error) {
        result.innerHTML = "Lỗi"; // Xử lý biểu thức không hợp lệ
    }
}

// Hàm xóa nội dung
function clean() {
    result.innerHTML = '';
}

// Hàm hoàn tác nhập liệu
function undo() {
    let res = result.innerHTML;
    result.innerHTML = res.substring(0, res.length - 1); // Sửa để xóa ký tự cuối cùng
}