import { GameObjects } from 'phaser';

export default class Button extends GameObjects.Sprite {
	constructor(scene, x, y) {
		super(scene, x, y, 'slot-machine-handle');
		this.scene = scene;

		scene.add.existing(this);

		this.setInteractive({
			useHandCursor: true,
		});
		this.disabled = false;

		this.on('pointerdown', () => {
			this._setPressedButton();
		});
		this.on('pointerout', () => {
			this.setScale(1);
		});

		scene.input.on('pointerup', () => {
			this.setScale(1);
		});
	}

	_setPressedButton() {
		if (this.disabled == false) {
			this.setTexture('slot-machine-handle-pressed');
			setTimeout(() => {
				this.setTexture('slot-machine-handle');
			}, 11000);
		}
	}

	disable() {
		// this.setTint('0x464646');
		this.disabled = true;
	}

	enable() {
		// this.clearTint();
		this.disabled = false;
	}
}
