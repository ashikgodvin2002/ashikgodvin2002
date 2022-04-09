function ageindays123(){
	var age = prompt("enter your birth year ");
	var ageindays = (2018 - age) *365;
	var h1 = document.createElement('h1');
	var textAnswer = document.createTextNode('you are '+ageindays +' old');
	h1.setAttribute('id','ageindays123');
	h1.appendChild(textAnswer);
	document.getElementById('buts123').appendChild(h1);

}

function resetall(){
	document.getElementById('ageindays123').remove();
}