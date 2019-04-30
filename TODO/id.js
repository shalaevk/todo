

const Id = (function(){


	let word = '123456789qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM';
	const generateId = function(){
	let id = '';
	
	for(let i = 0; i < 15; i++){
		let position = Math.floor(Math.random() * word.length);
		id += word[position];
	}
		return id;
		
		}
	return{
		generateId
	}// модуль возвращает объект с методом generateId

}());