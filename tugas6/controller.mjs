// controller.mjs
import users from "./data.mjs";

const index = () => {
  console.log("=== DAFTAR USERS ===");
  // Menampilkan data menggunakan map()
  users.map((user, i) => {
    console.log(`${i + 1}. Nama: ${user.nama}, Umur: ${user.umur}, Alamat: ${user.alamat}, Email: ${user.email}`);
  });
  console.log("====================\n");
};

const store = (user) => {
  // Menambah data menggunakan push
  users.push(user);
  console.log(`[Berhasil] Data ${user.nama} telah ditambahkan.`);
};

const destroy = () => {
  // Menghapus data paling terakhir dari array menggunakan pop()
  const removed = users.pop();
  console.log(`[Berhasil] Data ${removed.nama} telah dihapus.`);
};

export { index, store, destroy };