tasks = [];
let promptTask;
console.time("time1")
do{
	promptTask = prompt("Введите задачу: ");
	console.info(`promptTask: ${promptTask}`)
	if(!promptTask) break;

	tasks.push(promptTask);

	let message = "";
	
	for(let i = 0;i<tasks.lenght;i++){
		message = message + `${i + 1}. ${tasks[i]}\n`
	}
	
	alert("Ваш список задач:\n " + message);

}while(true);
console.time("time1");
alert("Программа завершила выполнение!");

console.table(tasks);
