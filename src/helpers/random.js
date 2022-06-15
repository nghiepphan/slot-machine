export function getRandomIntBetween(min, max) {
	return Math.floor(Math.random() * (max - min + 1)) + min;
}

const data = [
	[
		[0, 'prize-1', 0],
		[0, 'prize-1', 0],
		[0, 'prize-1', 0],
	],
	[
		[0, 'prize-2', 0],
		[0, 'prize-2', 0],
		[0, 'prize-2', 0],
	],
	[
		[0, 'prize-3', 0],
		[0, 'prize-4', 0],
		[0, 'prize-5', 0],
	],
	[
		[0, 'prize-6', 0],
		[0, 'prize-2', 0],
		[0, 'prize-2', 0],
	],
	[
		[0, 'prize-7', 0],
		[0, 'prize-7', 0],
		[0, 'prize-7', 0],
	],
	[
		[0, 'prize-8', 0],
		[0, 'prize-8', 0],
		[0, 'prize-8', 0],
	],
];

export function getRandomResult() {
	const randomInt = getRandomIntBetween(0, 5);
	const mockResult = data[randomInt];
	console.log(
		'>>>> TODO: fetch api successfully! ==> return data: ',
		mockResult[0][1],
		' - ',
		mockResult[1][1],
		' - ',
		mockResult[2][1]
	); //TODO: to-remove
	return mockResult;
}

export default getRandomIntBetween;
