import Project from './project';
import Todo from './todo';
const isToday = require('date-fns/is_today');
/*
 * Summary: Creates a single 'projects' object to organize
 *         and keep track of 'Project' instances
 * 
*/

module.exports = (
	function(){

		let list = [new Project("Inbox"),new Project("Today"),new Project("Shopping"), new Project("Work"), new Project("Errands"), new Project("Books to Read"), new Project("Movies to Watch")];

		function add(project){
			list.push(project);
		}

		function remove(projectName){
			let index = 0;
			while(index < list.length){
				if(list[index].getName() === projectName){
					break;
				}
				index++;
			}
			list.splice(index,1);
		}

		function get(projectName){

			let x = list.filter(function(p){
				return p.getName() === projectName;
			});

			return x[0];
		}
		function last(){
			return list[list.length-1];
		}
		/*IF Local storage exists with projects*/
		
		function initialize(){
			
			while(list.length > 0){
				list.pop();
			}

			let all_projects = JSON.parse(localStorage.getItem("projects"));
			//create new project for each object in localStorage
			for(let i=0; i<all_projects.list.length;i++){
				let projectName = all_projects.list[i]._name;
				let project = new Project(projectName);
				list.push(project);
			}

			// add todos to project
			let todayProject = get("Today");
		
			for(let i = 0; i<all_projects.list.length;i++){

				let todos = all_projects.list[i]._todos;
				let project = list[i];
				if(!(project.getName() === "Today")){
				
	                for(let x=0;x<todos.length;x++){
	                	let t = todos[x];
	                	if(!t._completion){
		                	let todo = new Todo(t._task,t._dueDate,t._priority,t._completion,t._project);
		                	project.addTodo(todo);
		                	if(isToday(t._dueDate)){
	              	    		todayProject.addTodo(todo);
	              	    	}
	              	    }
	                }
            	}
			}
			
		}
       
		return{
			list,
			add,
			get,
			last,
			initialize,
			remove
		}

	}()
);
