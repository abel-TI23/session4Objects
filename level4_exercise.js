// ==========================================
// LEVEL 4: OBJECT DESIGN AND DATA INTEGRITY
// Case 1: Deep Clone Function (No JSON / structuredClone)
// Case 2: Object Validator
// ==========================================

// --- CASE 1: Deep Clone Function ---
// ponytail: handles primitives, nested plain objects & arrays; add Date/RegExp/cyclic reference detection if cloning arbitrary class instances
function deepClone(value) {
  if (value === null || typeof value !== "object") {
    return value; // Primitif (string, number, boolean, null, undefined)
  }

  if (Array.isArray(value)) {
    return value.map(item => deepClone(item));
  }

  const copy = {};
  for (const key of Object.keys(value)) {
    copy[key] = deepClone(value[key]);
  }
  return copy;
}

console.log("=== CASE 1: Deep Clone Function ===");
const originalProfile = {
  id: 101,
  name: "Abel Hendrik",
  skills: ["JavaScript", "Python"],
  meta: {
    role: "Admin",
    preferences: { theme: "dark" }
  }
};

const clonedProfile = deepClone(originalProfile);

// Mutasi pada hasil clone
clonedProfile.name = "Budi";
clonedProfile.skills.push("Rust");
clonedProfile.meta.preferences.theme = "light";

console.log("Original Name       :", originalProfile.name); // Tetap 'Abel Hendrik'
console.log("Original Skills     :", originalProfile.skills); // Tetap 2 items
console.log("Original Theme      :", originalProfile.meta.preferences.theme); // Tetap 'dark'
console.log("Cloned Name         :", clonedProfile.name);
console.log("Cloned Skills       :", clonedProfile.skills);
console.log("Cloned Theme        :", clonedProfile.meta.preferences.theme);
console.log("Is meta object identical?", originalProfile.meta === clonedProfile.meta); // false


// --- CASE 2: Object Validator ---
// ponytail: schema check covers required, type, and min for numbers; extend with regex/enum for complex forms
function validate(object, schema) {
  const errors = [];

  for (const [property, rules] of Object.entries(schema)) {
    const value = object[property];
    const hasValue = value !== undefined && value !== null && value !== "";

    // 1. Required check
    if (rules.required && !hasValue) {
      errors.push({ property, reason: "Property wajib diisi (required)" });
      continue;
    }

    if (!hasValue) continue;

    // 2. Data type check
    if (rules.type && typeof value !== rules.type) {
      errors.push({
        property,
        reason: `Tipe data harus '${rules.type}', didapatkan '${typeof value}'`
      });
      continue;
    }

    // 3. Minimum value check (for numbers)
    if (typeof value === "number" && rules.min !== undefined && value < rules.min) {
      errors.push({
        property,
        reason: `Nilai minimal adalah ${rules.min}, didapatkan ${value}`
      });
    }
  }

  return {
    isValid: errors.length === 0,
    errors
  };
}

console.log("\n=== CASE 2: Object Validator ===");
const userSchema = {
  username: { type: "string", required: true },
  age: { type: "number", required: true, min: 18 },
  score: { type: "number", min: 0 },
  email: { type: "string", required: false }
};

// Skenario A: Input Valid
const validUser = {
  username: "marwhal",
  age: 21,
  score: 85,
  email: "abel@example.com"
};

// Skenario B: Input Tidak Valid (demonstrasi validasi)
const invalidUser = {
  username: "",          // Gagal: required
  age: 15,               // Gagal: min 18
  score: "delapan puluh",// Gagal: tipe data bukan number
  email: 12345           // Gagal: tipe data bukan string
};

console.log("Hasil Validasi Input VALID   :", validate(validUser, userSchema));
console.log("Hasil Validasi Input INVALID :");
console.log(JSON.stringify(validate(invalidUser, userSchema), null, 2));
