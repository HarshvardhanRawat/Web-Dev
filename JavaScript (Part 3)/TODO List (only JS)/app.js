let todo = [];

while(true){
    let req = prompt("please enter your request");

    if(req == "quit"){
        console.log("quiting app");
        break;
    }

    if(req == "list"){
        console.log("----------")

        for(task of todo){
            console.log(task)
        }

        console.log("----------")
    }else if(req == "add"){
        let task = prompt("please enter the task you want to add");
        todo.push(task)

        console.log("task added")
    }else if(req == "delete"){
        console.log("Please select the task you want to delete")

        for(let i = 0 ; i < todo.length ; i++){
            console.log(`task ${i} = ${todo[i]}`);
        }

        let deleteTask = prompt("Enter task number to delete");
        deleteTask = parseInt(deleteTask , 10)

        if (deleteTask >= 0 && deleteTask < todo.length) {
            todo.splice(deleteTask, 1);
            console.log("Task deleted successfully.");
        }else{
            console.log("Invalid task number.");
        }
    }
}