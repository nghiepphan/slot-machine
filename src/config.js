import { getOptionValueAsArray } from './option-id';

const isMobile = window.innerWidth >= 375;
const headerHeight = 76;
const screenWidth = isMobile ? window.innerWidth : 375;
const screenHeight = isMobile ? window.innerHeight : window.innerHeight - headerHeight;

const config = {
	phaser: {
		width: screenWidth,
		height: screenHeight,
		backgroundColor: '000000',
	},
	size: {
		minWidht: 800,
		minHeight: 600,
		zoom: 1,
		centerX: screenWidth / 2,
		centerY: screenHeight / 2,
		width: screenWidth,
		height: screenHeight,
		grafics: 'Big',
	},
	game: {
		spinButtonOffset: {
			// x: 298,
			// y: 195,
			x: 0,
			y: 50,
		},
		balanceTextOffsetX: -20,
		balanceTextOffsetY: 190,
		balanceCommentOffsetX: -20,
		balanceCommentOffsetY: 230,
		atlasName: 'atlas',
		sprites: {
			spinButton: 'spinButton',
			balanceBg: 'priceBG',
		},
		slots: {
			atlasName: 'atlas',
			slotsList: [...getOptionValueAsArray()],
		},
		reel: {
			// width: 220,
			width: 77,
			// height: 307,
			// height: 307,
			height: 132,
			slotsCount: 3,
			// TODO: check with condition at _move in reel component
			// speed: 20,
			speed: 9,
			// slotSize: 100,
			slotSize: 72,
		},
		machine: {
			// width: 779,
			width: 360,
			height: 376,
			reelsCount: 3,
			reelsFirstOffset: 65,
			// reelsFirstOffset: 0,
			// reelsOffset: 32.5,
			reelsOffset: 0,
			stopDelay: 10500, // ms
			reelStopDelay: 500, // ms
			atlasName: 'atlas',
			sprites: {
				bottom: 'machineBG',
				top: 'machineTop',
				right: 'cards',
				left: 'tips',
			},
		},
	},
	payTable: {
		startBalance: 500,
		switcherText: ['Pay-table', 'Close'],
		text: [
			['Pay-table:'],
			['3 CHERRY symbols on top line 2000'],
			['3 CHERRY symbols on center line 1000'],
			['3 CHERRY symbols on bottom line 4000 '],
			['3 7 symbols on any line 150'],
			['Any combination of CHERRY and 7 on any line 75'],
			['3 3xBAR symbols on any line 50'],
			['3 2xBAR symbols on any line 20'],
			['3 BAR symbols on any line 10'],
			['Combination of any BAR symbols on any line 5'],
		],
		payment: {
			combinationOf3: {
				Cherry: [4000, 1000, 2000],
				7: [150, 150, 150],
				BAR: [10, 10, 10],
				'2xBAR': [20, 20, 20],
				'3xBAR': [50, 50, 50],
			},
			onlyThisSlotsCombination: [
				[['Cherry', '7'], 75],
				[['BAR', '2xBAR', '3xBAR'], 5],
			],
		},
	},
	debugBar: {
		switcherText: ['Debug', 'Close', 'Mode', 'Random', 'Fixed'],
		width: 525,
		height: 333,
		slotSize: [153, 54],
		dropZones: [
			// offset from bottom left
			[
				[90, 182],
				[90, 116],
				[90, 49],
			],
			[
				[264, 182],
				[264, 116],
				[264, 49],
			],
			[
				[438, 182],
				[438, 116],
				[438, 49],
			],
		],
		bg: {
			atlas: 'atlas',
			sprite: 'debug',
		},
	},
	sound: {
		allow: true,
	},
};

export { config };
