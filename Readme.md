# 📦 Validator.JS

A simple and customizable JavaScript class for validating **emails**, **passwords**, and **phone numbers**.  
Easily extendable with support for multiple countries — includes built-in validation for **Sri Lanka** and **USA** phone numbers.

---

## 🚀 Features

- ✅ Email format validation
- 🔐 Password strength validation (at least 8 characters, including uppercase, lowercase, and a number)
- 📞 Mobile number validation with support for multiple countries
- ⚙️ Customizable regular expressions
- 🧪 Lightweight and easy to use

---

## 📁 Installation

Simply copy the `Validator` class into your JavaScript project.

No dependencies needed.

---

## 🛠️ Usage

```js
// Import or define the Validator class
const validator = new Validator();

// Set the country for phone number validation
validator.setMobileNumberCountry("Sri Lanka"); // or "USA"

// Email Validation
const isEmailValid = validator.emailValidator("ChamodDilshan@gmail.com");
console.log("Email is valid:", isEmailValid);

// Password Validation
const isPasswordValid = validator.passwordValidator("Chamod1234");
console.log("Password is valid:", isPasswordValid);

// Phone Validation
const isPhoneValid = validator.phoneValidator("0718239845");
console.log("Phone number is valid:", isPhoneValid);