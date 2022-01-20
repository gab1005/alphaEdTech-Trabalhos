const interval = 1000;

let i = 0;
let timer;
let status = false;

const timerButton = document.getElementById("timer-button");

function startTimer(){
	status = true;
	timerButton.innerHTML = "Stop";
	console.log("Timer started!");
	timer = setInterval( () => {
		i += 1;
		console.log(`tick: ${i}`);
		return false;
	},interval);
}

function stopTimer(){
	status = false;
	i = 0;
	clearInterval(timer);
	console.log("Timer stopped!");
	timerButton.innerHTML = "Start";
}

timerButton.addEventListener("click", () => {
	if(!status){
		startTimer();
	}else{
		stopTimer();
	}
});

