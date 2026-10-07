let portIds = ['S01', 'S02', 'S03', 'S04', 'S05', 'S06'];
let portStatuses = ['AVAILABLE', 'CHARGING', 'ERROR', 'AVAILABLE', 'CHARGING', 'AVAILABLE'];
let portPowersKw = [250, 150, 60, 250, 60, 150];

let viTriS01 = portIds.indexOf('S01');
if (viTriS01 !== -1) {
  portStatuses[viTriS01] = 'CHARGING';
  console.log("Đã cập nhật: Trụ " + portIds[viTriS01] + " đang sạc (CHARGING).");
}
let viTriS03 = portIds.indexOf('S03');
if (viTriS03 !== -1) {
  portStatuses[viTriS03] = 'AVAILABLE';
  console.log("Đã cập nhật: Trụ " + portIds[viTriS03] + " đã sửa xong (AVAILABLE).");
}
let soTruSanSang = 0;
let congSuatMax = 0;
let truSanhSangManhNhat = "";
for (let i = 0; i < portIds.length; i++) {
  if (portStatuses[i] === 'AVAILABLE') {
    soTruSanSang = soTruSanSang + 1;   
    if (portPowersKw[i] > congSuatMax) {
      congSuatMax = portPowersKw[i];
      truSanhSangManhNhat = portIds[i];
    }
  }
}
console.log("\n--- BÁO CÁO TÌNH TRẠNG TRẠM SẠC VINFAST ---");
console.log("Danh sách trạng thái hiện tại:");
for (let i = 0; i < portIds.length; i++) {
  console.log("- " + portIds[i] + ": " + portStatuses[i] + " (" + portPowersKw[i] + "kW)");
}
console.log("-------------------------------------------");
console.log("Tổng số trụ đang sẵn sàng: " + soTruSanSang + " trụ.");
console.log("Trụ sẵn sàng có công suất cao nhất: " + truSanhSangManhNhat + " với " + congSuatMax + "kW.");