const cancel = () => {
  document.getElementById("form_edit_profile").reset();
};

const closeSideBar = () => {
  document.getElementById("side-bar").style.display = "none";
};

const openSideBar = () => {
  document.getElementById("side-bar").style.display = "inline-block";
};

const choosingSideBar = (event) => {
  event.children[0].children[0].style.fill = "black";
  event.style.color = "black";
  document.querySelectorAll(".icon-text-sidebar").forEach((element) => {
    if (event !== element) {
      element.children[0].children[0].style.fill = "#858585";
      element.style.color = "#858585";
    }
  });
};
let form = document.getElementById("form_edit_profile");
const firstName = form["first-name"];
const lastName = form["last-name"];
const email = form["email"];
const address = form["address"];
const phoneNumber = form["phone-number"];
const city = form["city"];
const validForm = () => {
  const isFirstName = firstName.value.trim().length == 0;
  const isLastName = lastName.value.trim().length == 0;
  const isEmail = email.value.trim().length == 0;
  const isAddress = address.value.trim().length == 0;
  const isPhoneNumber = phoneNumber.value.trim().length == 0;
  const isCity = city.value.trim().length == 0;
  if (
    !isFirstName &&
    !isLastName &&
    !isEmail &&
    !isAddress &&
    !isPhoneNumber &&
    !isCity
  )
    return true;
  isFirstName
    ? (firstName.style.borderColor = "red")
    : (firstName.style.borderColor = "black");
  isLastName
    ? (lastName.style.borderColor = "red")
    : (lastName.style.borderColor = "black");
  isEmail
    ? (email.style.borderColor = "red")
    : (email.style.borderColor = "black");
  isAddress
    ? (address.style.borderColor = "red")
    : (address.style.borderColor = "black");
  isPhoneNumber
    ? (phoneNumber.style.borderColor = "red")
    : (phoneNumber.style.borderColor = "black");
  isCity
    ? (city.style.borderColor = "red")
    : (city.style.borderColor = "black");
  return false;
};

const validEmail = () => {
  let form = document.getElementById("form_edit_profile");
  let regex =
    /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (
    form["email"].value.trim().length == 0 ||
    !regex.test(form["email"].value)
  ) {
    form["email"].style.borderColor = "red";
    document.querySelector(".fa-solid.fa-square-xmark").classList.add("active");
  } else {
    form["email"].style.borderColor = "black";
    document
      .querySelector(".fa-solid.fa-square-xmark")
      .classList.remove("active");
    document.querySelector(".fa-solid.fa-square-check").classList.add("active");
  }
};
const id = localStorage.getItem("userinfo");
fetch(`https://dummyjson.com/users/${1}`)
  .then((res) => res.json())
  .then((data) => {
    console.log(data);
    document.getElementById("profile-image").setAttribute("src", data.image);
    firstName.value = data.firstName;
    lastName.value = data.lastName;
    address.value = data.address.address;
    email.value = data.email;
    phoneNumber.value = data.phone;
    city.value = data.address.city;
  });

const logout = () => {
  localStorage.removeItem("userinfo");
  localStorage.removeItem("token");
  window.location.replace("login.html");
};
