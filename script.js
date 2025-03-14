
let password = document.getElementById('inputPassword').value
let strengthHead = document.getElementById('strengthResult')

let strength = 0

function checkStrength() {

  if (password.length >= 8) strength += 1;
  if (/[A-Z]/.test(password)) strength += 1;
  if (/[a-z]/.test(password)) strength += 1;
  if (/[0-9]/.test(password)) strength += 1;
  if (/[^A-Za-z0-9]/.test(password)) strength += 1;

  console.log(strength);

  if (strength <= 2) {
    strengthHead.innerHTML = "Week Password"
    strengthHead.style.color = 'red'
  }
  else if (strength > 2 && strength <= 4) {
    strengthHead.innerHTML = "Medium Password"
    strengthHead.style.color = 'orange'
  }
  else if (strength > 4) {
    strengthHead.innerHTML = "Strong Password"
    strengthHead.style.color = 'green'
  }
}
function ClearField() {
  document.getElementById('inputPassword').value = ""
  strength = 0;
  strengthHead.innerHTML = "&nbsp;"
}