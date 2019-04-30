const Ui = (function(){

	const input = document.querySelector('.form-control');
	const ul = document.querySelector('.list-group');
	const emptyAlert = document.querySelector('.alertEmpty');

	const listTemplate = function(task){
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

	const addTask = function(task){

		ul.insertAdjacentElement('afterbegin', listTemplate(task));
	}

	const clearInput = function(){
		input.value = '';
	}

	const editTask = function(id){
		const li = document.querySelector(`[data-id="${id}"]`);
		li.firstChild.setAttribute("contenteditable", true);
		li.firstChild.focus();
	}

	const saveTask = function(id){
		const li = document.querySelector(`[data-id="${id}"]`);
		li.firstChild.setAttribute("contenteditable", false);
		li.firstChild.blur();
	}

	const deleteTask = function(id){
		const li = document.querySelector(`[data-id="${id}"]`);
		li.remove();
	}

	const chekList = function(){
		if(!ul.children.length){
			emptyAlert.classList.add('show');
		}
		else{
			emptyAlert.classList.remove('show');
		}
	}
	return{ 
		addTask,
		deleteTask,
		chekList,
		clearInput,
		listTemplate,
		editTask,
		saveTask
	}

}());










// // const ev = new Observer();

// const ide = new idGenerator;

// class Ui{
// 	constructor(){

// 		this.ul = document.querySelector('.list-group');
// 		this.li = document.querySelectorAll('.list-group-item');
// 		this.addTask = document.querySelector('.add-task');
// 		this.notificationAlert = document.querySelector('.notification-alert');
// 		this.empty = document.querySelector('.alertEmpty');
// 		// this.tasks = JSON.parse(localStorage.getItem('tasks')) || [];
// 	}
	



// 	generateList( taskArray ){
// 	// clearList();
// 	for (var i = 0; i < taskArray.length; i++) {
// 		this.ul.appendChild(ui.listTemplate(taskArray[i]));
// 		// localStorage.setItem('tasks', JSON.stringify(tasks));

// 	}
// 	  // findLi();
// 	  ui.showEmpty();
// }



// 	addList(list){//добавляем новую задачу в список
// 	let newTask = {
// 		id: ide.generateId(),
// 		text: list
// 	};
// 	tasks.unshift(newTask);
// 	this.ul.insertAdjacentElement('afterbegin', ui.listTemplate(newTask));
// 	}

// 	clearListAndItems(){// очищаем список задач и удаляем задачи
// 	tasks.splice(0, tasks.length)
// 	localStorage.setItem('tasks', JSON.stringify(this.tasks));
// 	ui.clearList();
// 	event.fire()
// 	// ui.showEmpty();
// 	}

// 	clearList(){ //очищаем список задач
// 	this.ul.innerHTML = '';
// 	}

// 	editItem(e){// редактируем задачу в списке
// 	if(e.target.classList.contains('delete-item')){
// 		let parent = e.target.closest('li');
// 		let id = parent.dataset.id;
// 		ui.delListItem(id);
// 		parent.remove();
//   }
//   else if(e.target.classList.contains('edit-item')){
//   	let span = e.target.closest('li').querySelector('span');
//   	let id = e.target.closest('li').dataset.id;
//   	e.target.classList.toggle('fa-save');
//   	if(e.target.classList.contains('fa-save')){
//   		span.setAttribute('contenteditable', true);
//   		span.focus();
//   	}else{
//   		span.setAttribute('contenteditable', false);
//   		span.blur();
// 	  	ui.editListItem(id, span.textContent);
// 	  	}
// 	  }
// 	}

// 	editListItem(id, newValue){
// 		for(let i = 0; i < this.tasks.length; i++){
// 		if(this.tasks[i].id === id){
// 			this.tasks[i].text = newValue;
// 			break;
// 		}
// 	}
// 		localStorage.setItem('tasks', JSON.stringify(this.tasks))
// 	}

// 	delListItem(id){
// 	for(let i = 0; i < tasks.length; i++){
// 		if(tasks[i].id === id){
// 			tasks.splice(i, 1);
// 			break;
// 			}
// 		}
// 	}

// 	removeClass(){
// 	  	message.classList.remove('show');
// 	  	message.classList.remove('alert-danger');
// 	  }


// 	message(options){
// 	notificationAlert.classList.add(options.cssClass);
// 	notificationAlert.textContent = options.text;
// 	notificationAlert.classList.add('show');

// 	setTimeout(function(){
// 		notificationAlert.classList.remove('show');

// 	}, options.timeout);

// }

// showEmpty(){// выводим сообщение что список задач пуст
// 	if(tasks.length == 0){
// 		this.empty.classList.add('show');
// 		this.empty.innerHTML = 'Список задач пуст';
// 	}else {
// 		this.empty.classList.remove('show');
// 	}
// }

// };

