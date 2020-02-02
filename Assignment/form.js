let inputs = document.getElementsByTagName('input');

let button = document.querySelector('button');

button.addEventListener("click", function(event) {
	event.preventDefault();
	for (let item of inputs) {
 	console.log(item.value);
}
});

// VALIDATE CONFIRM PASSWORD FIELD
let password = document.getElementById("password"),
	confirm = document.getElementById("confirm");

confirm.addEventListener('input', function() {
	confirm.setAttribute('pattern', password.value);
});

confirm.addEventListener('change', function() {
	confirm.setAttribute('pattern', password.value);
});

password.addEventListener('change', function() {
	confirm.setAttribute('pattern', password.value);
});