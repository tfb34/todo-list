
/* public function
 * creates and shows form for new task,
 * and disables 'add task' button in DOM
*/

export default function showTaskForm(){
	let form = createTaskForm();
	showForm(form);
	disableAddTaskButton();
}

let priorities = ["priority 4", "priority 3", "priority 2", "priority 1"];

// Returns a form for a new task
function createTaskForm(){
	let form = document.createElement("form");
	form.setAttribute("name","taskForm");
	form.setAttribute("id","taskForm");
	// task input
	let inputTask = document.createElement("input");// task input
	inputTask.setAttribute("name","task");
	inputTask.setAttribute("type", "text");
	inputTask.setAttribute("placeholder","Practice guitar for 30mins");
	inputTask.setAttribute("class","formTextInput formTaskInput");
	inputTask.setAttribute("maxlength","100");
	// date schedule
	let dateInput = document.createElement("input");
	dateInput.setAttribute("name","date");
	dateInput.setAttribute("type","date");
	dateInput.setAttribute("placeholder", "Due Date");
	dateInput.setAttribute("class","formTextInput formTaskInput formDateInput");
	// priority select list
	let selectPriority = document.createElement("select");// priority 'input'
	selectPriority.id = "selectPriority";
	selectPriority.setAttribute("name","selectPriority");

	for(let i = 0; i<priorities.length; i++){
		let option = document.createElement("option");
		option.setAttribute("value",priorities[i]);
		option.text = priorities[i];
		selectPriority.appendChild(option);
	}
	// submit button
	let inputSubmit = document.createElement("input");
	inputSubmit.setAttribute("type","button");
	inputSubmit.id = "submitTaskButton";
	inputSubmit.setAttribute("value","Add Task");
	inputSubmit.setAttribute("onclick","handleNewTodo()");
	inputSubmit.setAttribute("class","formButton");

	// cancel button
	let cancel = document.createElement("a");
	cancel.setAttribute("href","#");
	cancel.innerHTML = "Cancel";
	cancel.setAttribute("onclick","removeTaskForm()");
	cancel.setAttribute("class","cancelButton");
	// put everything together
	form.appendChild(inputTask);
	form.appendChild(dateInput);
	form.appendChild(inputSubmit);
	form.appendChild(cancel);
	form.appendChild(selectPriority);


	return form;
};

function showForm(form){
	document.getElementsByClassName('right-column')[0].appendChild(form);
};

function disableAddTaskButton(){
	let b = document.getElementById("AddTaskButton");
	b.setAttribute("onclick","");
}