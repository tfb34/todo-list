import removeTaskForm from './removeTaskForm';
import Todo from './todo';
//import createPriorityMenuButton from './priorityMenuButton';
import todoMenu from './todoMenu';

export default function handleNewTodo(){
    if(!validateForm()){
        console.log("not valid");
        return;
    }
    createNewTodo();
    removeTaskForm();
}


function validateForm(){
	let isValid = false;
	if(document.forms["taskForm"]["task"].value){
		isValid = true;
	}
	return isValid;
}

function createNewTodo(){
    console.log("createNewTodo");
	//get values;
	let task = document.forms["taskForm"]["task"].value;

	let sel = document.forms["taskForm"]["selectPriority"];
	let priority = sel.options[sel.selectedIndex].text;
	// for now this date value will due
	let today = new Date();
	let d = today.toDateString();
    console.log(d);
	let todo = new Todo(task, d, priority);
    console.log(todo);
	//add new element to project
    let project = projects.get(document.getElementById("project").innerHTML);
    console.log("line39");
    project.addTodo(todo);
    console.log("line41");
    updateTodoDOMList(todo);
}

function updateTodoDOMList(todo){
    console.log("updateTodoDOMList");
    /*Get identifier*/
    let project = projects.get(document.getElementById("project").innerHTML);
    let id = project.getTodos().length - 1;

    let li = document.createElement("li");
    li.setAttribute("class","clearfix todo");
    li.setAttribute("id","todo"+id);

    let div = document.createElement("div");
    div.setAttribute("class","taskStatus");
    div.setAttribute("id", "status"+id);

    let p = document.createElement("p");
    p.innerHTML = todo.getTask();

    //let f = createPriorityMenuButton();
    let b = todoMenu.createTodoMenuButton(id);
    let f = todoMenu.createTodoMenu(id);
    li.appendChild(div);
    li.appendChild(p);
    li.appendChild(b);
    li.appendChild(f);
    
    document.getElementById("list").appendChild(li);
    //add priority color
    showPriority(div,todo);
}

/*Adds color to identify level of importance*/
function showPriority(divx,todo){
    let div = divx.classList;
    let p = todo.getPriority();

    if(p === "priority 1"){
        div.add("p1Color");
    }else if(p === "priority 2"){
        div.add("p2Color");
    }else if(p === "priority 3"){
        div.add("p3Color");
    }else{
        div.add("p4Color");
    }
    console.log(div);

}
