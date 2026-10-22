// ==========================================
// LEVEL 2: METHODS AND NESTED OBJECTS
// Case 1: Rectangle Calculator
// Case 2: Bank Account Manager
// ==========================================

// --- CASE 1: Rectangle Calculator ---
const rectangle = {
  width: 10,
  height: 5,
  getArea() {
    return this.width * this.height;
  },
  getPerimeter() {
    return 2 * (this.width + this.height);
  }
};

console.log("=== CASE 1: Rectangle Calculator ===");
console.log(`Width: ${rectangle.width}, Height: ${rectangle.height}`);
console.log("Area     :", rectangle.getArea());
console.log("Perimeter:", rectangle.getPerimeter());

// --- CASE 2: Bank Account Manager ---
const account = {
  owner: "Abel Hendrik",
  balance: 500000,

  deposit(amount) {
    if (amount <= 0) {
      console.log(`[REJECTED] Deposit gagal: jumlah harus positif (diminta: ${amount})`);
      return false;
    }
    this.balance += amount;
    console.log(`[SUCCESS] Deposit +Rp${amount.toLocaleString()} -> Saldo: Rp${this.balance.toLocaleString()}`);
    return true;
  },

  // ponytail: console feedback for teaching demo; replace with throw Error in production service layer
  withdraw(amount) {
    if (amount <= 0) {
      console.log(`[REJECTED] Penarikan gagal: jumlah harus positif (diminta: ${amount})`);
      return false;
    }
    if (amount > this.balance) {
      console.log(`[REJECTED] Penarikan gagal: saldo tidak cukup (saldo: Rp${this.balance.toLocaleString()}, diminta: Rp${amount.toLocaleString()})`);
      return false;
    }
    this.balance -= amount;
    console.log(`[SUCCESS] Penarikan -Rp${amount.toLocaleString()} -> Saldo: Rp${this.balance.toLocaleString()}`);
    return true;
  }
};

console.log("\n=== CASE 2: Bank Account Manager ===");
console.log(`Pemilik: ${account.owner}, Saldo Awal: Rp${account.balance.toLocaleString()}`);
account.deposit(200000);   // valid deposit
account.deposit(-50000);   // invalid negative deposit
account.withdraw(300000);  // valid withdraw
account.withdraw(900000);  // invalid overdraft
account.withdraw(-10000);  // invalid negative withdraw
console.log(`Saldo Akhir: Rp${account.balance.toLocaleString()}`);
