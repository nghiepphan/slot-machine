import { GameObjects } from 'phaser';

export default class Button extends GameObjects.Sprite {
	constructor(scene, x, y, atlas, sprite) {
		// super(scene, x, y, atlas, sprite)
		super(scene, x, y, 'slot-machine-handle', sprite);

		scene.add.existing(this);

		this.setInteractive();
		this.disabled = false;

		this.on('pointerdown', () => {
			if (this.disabled) {
				this.setScale(0.95);
			}
		});
		this.on('pointerout', () => {
			this.setScale(1);
		});

		scene.input.on('pointerup', () => {
			this.setTexture('slot-machine-handle-pressed');
			this.setScale(1);
			setTimeout(() => {
				this.setTexture('slot-machine-handle');
			}, 100);
		});
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
