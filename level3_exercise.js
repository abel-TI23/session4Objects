// ==========================================
// LEVEL 3: OBJECT COLLECTIONS AND TRANSFORMATIONS
// Case 1: Inventory Summary
// Case 2: Group Students by Major
// ==========================================

// --- CASE 1: Inventory Summary ---
const products = [
  { name: "Kopi Robusta 250g", price: 35000, stock: 12 },
  { name: "Cup 12 oz (pack)", price: 30000, stock: 3 },
  { name: "Sirup Karamel 1L", price: 52000, stock: 2 },
  { name: "Susu UHT 1L", price: 21000, stock: 8 },
  { name: "Sedotan Steril", price: 15000, stock: 4 }
];

// ponytail: native reduce/filter; add currency formatting utility if client needs localized strings
function getInventorySummary(items) {
  const totalValue = items.reduce((sum, item) => sum + (item.price * item.stock), 0);
  const lowStockProducts = items
    .filter(item => item.stock < 5)
    .map(item => item.name);

  return { totalValue, lowStockProducts };
}

console.log("=== CASE 1: Inventory Summary ===");
const summary = getInventorySummary(products);
console.log("Daftar Produk:", products);
console.log("Total Nilai Inventaris : Rp", summary.totalValue.toLocaleString());
console.log("Produk Stok Rendah (<5):", summary.lowStockProducts);


// --- CASE 2: Group Students by Major ---
const studentList = [
  { id: 1, name: "Abel Hendrik", major: "Teknik Informatika" },
  { id: 2, name: "Siti Rahma", major: "Sistem Informasi" },
  { id: 3, name: "Budi Santoso", major: "Teknik Informatika" },
  { id: 4, name: "Dewi Lestari", major: "Desain Komunikasi Visual" },
  { id: 5, name: "Rian Pratama", major: "Sistem Informasi" }
];

function groupByMajor(students) {
  return students.reduce((grouped, student) => {
    const major = student.major;
    if (!grouped[major]) {
      grouped[major] = [];
    }
    grouped[major].push(student);
    return grouped;
  }, {});
}

console.log("\n=== CASE 2: Group Students by Major ===");
const groupedStudents = groupByMajor(studentList);
console.log(JSON.stringify(groupedStudents, null, 2));
