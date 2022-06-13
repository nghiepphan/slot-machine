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
		this.load.image('slot-machine', `${ROOT_ASSET_URL}/slot-machine.png`);
		this.load.image('slot-machine-handle', `${ROOT_ASSET_URL}/btns/btn-spin.png`);
		this.load.image('slot-machine-handle-pressed', `${ROOT_ASSET_URL}/btns/btn-spin-pressed.png`);
		this.load.image('slot-machine-option-background', `${ROOT_ASSET_URL}/slot-machine5.png`);

		// box-shadow 2 parts
		this.load.image('reel-overlay-top', `${ROOT_ASSET_URL}/reel-overlay-top.png`);
		this.load.image('reel-overlay-bottom', `${ROOT_ASSET_URL}/reel-overlay-bottom.png`);

		for (let optionIdKey in OptionId) {
			this.load.image(optionIdKey, `${ROOT_ASSET_URL}/slot-symbols/${optionIdKey}.png`);
		}
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
