// **Data Produk Awal (Diperbanyak menjadi 10 Produk)**
let produkList = [
  { id: 1, nama: "Laptop Asus ROG", harga: 25000000 },
  { id: 2, nama: "Smartphone Samsung", harga: 12000000 },
  { id: 3, nama: "Smartwatch Garmin", harga: 5000000 },
  { id: 4, nama: "Headphone Sony", harga: 4500000 },
  { id: 5, nama: "Kamera Canon DSLR", harga: 10000000 },
  { id: 6, nama: "Tablet iPad Air", harga: 11000000 },
  { id: 7, nama: "Monitor LG Ultrawide", harga: 6000000 },
  { id: 8, nama: "Keyboard Mechanical Keychron", harga: 1500000 },
  { id: 9, nama: "Mouse Wireless Logitech", harga: 800000 },
  { id: 10, nama: "Microphone Rode", harga: 2000000 }
];

// **Simulasi Event Listener**
const eventHandler = {
  onTambah: function(id, nama, harga) {
    console.log(`[EVENT] Tombol Tambah diklik untuk: ${nama}`);
    tambahProduk(id, nama, harga);
  },
  onHapus: function(...ids) {
    console.log(`[EVENT] Tombol Hapus diklik untuk ID: ${ids.join(', ')}`);
    hapusProduk(...ids);
  }
};

// **Menambahkan Produk dengan Spread Operator**
function tambahProduk(id, nama, harga) {
  const produkBaru = { id, nama, harga };
  // Spread Operator (...) membongkar array lama, lalu ditambahkan produkBaru di belakangnya
  produkList = [...produkList, produkBaru];
}

// **Menghapus Produk dengan Rest Parameter**
// Rest parameter (...ids) menangkap berapapun jumlah ID yang dimasukkan
function hapusProduk(...ids) {
  // Menyaring array: simpan produk yang ID-nya TIDAK ADA di dalam kumpulan ID yang dihapus
  produkList = produkList.filter(produk => !ids.includes(produk.id));
}

// **Menampilkan Produk dengan Destructuring**
function tampilkanProduk() {
  console.log("=== DAFTAR PRODUK TOKO ONLINE ===");
  produkList.forEach(produk => {
    // Destructuring: Membongkar properti objek langsung ke dalam variabel
    const { id, nama, harga } = produk; 
    console.log(`${id}. ${nama} - Rp ${harga.toLocaleString('id-ID')}`);
  });
  console.log("=================================\n");
}

// ==========================================
// CONTOH PENJALANAN KODE (Sesuai Soal)
// ==========================================

console.log("1. KONDISI AWAL");
tampilkanProduk();

console.log("2. SETELAH PENAMBAHAN DATA");
// Menambahkan produk baru (menggunakan ID 11) melalui eventHandler
eventHandler.onTambah(11, "Speaker Bluetooth JBL", 1200000); 
tampilkanProduk();

console.log("3. SETELAH PENGHAPUSAN DATA");
// Menghapus produk dengan ID 2 (Smartphone Samsung) melalui eventHandler
eventHandler.onHapus(2); 
tampilkanProduk();