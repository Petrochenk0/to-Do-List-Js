tasks = [];
let promptTask;

do{
	promptTask = prompt("Введите задачу: ");

	if(!promptTask) break;

	tasks.push(promptTask);

	let message = "";

	for(let i = 0;i<tasks.lenght;i++){
		message = message + `${i + 1}. ${tasks[i]}\n`
	}

	alert("Ваш список задач:\n " + message);

}while(true);

alert("Программа завершила выполнение!");