let tasks = JSON.parse(localStorage.getItem('tasks')) || [];


let ul = document.querySelector('.list-group');
let btn = document.querySelector('.clear-btn');
let addTask = document.querySelector('.add-task');
let input = document.querySelector('.form-control');
let notificationAlert = document.querySelector('.notification-alert');
let empty = document.querySelector('.alertEmpty');
let form = document.forms['addTodoItem'];


function generateId(){
	let id = '';
	let word = '123456789qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM';
	for(let i = 0; i < 15; i++){
		let position = Math.floor(Math.random() * word.length);
		id += word[position];
	}

	return id;
}

// function showMessage( text ){
//   	message.innerHTML = text;
//   	message.classList.add('show');
//   	setTimeout(removeClass, 1000)
//   }
  
function removeClass(){
  	message.classList.remove('show');
  	message.classList.remove('alert-danger');
  }

function editListItem(id, newValue){
		for(let i = 0; i < tasks.length; i++){
		if(tasks[i].id === id){
			tasks[i].text = newValue;
			break;
		}
	}
		localStorage.setItem('tasks', JSON.stringify(tasks));


message({
	text: 'Задача успешно coхранена',
	cssClass: 'alert-success',
	timeout: 4000
});

}

function message(options){
	notificationAlert.classList.add(options.cssClass);
	notificationAlert.textContent = options.text;
	notificationAlert.classList.add('show');

	setTimeout(function(){
		notificationAlert.classList.remove('show');

	}, options.timeout);

}


function delListItem(id){
	for(let i = 0; i < tasks.length; i++){
		if(tasks[i].id === id){
			tasks.splice(i, 1);
			break;
		}
	}
	
	showEmpty();
	localStorage.setItem('tasks', JSON.stringify(tasks));

	message({
	text: 'Задача успешно удалена',
	cssClass: 'alert-danger',
	timeout: 4000
});
	}


ul.addEventListener('click', function(e){
	if(e.target.classList.contains('delete-item')){
		let parent = e.target.closest('li');
		let id = parent.dataset.id;
		delListItem(id);
		parent.remove();
  }
  else if(e.target.classList.contains('edit-item')){
  	let span = e.target.closest('li').querySelector('span');
  	let id = e.target.closest('li').dataset.id;
  	e.target.classList.toggle('fa-save');
  	if(e.target.classList.contains('fa-save')){
  		span.setAttribute('contenteditable', true);
  		span.focus();
  	}else{
  		span.setAttribute('contenteditable', false);
  		span.blur();
  		editListItem(id, span.textContent);
  	}
  }
});

function generateList( taskArray ){
	clearList();
	for (var i = 0; i < taskArray.length; i++) {
		ul.appendChild(listTemplate(taskArray[i]));
		localStorage.setItem('tasks', JSON.stringify(tasks));

	}
	  showEmpty();
}

function listTemplate(task){
	let li = document.createElement('li');
	let span = document.createElement('span');
	span.setAttribute('contenteditable', false);
	span.textContent = task.text;
	li.className = 'list-group-item d-flex align-items-center';
	li.setAttribute('data-id', task.id);
	let iDelete = document.createElement('i');
	iDelete.className = 'fas fa-trash-alt delete-item ml-4';
	let iEdit = document.createElement('i');
	iEdit.className = 'fas fa-pencil-alt edit-item ml-auto';
	li.appendChild(span);
	li.appendChild(iEdit);
	li.appendChild(iDelete);	
	return li;
}
function clearList(){
	ul.innerHTML = '';
}
function addList(list){
	let newTask = {
		id: generateId(),
		text: list
	};
	tasks.unshift(newTask);
	ul.insertAdjacentElement('afterbegin', listTemplate(newTask));
	generateList(tasks);
}
function clearListAndItems(){
	tasks.splice(0, tasks.length)
	localStorage.setItem('tasks', JSON.stringify(tasks));
	showEmpty();
}

function showEmpty(){
	if(tasks.length == 0){
		empty.classList.add('show');
		empty.innerHTML = 'Список задач пуст';
	}else {
		empty.classList.remove('show');
	}
}


generateList( tasks );

  btn.addEventListener('click', clearListAndItems);

  form.addEventListener('submit', function(e){
  	e.preventDefault();
  	if( !input.value ){
  		input.classList.add('is-invalid')
  		
  	}else{
  	addList(input.value);
  	// message.classList.add('alert-success');
  	// showMessage('Задача успешно добавлена');
  	 	input.classList.remove('is-invalid');
  	form.reset();
}
  })

  input.addEventListener('keyup', function(e){
 	input.classList.remove('is-invalid');
  });




ajax.send({
	method: 'GET',
	url: 'https://jsonplaceholder.typicode.com/todos',
	success: function(res){
		let response = JSON.parse(res);
		console.log(response);
	},
	error: function(err){
		console.log(err);
	}
})

// ajax.send({
// 	method: 'POST',
// 	url: 'https://jsonplaceholder.typicode.com/todos',
// 	data: JSON.stringify({
// 		title: 'foo',
// 		body: 'bar',
// 		userId: 201
// 	}),
// 	headers: {
// 		"Content TODO": "application/json; charset=UTF-8"
// 	},
// 	success: function(res){
// 		let response = JSON.parse(res);
// 		console.log(response);
// 	},
// 	error: function(err){
// 		console.log(err);
// 	},

// })

