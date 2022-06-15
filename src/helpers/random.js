export function getRandomIntBetween(min, max) {
	return Math.floor(Math.random() * (max - min + 1)) + min;
}

const data = [
	[
		[0, 'APPLE', 0],
		[0, 'APPLE', 0],
		[0, 'APPLE', 0],
	],
	[
		[0, 'DIAMOND', 0],
		[0, 'DIAMOND', 0],
		[0, 'DIAMOND', 0],
	],
	[
		[0, 'APPLE', 0],
		[0, 'NGON', 0],
		[0, 'ORANGE', 0],
	],
	[
		[0, 'SEP', 0],
		[0, 'WATERMELON', 0],
		[0, 'WATERMELON', 0],
	],
	[
		[0, 'WIN', 0],
		[0, 'WIN', 0],
		[0, 'WIN', 0],
	],
	[
		[0, 'LUCKYTIKI', 0],
		[0, 'LUCKYTIKI', 0],
		[0, 'LUCKYTIKI', 0],
	],
];

export function getRandomResult() {
	const randomInt = getRandomIntBetween(0, 5);
	return data[randomInt];
}

export default getRandomIntBetween;
