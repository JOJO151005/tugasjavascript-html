// 1. Buat class Pelanggan
class Pelanggan {
  constructor(nama, nomorTelepon) {
    this.nama = nama;
    this.nomorTelepon = nomorTelepon;
    this.kendaraanDisewa = null; 
  }

  // Metode untuk mencatat transaksi penyewaan
  sewaKendaraan(kendaraan) {
    this.kendaraanDisewa = kendaraan;
    console.log(`[TRANSAKSI VIP] ${this.nama} berhasil menyewa: ${this.kendaraanDisewa}`);
  }
}

// 2. Buat sistem yang menampilkan daftar pelanggan yang sedang menyewa
class SistemManajemen {
  constructor() {
    this.daftarPelanggan = [];
  }

  tambahPelanggan(pelanggan) {
    this.daftarPelanggan.push(pelanggan);
  }

  tampilkanPenyewa() {
    console.log("\n=== DAFTAR PELANGGAN VIP (SPORTS CAR) ===");
    
    const sedangMenyewa = this.daftarPelanggan.filter(p => p.kendaraanDisewa !== null);

    if (sedangMenyewa.length === 0) {
      console.log("Belum ada data penyewaan kendaraan saat ini.");
    } else {
      let nomor = 1;
      for (let p of sedangMenyewa) {
        // Format teks dirapikan agar enak dibaca saat di terminal
        console.log(`${nomor}. Nama: ${p.nama} | Telp: ${p.nomorTelepon}`);
        console.log(`   Mobil : ${p.kendaraanDisewa}\n`);
        nomor++;
      }
    }
    console.log("===========================================\n");
  }
}

// ==========================================
// SIMULASI PENGGUNAAN PROGRAM VIP
// ==========================================

const sistem = new SistemManajemen();

// Membuat data ke-8 pelanggan dengan nomor telepon acak
const p1 = new Pelanggan("Jonathan Hibran Ramadhan", "0812-8473-9281");
const p2 = new Pelanggan("Julian Arya Krismandanu", "0857-1928-3746");
const p3 = new Pelanggan("Jihad Iman Ibrahim", "0811-5647-3829");
const p4 = new Pelanggan("Obidzar Kisai", "0821-9384-7561");
const p5 = new Pelanggan("Muhammad Roffi", "0813-4758-2930");
const p6 = new Pelanggan("Muntas Syafi", "0878-2839-4756");
const p7 = new Pelanggan("Muhamad Iqbal", "0896-5748-3920");
const p8 = new Pelanggan("Lazuardi Chandra", "0815-3847-5619");

// Mendaftarkan semua pelanggan ke dalam sistem
sistem.tambahPelanggan(p1);
sistem.tambahPelanggan(p2);
sistem.tambahPelanggan(p3);
sistem.tambahPelanggan(p4);
sistem.tambahPelanggan(p5);
sistem.tambahPelanggan(p6);
sistem.tambahPelanggan(p7);
sistem.tambahPelanggan(p8);

// Mencatat transaksi penyewaan dengan mobil sport mewah
p1.sewaKendaraan("Bugatti Chiron Super Sport (Rp 60 Miliar)");
p2.sewaKendaraan("Lamborghini Revuelto (Rp 25 Miliar)");
p3.sewaKendaraan("Ferrari LaFerrari (Rp 50 Miliar)");
p4.sewaKendaraan("Koenigsegg Jesko Absolut (Rp 45 Miliar)");
p5.sewaKendaraan("McLaren P1 (Rp 35 Miliar)");
p6.sewaKendaraan("Pagani Huayra Roadster (Rp 55 Miliar)");
p7.sewaKendaraan("Aston Martin Valkyrie (Rp 48 Miliar)");
p8.sewaKendaraan("Porsche 918 Spyder (Rp 22 Miliar)");

// Menampilkan daftar pelanggan yang sedang menyewa
sistem.tampilkanPenyewa();