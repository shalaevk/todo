// init tasks module
const allTasks = Tasks.getInstance();

const Local = (function(){
	const update = function(){
		localStorage.setItem('tasks', JSON.stringify(allTasks.getTasks()))
	}
	const getTasks = function(){
		return JSON.parse(localStorage.getItem('tasks'));
	}
	const clearTasks = function(){
		localStorage.setItem('tasks', JSON.stringify(null));
	}
	return{
		update,
		getTasks,
		clearTasks
	}
}())