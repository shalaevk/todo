const Notify = (function(){
	let note = document.querySelector('.notification-alert');


	const show = function(message){
		note.classList.add('show');
		note.classList.add(message.class);
		note.innerHTML = message.text;
	}

	const hide = function(message){
		setTimeout(() => {
			note.classList.remove('show');
			note.classList.remove(message.class);
		},1000);
	}

	return{
		show, hide
	}
	
}());
