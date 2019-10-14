// const axios = require('axios');
console.log("hello");
const form = document.querySelector(".login-form");
// const axios = require("axios");
const button = document.querySelector("#buttonout");
const logout = async () => {
  try {
    const res = await axios.get("/user/logout");
    //  console.log(res+"uhdfuhfi");
    // const res;
    if (res.data.status === "user logged out") {
      alert("User logged out");
      window.setTimeout(() => {
        location.assign("/home", 1000);
      });
    }
  } catch (err) {
    console.log("hello" + err);
  }
};
const login = async (email, password) => {
  //  alert("Email :"+email+"  Password: "+ password);
  try {
    const data = { email, password };
    console.log(data);
    const res = await axios.post("/user/login", data);
    //  console.log(res+"uhdfuhfi");
    // const res;
    if (res.data.status === "user logged in") {
      alert("User logged in");
      window.setTimeout(() => {
        location.assign("/api/profile", 1000);
      });
    }
  } catch (err) {
    console.log("hello" + err);
  }
};
if (button) {
  console.log("hello");
  button.addEventListener("click", e => {
    e.preventDefault();
    logout();
  });
}

if (form) {
  form.addEventListener("submit", e => {
    e.preventDefault();
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    console.log(email);
    console.log(password);
    login(email, password);
  });
}
