const Validator = require('./Validator');

// Main function for testing the Validator class functionality
function main() {

     // usage Validator class

     const validator = new Validator();
     validator.setMobileNumberCountry("Sri Lanka"); // Set the country for phone number validation

     const emailIsValid = validator.emailValidator("ChamodDilshan@gmail.com"); // Return value is true or false
     const passwordIsValid = validator.passwordValidator("Chamod1234"); // Return value is true or false
     const phoneIsValid = validator.phoneValidator("0718239845"); // Return value is true or false

     console.log(emailIsValid);
     console.log(passwordIsValid);
     console.log(phoneIsValid);
}

// Main method call
main();