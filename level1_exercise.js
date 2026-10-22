// ==========================================
// LEVEL 1: OBJECT BASICS
// Case 1: Student Object
// Case 4: Dynamic Property Access
// ==========================================

// --- CASE 1: Create a student object ---
const student = {
  name: "Abel Hendrik",
  age: 20,
  major: "Teknik Informatika"
};

console.log("=== CASE 1: Student Object ===");
console.log("Name :", student.name);
console.log("Age  :", student.age);
console.log("Major:", student.major);

// --- CASE 4: Dynamic Property Access ---
const book = {
  title: "Clean Code",
  author: "Robert C. Martin",
  year: 2008
};

// ponytail: bracket notation direct lookup; add safe null-check if target object can be undefined
function getProperty(object, key) {
  return object[key];
}

console.log("\n=== CASE 4: Dynamic Property Access ===");
console.log("Title :", getProperty(book, "title"));
console.log("Author:", getProperty(book, "author"));
console.log("Year  :", getProperty(book, "year"));
console.log("ISBN (non-existent):", getProperty(book, "isbn"));
