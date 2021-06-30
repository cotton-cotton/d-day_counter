/** @format */

const clock = document.querySelector("#clock");

function getTime() {
	const christmas = new Date("2021-12-24:00:00:00+0900");
	const currentDate = new Date();
	const gap = christmas - currentDate;
	const day = Math.floor(gap / (1000 * 60 * 60 * 24));
	const hours = Math.floor((gap / (1000 * 60 * 60)) % 24);
	const minutes = Math.floor(((gap / 1000) * 60) % 60);
	const seconds = Math.floor((gap / 1000) % 60);

	clock.innerText = `-${day} day ${hours}hr ${minutes}min ${seconds}s`;
}

function init() {
	getTime();
	setInterval(getTime, 1000);
}
init();
