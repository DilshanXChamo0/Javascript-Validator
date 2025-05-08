// A simple Validator class for validating email, password, and phone numbers
// Supports customizable regex patterns for different countries and use cases
// Default implementation includes validation for Sri Lanka and USA phone numbers

class Validator {

     numberType = null;

     constructor() { }

     setMobileNumberCountry(country) {
          this.numberType = country;
     }

     emailValidator(email) {
          const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
          return emailRegex.test(email);
     }

     passwordValidator(password) {
          const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;
          return passwordRegex.test(password);
     }

     phoneValidator(phone) {

          if (this.numberType == null) {
               return "Please set your country name using `setMobileNumberCountry` this method after call `phoneValidator` method";
          }

          if (this.numberType == "Sri Lanka") {
               const phoneRegex = /^(?:\+94|[012345678])\d{9}$/;
               return phoneRegex.test(phone);
          }

          // for example
          if (this.numberType == "USA") {
               const phoneRegex = /^\+1\d{10}$/;
               return phoneRegex.test(phone);
          }

          return "You can change the number type and Regex pattern for your country";
     }
}

// export class
module.exports = Validator;