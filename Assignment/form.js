let inputs = document.getElementsByTagName('input');

//let getValue = document.querySelector('get-value');

// getValue.addEventListener('click', function(){
// 	for (let item of inputs) {
// 	console.log(item.value);
// }
// })

let button = document.querySelector('button');

button.addEventListener("click", function(event) {
	event.preventDefault();
	for (let item of inputs) {
 	console.log(item.value);
}
});