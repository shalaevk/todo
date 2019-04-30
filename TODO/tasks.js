 // init Id module
const id = Id;

const Tasks = (function(){

	let tasks = [];
	let instance;

	const getTasks = function(){
		return tasks;
	}// возврщает массив с задачами

	const setTasks = function(array){
		tasks = array;
		return tasks
	}// принимает задачи и присваивает их в массив

	const addTask = async function(task){
		task.id = id.generateId();
		await tasks.unshift(task);
		return task;
	}

	const removeTask = async function(id){
		tasks = await tasks.filter(task => task.id !== id);
		return tasks;
 	}

 	const clearTasks = function(){
 		tasks = [];
 	}

 	const editTask = function(id, newValue){
 		for(let i = 0; i < tasks.length; i++){
		if(tasks[i].id === id){
			tasks[i].text = newValue;
			break;
			}
		}
 	}

	const createInstance = function(){
		return {
			getTasks,
			setTasks,
			addTask,
			removeTask,
			clearTasks,
			editTask
		}
	}

	return{
		getInstance: function(){
			return instance || (instance = createInstance());
		}// возвращает инстанс или делает его равным вызову ф-ции криейт инстанс
	}
}())






