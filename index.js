const registrationForm = document.querySelector("#regForm");
const regButton = document.querySelector("#regButton");
const users = JSON.parse(localStorage.getItem("users")) || [];

registrationForm.addEventListener("submit", (e) => {
  e.preventDefault();

  try {
    if (
      !e.target.email.value &&
      !e.target.name.value &&
      !e.target.password.value &&
      !e.target.repeat.value &&
      !e.target.username.value
    ) {
      throw new Error("Please make sure all fields are filled correctly");
    } else if (e.target.password.value !== e.target.repeat.value) {
      throw new Error("The password and the repeat password don't match");
    } else if (e.target.password.value.length < 8) {
      throw new Error("The password must be at least 8 characters long!");
    } else if (
      users.some((user) => user.username === e.target.username.value)
    ) {
      throw new Error(
        "This username already exists please choose a different one."
      );
    } else if (users.some((user) => user.email === e.target.email.value)) {
      throw new Error(
        "A user with this email already exists. Please log in to your existing account."
      );
    } else {
      console.log("siuper diuper!");
      const registrationData = {
        name: e.target.name.value,
        username: e.target.username.value,
        email: e.target.email.value,
        password: e.target.password.value,
      };
      users.push(registrationData);
      console.log("users", users);
      localStorage.setItem("users", JSON.stringify(users));
    }
  } catch (error) {
    if (errorMessage !== null) {
      errorMessage.remove();
    }
    let errorMessage = document.createElement("h5");
    errorMessage.innerText = error;
    errorMessage.style.color = "red";
    registrationForm.insertBefore(errorMessage, regButton);
  }
});
