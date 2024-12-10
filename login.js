let url = "https://6615754ab8b8e32ffc7b0405.mockapi.io/user_data";
let email = document.getElementById("email");
let password = document.getElementById("password");
let submitButton = document.getElementById("submit_btn");
let data;
let flag = true;

const fetching = async function () {
  const response = await fetch(url);
  data = await response.json();
  console.log(data);
};

fetching();

submitButton.addEventListener("click", () => {
  data.map((res) => {
    if (res.email == email.value && res.password == password.value) {
      window.location.href = "index.html";
      flag = false;
    }
  });
  if (flag) {
    alert("wrong credentials");
  }
});
