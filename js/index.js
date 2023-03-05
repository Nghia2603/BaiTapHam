// Bài 1
document.getElementById('btn-tinh').onclick = function tinhDiemChuan() {
    var diemChuan = document.getElementById("diem-chuan").value,
        khuVuc = +(document.getElementById("khu-vuc").value),
        diemMon1 = Number(document.getElementById("mon-1").value),
        doiTuong = Number(document.getElementById("doi-tuong").value),
        diemMon2 = Number(document.getElementById("mon-2").value),
        diemMon3 = Number(document.getElementById("mon-3").value),
        m = !0;
    if (m &= checkScore(diemMon1) && checkScore(diemMon2) && checkScore(diemMon3)) {
        var sum = diemMon1 + diemMon2 + diemMon3 + (khuVuc + doiTuong);
        document.getElementById("txt-KetQua").innerHTML = sum >= diemChuan ? "Bạn đã đậu. Tổng điểm: " + sum : "Bạn đã rớt. Tổng điểm: " + sum;
    }
    else
        document.getElementById("txt-KetQua").innerHTML = "Bạn đã rớt. Do có điểm nhỏ hơn hoặc bằng 0";
}
function checkScore(e) {
    return !(e <= 0);
}

// Bài 2
document.getElementById('btn-tinhTienDien').onclick = function tinhTienDien() {
    var name = document.getElementById("nhap-ho-ten").value,
        n = Number(document.getElementById("nhap-kw").value),
        kw_1 = 500, kw_2 = 650, kw_3 = 850, kw_4 = 1100, kw_5 = 1300,
        t = 0;
    0 < n && n <= 50 ? t = n * kw_1 : n > 50 && n <= 100 ? t = 50 * kw_1 + (n - 50) * kw_2 : n > 100 && n <= 200 ? t = 50 * kw_1 + 50 * kw_2 + (n - 100) * kw_3 : n > 200 && n <= 350 ? t = 50 * kw_1 + 50 * kw_2 + 100 * kw_3 + (n - 200) * kw_4 : n > 350 ? t = 50 * kw_1 + 50 * kw_2 + 100 * kw_3 + 150 * kw_4 + (n - 350) * kw_5 : alert("Số kw không hợp lệ! Vui lòng nhập lại");
    t = new Intl.NumberFormat("vn-VN").format(t), document.getElementById("txt-ketQuaTinhTienDien").innerHTML = "Họ tên: " + name + "; Tiền điện: " + t;
}

// Bài 3
document.getElementById('btn-tinhThue').onclick = function tinhThue() {
    var e = document.getElementById("nhap-ten").value,
        n = document.getElementById("nhap-luong-nam").value - 4e6 - 16e5 * document.getElementById("so-nguoi").value,
        t = 0;
    n > 0 && n <= 6e7 ? t = .05 * n : n > 6e7 && n <= 12e7 ? t = .1 * n : n > 12e7 && n <= 21e7 ? t = .15 * n : n > 21e7 && n <= 384e6 ? t = .2 * n : n > 384e6 && n <= 624e6 ? t = .25 * n : n > 624e6 && n <= 96e7 ? t = .3 * n : n > 96e7 ? t = .35 * n : alert("Số tiền thu nhập không hợp lệ");
    t = new Intl.NumberFormat("vn-VN").format(t);
    document.getElementById("txt-thue").innerHTML = "Họ tên: " + e + "; Tiền thuế thu nhập cá nhân: " + t + " VND";
}

// Bài 4
function disableInput() {
    var e = document.getElementById("loai-KH").value;
    document.getElementById("so-ketNoi").style.display = "company" == e ? "block" : "none";
}
document.getElementById('btn-tinhTien').onclick = function tinhTienCap() {
    var e = document.getElementById("loai-KH").value,
        n = document.getElementById("ma-KH").value,
        t = document.getElementById("nhap-kenh").value,
        u = document.getElementById("so-ketNoi").value,
        c = 0;
    "company" == e ? c = tinhTong(15, 75, 50, t, u, 5) : "user" == e ? c = tinhTong(4.5, 20.5, 7.5, t, 0, 0) : alert("Hãy chọn loại khách hàng"), document.getElementById("txt-KQ-tinhTienCap").innerHTML = "Mã khách hàng: " + n + "; Tiền cáp: " + new Intl.NumberFormat("en-US", { style: "currency", currency: "USD" }).format(c);
}
function tinhTong(e, n, t, u, c, l) {
    var m = e + n + t * u;
    return c > 10 && (m += (c - 10) * l), m;
}
 
    