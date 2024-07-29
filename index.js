dbUsers = [];

const registrationName = document.querySelector("#name");
const registrationUsername = document.querySelector("#username");
const registrationEmail = document.querySelector("#email");
const registrationPassword = document.querySelector("#password");
const registrationRepeat = document.querySelector("#repeat");
const registrationButton = document.querySelector("#regBtn");
const registrationForm = document.querySelector("#regForm");

registrationForm.addEventListener("submit", (e) => {
  e.preventDefault();

  try {
    if (
      !registrationEmail.value &&
      !registrationName.value &&
      !registrationPassword.value &&
      !registrationRepeat.value &&
      !registrationUsername.value
    ) {
      throw new Error("Please make sure all fields are filled correctly");
    } else if (registrationPassword.value !== registrationRepeat.value) {
      throw new Error("The password and the repeat password don't match");
    } else if (registrationPassword.value.length < 8) {
      throw new Error("The password must be at least 8 characters long!");
    } else if (registrationUsername.value !== registrationName.value) {
      console.log("hallihallå");
    } else {
      console.log("siuper diuper!");
      const registrationData = {
        name: registrationName.value,
        username: registrationUsername.value,
        email: registrationEmail.value,
        password: registrationPassword.value,
      };
      console.log(registrationData);
    }
  } catch (error) {
    console.log(error);
  }
});
