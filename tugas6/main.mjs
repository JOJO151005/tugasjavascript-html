// main.mjs
import { index, store, destroy } from "./controller.mjs";

const main = () => {
  console.log("1. MENAMPILKAN 10 DATA AWAL");
  index();

  console.log("2. MENAMBAHKAN 2 DATA BARU");
  // Menggunakan nama ke-11 dan ke-12 dari daftar
  store({ nama: 'Yusuf Andika', umur: 21, alamat: 'Jl. Raya Bogor KM 30, Tugu, Depok', email: 'yusuf.andika@gmail.com' });
  store({ nama: 'Arya Nuryawan', umur: 20, alamat: 'Jl. Nusantara Raya, Beji, Depok', email: 'arya.nuryawan@gmail.com' });
  console.log("\n");

  console.log("3. MENAMPILKAN DATA SETELAH DITAMBAH (Total 12 Data)");
  index();

  console.log("4. MENGHAPUS DATA (Data paling terakhir akan dihapus)");
  destroy(); 
  console.log("\n");

  console.log("5. MENAMPILKAN DATA SETELAH DIHAPUS (Total 11 Data)");
  index();
};

// Menjalankan program utama
main();