// Bài 1
document.getElementById('btn-tinh').onclick = function tinhDiemChuan(){
    var diemChuan = document.getElementById("diem-chuan").value,
    khuVuc = +(document.getElementById("khu-vuc").value),
    diemMon1 = Number(document.getElementById("mon-1").value),
    doiTuong = Number(document.getElementById("doi-tuong").value),
    diemMon2 = Number(document.getElementById("mon-2").value),
    diemMon3 = Number(document.getElementById("mon-3").value),
    m = !0;
    if (m&=checkScore(diemMon1)&&checkScore(diemMon2)&&checkScore(diemMon3)){
        var sum = diemMon1 + diemMon2 + diemMon3 + (khuVuc + doiTuong);
        document.getElementById("txt-KetQua").innerHTML = sum >= diemChuan ? "Bạn đã đậu. Tổng điểm: "+ sum :"Bạn đã rớt. Tổng điểm: " + sum;
        }
    else 
        document.getElementById("txt-KetQua").innerHTML="Bạn đã rớt. Do có điểm nhỏ hơn hoặc bằng 0";
    }
    function checkScore(e){
            return!(e <= 0);
    }

// Bài 2
document.getElementById('btn-tinhTienDien').onclick = function tinhTienDien(){
    var name  = document.getElementById("nhap-ho-ten").value,
    n = Number(document.getElementById("nhap-kw").value),
    kw_1 = 500, kw_2 = 650, kw_3 = 850, kw_4 = 1100, kw_5 = 1300,
    t = 0;
    0 < n && n <= 50 ? t = n * kw_1 : n > 50 && n <= 100 ? t = 50 * kw_1 + (n - 50) * kw_2 : n > 100 && n <= 200 ? t = 50 * kw_1 + 50 * kw_2 + (n - 100) * kw_3 : n > 200 && n <= 350 ? t = 50 * kw_1 + 50 * kw_2 + 100 * kw_3 + (n-200) * kw_4 : n > 350 ? t = 50 * kw_1 + 50 * kw_2 + 100 * kw_3 + 150 * kw_4 + (n - 350) * kw_5 : alert("Số kw không hợp lệ! Vui lòng nhập lại");
    t = new Intl.NumberFormat("vn-VN").format(t),document.getElementById("txt-ketQuaTinhTienDien").innerHTML = "Họ tên: "+ name +"; Tiền điện: " + t;
}