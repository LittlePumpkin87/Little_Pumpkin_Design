let timer = setInterval(countUpTimer, 1000);
let totalSeconds = 0;

function countUpTimer() {
  ++totalSeconds;
  let seconds = totalSeconds ;
  document.getElementById('time').value = seconds;
}


function checkAdress() {
    if (document.getElementById("adress").value !== "" || document.getElementById("time").value < 10 ){
window.location.replace("https://little-pumpkin-design.com/Bots.html");
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
    }
  });

  function onSubmit() {
    document.getElementById("form").submit();
  }