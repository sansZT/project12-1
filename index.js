// tính tiền lương nhân viên
// đầu vào
var NgayLam = 5
var LuongMotNgay = 100000
// xử lý
var Luong = LuongMotNgay * NgayLam
// đầu ra
console.log('Tính tiền lương nhân viên: ' + Luong)

// tính giá trị tring bình
// đầu vào
var NamSo = 12345
// xử lý
var num1 = Math.floor(NamSo/10000)
var num2 = Math.floor(NamSo/1000%10)
var num3 = Math.floor(NamSo/100%10)
var num4 = Math.floor(NamSo/10%10)
var num5 = NamSo%10
var trungbinh = (num1 + num2 + num3 + num4 +num5) / 5
// đầu ra
console.log('Tính giá trị trung bình: ' + trungbinh)

// quy đổi tiền
// đầu vào
var usd = 2
var vnd = 23500
// xử lý
var quydoi = vnd * usd
// đầu ra
console.log('Quy đổi tiền: ' + quydoi + 'vnđ')

// tính diện tích chu vi hình chữ nhật
// đầu vào
var dai = 6
var rong = 10
// xử lý
var dientich = dai * rong
var chuvi = (dai + rong)*2
// đầu ra
console.log('Tính diện tích, chu vi hình chữ nhật:')
console.log('- Diện tích = ' + dientich)
console.log('- Chu vi = ' + chuvi)

// tính tổng 2 ký số
// đầu vào
var number = 12
// xử lý
var num1 = Math.floor(number/10)
var num2 = number%10
var tong = num1 + num2
// đầu ra
console.log('Tính tổng 2 ký số: ' + tong)
