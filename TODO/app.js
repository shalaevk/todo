// init tasks
const tasks = Tasks.getInstance();
// init ui
const ui = Ui;

//init observe
const addtasks = new Observer();
const removeTask = new Observer();
const clearAllTasks = new Observer();


//init local storage module
const local = Local;

//init notification
const notify = Notify;

//subscribe on task event
addtasks.subscribe(local.update);
addtasks.subscribe(ui.clearInput);
addtasks.subscribe(notify.show);
addtasks.subscribe(notify.hide);
addtasks.subscribe(ui.chekList);

removeTask.subscribe(local.update);
removeTask.subscribe(notify.show);
removeTask.subscribe(notify.hide);
removeTask.subscribe(ui.chekList);

clearAllTasks.subscribe(local.clearTasks);
clearAllTasks.subscribe(tasks.clearTasks);
clearAllTasks.subscribe(notify.show);
clearAllTasks.subscribe(notify.hide);
clearAllTasks.subscribe(ui.chekList);




// init Elements
const form = document.forms['addTodoItem'];
const inputText = document.querySelector('.form-control');
const ul = document.querySelector('.list-group');
const clearBtn = document.querySelector('.clear-btn');
const editTask = document.querySelector('.edit-item');


// const ui = new Ui();
// const server = new Jsonplaceholder;
window.addEventListener('load', function(e){
 let ls = local.getTasks();
	if(local.getTasks() !== null){
	let localTasks = tasks.setTasks(ls);
	for (var i = 0; i < localTasks.length; i++) {
		ui.addTask(localTasks[i]);
		ui.chekList();
		}
	}else{
		ui.chekList();
	}	
})

form.addEventListener('submit', function(e){
	  	e.preventDefault();
	  	if( !inputText.value ){
	  		//show error, is-invalid
	  		inputText.classList.add('is-invalid');

	  	}else{
	  		// let newTask = tasks.addTask({text: inputText.value})
	  		// ui.addTask(newTask);
	  	 inputText.classList.remove('is-invalid');
	  	// form.reset();
	  	tasks.addTask({text: inputText.value})
	  		.then(task => ui.addTask(task))
	  		.then(() => addtasks.fire({text:'Задача успешно добавлена', class: 'alert-success'}))

	}
	  });

ul.addEventListener('click', function(e){
	let id = e.target.closest('li').getAttribute('data-id');
	let span = e.target.closest('li').querySelector('span');

	if(e.target.classList.contains('delete-item')){
		tasks.removeTask(id)
		.then(() => ui.deleteTask(id))
		.then(() => removeTask.fire({text: 'Задача успешно удалена', class: 'alert-danger'}))
	}else if(e.target.classList.contains('edit-item')){
		e.target.classList.toggle('fa-save');
		ui.saveTask(id);
		if(e.target.classList.contains('fa-save')){
			ui.editTask(id);
		}else{
  			tasks.editTask(id, span.textContent);
			local.update();
  		}
	}
})

clearBtn.addEventListener('click', function(e){
	if(ul.children.length !== 0){
	ul.innerHTML = '';
	clearAllTasks.fire({text: 'Список задач успешно очищен', class: 'alert-danger'});
	}
})

// let tasks = [] ;

// server.getTodos()
// 	.then( res => {
// 		for(let i = 0; i < res.length; i++){
// 		  tasks.push(res[i]);		
// 		}
//  		ui.generateList( tasks );
//  		return res
// 	})
// 	.then( res => btn.addEventListener('click', ui.clearListAndItems));



//   input.addEventListener('keyup', function(e){
//  	input.classList.remove('is-invalid');
//   });
	
// ul.addEventListener('click', ui.editItem)


// event.subscribe(ui.showEmpty);