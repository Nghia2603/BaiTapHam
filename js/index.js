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