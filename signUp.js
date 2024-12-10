let username = document.getElementById("username");
let email = document.getElementById("email");
let number = document.getElementById("number");
let password = document.getElementById("password");
let submitButton = document.getElementById("submit_btn");

let flag = false;

let userData = {
  username: "",
  email: "",
  number: "",
  password: "",
};

const valueZero = function () {
  username.value = "";
  number.value = "";
  email.value = "";
  password.value = "";
};

function ValidateEmail(mail) {
  if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail)) {
    return (flag = true);
  }
  alert("You have entered an invalid email address!");
  return (flag = false);
}
function ValidatePassword(pass) {
  if (pass.length >= 8) {
    return (flag = true);
  }
  alert("Password is too short");
  return (flag = false);
}
function ValidatPhone(phone) {
  if (/^[6-9]\d{9}$/gi.test(phone)) {
    return (flag = true);
  }
  alert("You have entered an invalid phone number!");
  return (flag = false);
}
function validation() {
  ValidateEmail(userData.email);
  ValidatePassword(userData.password);
  ValidatPhone(userData.number);
}

submitButton.addEventListener("click", async function postData() {
  userData.username = username.value;
  userData.email = email.value;
  userData.number = number.value;
  userData.password = password.value;
  validation();
  if (userData.username == "") {
    flag = false;
    alert("Please Enter username");
  }

  try {
    await fetch("https://6615754ab8b8e32ffc7b0405.mockapi.io/user_data", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userData),
    });

    if (flag) {
      alert("account created");
      window.location.href = "login.html";
      valueZero();
    }
  } catch (error) {
    console.error("Error:", error);
  }
});
