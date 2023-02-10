emailjs.init("qlQbgkFkaiGtNp28D");
var splash = document.getElementById("splash")
var splashButton = document.getElementById("splashButton")
var form = document.getElementById("form")
var formButton = document.getElementById("formButton")

function sendEmail() {
  let templateParameters = {
    "type": document.getElementById("type").value,
    "name": document.getElementById("name").value,
    "email": document.getElementById("email").value,
    "phone": document.getElementById("phoneNumber").value,
    "message": document.getElementById("message").value
  }

  emailjs.send("service_q52uk7q", "template_8kjzt8q", templateParameters)
      .then(function(response) {alert("Message Received Successfully!");
      }, function(error) {alert("Error Sending Message/nPlease Try Again")
      })
}

function showSplash() {
  splash.style.display = "flex"
  splashButton.disabled = true
  form.style.display = "none"
  formButton.disabled = false
}

function showForm() {
  splash.style.display = "none"
  splashButton.disabled = false
  form.style.display = "flex"   
  formButton.disabled = true
}