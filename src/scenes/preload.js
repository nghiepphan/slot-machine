import { Scene } from 'phaser';
import { config } from '../config';
import { OptionId } from './../option-id';

const ROOT_ASSET_URL = './assets';
export default class PreloadScene extends Scene {
	constructor() {
		super({ key: 'Preload' });
	}

	preload() {
		this.load.atlas('atlas', `./assets/${config.size.grafics}.png`, `./assets/${config.size.grafics}.json`);
		this.load.bitmapFont('freedom', './assets/font.png', './assets/font.fnt');

		// load assets
		this.load.image('background', `${ROOT_ASSET_URL}/background.png`);
		this.load.image('bg-asa-coin-blur', `${ROOT_ASSET_URL}/background/asa-coin-blur.png`);
		this.load.image('bg-asa-coin', `${ROOT_ASSET_URL}/background/asa-coin.png`);
		this.load.image('bg-tiki-ball', `${ROOT_ASSET_URL}/background/tiki-ball.png`);

		this.load.image('slot-machine', `${ROOT_ASSET_URL}/slot-machine.png`);
		this.load.image('slot-machine-handle', `${ROOT_ASSET_URL}/btns/btn-spin.png`);
		this.load.image('slot-machine-handle-pressed', `${ROOT_ASSET_URL}/btns/btn-spin-pressed.png`);
		this.load.image('slot-machine-option-background', `${ROOT_ASSET_URL}/slot-machine5.png`);

		// box-shadow 2 parts
		this.load.image('reel-overlay-top', `${ROOT_ASSET_URL}/reel-overlay-top.png`);
		this.load.image('reel-overlay-bottom', `${ROOT_ASSET_URL}/reel-overlay-bottom.png`);

		// announcement
		this.load.image('announcement-ic-speaker', `${ROOT_ASSET_URL}/announcements/speaker.png`);
		this.load.image('announcement-frame', `${ROOT_ASSET_URL}/announcements/announcement-frame.png`);
		this.load.image('announcement-shadow', `${ROOT_ASSET_URL}/announcements/announcement-shadow.png`);

		// load symbols
		for (let optionIdKey in OptionId) {
			this.load.image(optionIdKey, 'https://salt.tikicdn.com/ts/ta/82/27/65/bee563ba965e42f2e49d168072c0fa3c.png');
		}

		// load music
		this.load.audio('music-click-spin', `${ROOT_ASSET_URL}/music/spin.wav`);
		this.load.audio('music-playing', `${ROOT_ASSET_URL}/music/playing.wav`);
	}

	init() {
		this.logo = this.add.image(config.size.centerX, config.size.centerY, 'logo');

		this.tweens.add({
			targets: this.logo,
			scaleX: '-=.01',
			scaleY: '-=.01',
			ease: 'Linear',
			duration: 300,
			repeat: -1,
			yoyo: true,
		});
	}

	create() {
		this.scene.start('Game');
	}
}
