function checkAdress() {
    if (document.getElementById("adress").value !== "") {
alert("no bots allowed here")
      return false;
    }
    return true;
  };

  let formContact = document.querySelector(".box");
  let error = document.querySelector("#Error");
  formContact.addEventListener("submit", function (evt) {
    let email = document.querySelector("#email");
    let email2 = document.querySelector("#email2");
    if (email.value != email2.value) {
      error.innerHTML = "Email stimmt nicht überein!";
      evt.preventDefault();
    } else {
      redirect
    }
  });