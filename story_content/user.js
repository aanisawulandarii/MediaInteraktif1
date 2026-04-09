window.InitUserScripts = function()
{
var player = GetPlayer();
var object = player.object;
var addToTimeline = player.addToTimeline;
var setVar = player.SetVar;
var getVar = player.GetVar;
window.Script1 = function()
{
  var audio = document.getElementById('bgSong');
audio.src="1.mp3"
audio.load();
audio.play();
audio.volume = 0.4;
}

window.Script2 = function()
{
  // Mengambil variabel dari Articulate
var player = GetPlayer();
var nama = player.GetVar("Nama");

// SEKARANG AMBIL DARI VARIABEL JEMBATAN KITA
var nilai = player.GetVar("NilaiKirim3"); 

// URL formResponse dari Google Form kamu
var formURL = "https://docs.google.com/forms/d/e/1FAIpQLSf6Luf5YqqWq6n4D8Jbf9_T4lAbOmDKkD_byB9gdHYEtDdQrg/formResponse";

// Membuat data form yang akan dikirim
var formData = new FormData();
// Ganti 1234567 dengan Entry ID untuk Nama
formData.append("entry.1851968527", nama); 
// Ganti 891011 dengan Entry ID untuk Nilai
formData.append("entry.1615981629", nilai); 

// Mengirim data tanpa harus membuka halaman Google Form (di balik layar)
fetch(formURL, {
  method: "POST",
  mode: "no-cors",
  body: formData
})
.then(response => {
  // Notifikasi pop-up yang ramah untuk siswa (Bisa kamu edit teksnya)
  alert("Kerja bagus, " + nama + "! Jawaban dan nilaimu (" + nilai + ") sudah berhasil dikirim ke guru.");
})
.catch(error => {
  // Notifikasi jika gagal (misal karena internet putus)
  alert("Yah, sepertinya ada masalah koneksi. Coba periksa internetmu dan klik kirim lagi ya.");
});

}

window.Script3 = function()
{
  // Mengambil variabel dari Articulate
var player = GetPlayer();
var nama = player.GetVar("Nama");

// SEKARANG AMBIL DARI VARIABEL JEMBATAN KITA
var nilai = player.GetVar("NilaiKirim2"); 

// URL formResponse dari Google Form kamu
var formURL = "https://docs.google.com/forms/d/e/1FAIpQLSeIjQkwnp3-nhAA-4gjiaQ1FhOG0FsZ4D0T0BwM9TUKgUlWDQ/formResponse";

// Membuat data form yang akan dikirim
var formData = new FormData();
// Ganti 1234567 dengan Entry ID untuk Nama
formData.append("entry.1033820566", nama); 
// Ganti 891011 dengan Entry ID untuk Nilai
formData.append("entry.1772535688", nilai); 

// Mengirim data tanpa harus membuka halaman Google Form (di balik layar)
fetch(formURL, {
  method: "POST",
  mode: "no-cors",
  body: formData
})
.then(response => {
  // Notifikasi pop-up yang ramah untuk siswa (Bisa kamu edit teksnya)
  alert("Kerja bagus, " + nama + "! Jawaban dan nilaimu (" + nilai + ") sudah berhasil dikirim ke guru.");
})
.catch(error => {
  // Notifikasi jika gagal (misal karena internet putus)
  alert("Yah, sepertinya ada masalah koneksi. Coba periksa internetmu dan klik kirim lagi ya.");
});
}

window.Script4 = function()
{
  // Mengambil variabel dari Articulate
var player = GetPlayer();
var nama = player.GetVar("Nama");

// SEKARANG AMBIL DARI VARIABEL JEMBATAN KITA
var nilai = player.GetVar("NilaiKirim1"); 

// URL formResponse dari Google Form kamu
var formURL = "https://docs.google.com/forms/d/e/1FAIpQLSd0aYIkgvALTLAOs_IcgzAqjjbeo9C8YqpCnvKIS4qrGQu3Nw/formResponse";

// Membuat data form yang akan dikirim
var formData = new FormData();
// Ganti 1234567 dengan Entry ID untuk Nama
formData.append("entry.856879901", nama); 
// Ganti 891011 dengan Entry ID untuk Nilai
formData.append("entry.1568155878", nilai); 

// Mengirim data tanpa harus membuka halaman Google Form (di balik layar)
fetch(formURL, {
  method: "POST",
  mode: "no-cors",
  body: formData
})
.then(response => {
  // Notifikasi pop-up yang ramah untuk siswa (Bisa kamu edit teksnya)
  alert("Kerja bagus, " + nama + "! Jawaban dan nilaimu (" + nilai + ") sudah berhasil dikirim ke guru.");
})
.catch(error => {
  // Notifikasi jika gagal (misal karena internet putus)
  alert("Yah, sepertinya ada masalah koneksi. Coba periksa internetmu dan klik kirim lagi ya.");
});
}

window.Script5 = function()
{
  var player = GetPlayer();

// 1. Mengambil data dari variabel Articulate
var vNama = player.GetVar("Nama");
var vSkor1 = player.GetVar("padat1");
var vSkor2 = player.GetVar("padat2");
var vSkor3 = player.GetVar("padat3");
var vSkor4 = player.GetVar("padat4");

// 2. URL formResponse Google Form kamu
var formURL = "https://docs.google.com/forms/d/e/1FAIpQLSdVYMVP1FwFb1D4DmVHXO_FpCXbk-BU70W5tcVlKJbvg9M9iQ/formResponse";

// 3. Menyiapkan data untuk dikirim
var formData = new FormData();

// GANTI ANGKA ENTRY ID DI BAWAH SESUAI HASIL CATATAN KAMU DI LANGKAH 1
formData.append("entry.1328784654", vNama); 
formData.append("entry.1228120058", vSkor1);
formData.append("entry.1944498158", vSkor2);
formData.append("entry.1066245521", vSkor3);
formData.append("entry.893480637", vSkor4);

// 4. Proses pengiriman ke Google Form
fetch(formURL, {
  method: "POST",
  mode: "no-cors", // Penting agar tidak kena error CORS browser
  body: formData
})
.then(response => {
  // Opsi tambahan: kamu bisa mengganti teks di Articulate untuk memberitahu siswa data sudah terkirim
  console.log("Data berhasil dikirim!");
})
.catch(error => {
  console.error("Terjadi kesalahan", error);
});
}

window.Script6 = function()
{
  var player = GetPlayer();

// 1. Mengambil data dari variabel Articulate
var vNama = player.GetVar("Nama");
var vSkor1 = player.GetVar("jawab1");
var vSkor2 = player.GetVar("jawab2");
var vSkor3 = player.GetVar("jawab3");
var vSkor4 = player.GetVar("jawab4");

// 2. URL formResponse Google Form kamu
var formURL = "https://docs.google.com/forms/d/e/1FAIpQLScjfHxTi2k2h9zKQAcLP5fBTOLc798QXtc5G0SjVmRiTLvYKA/formResponse";

// 3. Menyiapkan data untuk dikirim
var formData = new FormData();

// GANTI ANGKA ENTRY ID DI BAWAH SESUAI HASIL CATATAN KAMU DI LANGKAH 1
formData.append("entry.38686831", vNama); 
formData.append("entry.1989175480", vSkor1);
formData.append("entry.724856447", vSkor2);
formData.append("entry.2062610898", vSkor3);
formData.append("entry.1458488657", vSkor4);

// 4. Proses pengiriman ke Google Form
fetch(formURL, {
  method: "POST",
  mode: "no-cors", // Penting agar tidak kena error CORS browser
  body: formData
})
.then(response => {
  // Opsi tambahan: kamu bisa mengganti teks di Articulate untuk memberitahu siswa data sudah terkirim
  console.log("Data berhasil dikirim!");
})
.catch(error => {
  console.error("Terjadi kesalahan", error);
});
}

};
