import { GameObjects } from 'phaser';

export default class MuteButton extends GameObjects.Sprite {
	constructor(scene, x, y) {
		super(scene, x, y, 'btn-sound-on');
		this.scene = scene;
		this.setScale(0.5);
		this.setOrigin(0);
		scene.add.existing(this);

		this.setInteractive({
			useHandCursor: true,
		});
		this.mute = scene.game.sound.mute || false;

		this.on('pointerdown', () => {
			this._toggleSound(!scene.game.sound.mute);
		});
	}

	_toggleSound(mute) {
		this.scene.game.sound.mute = mute;
		this.mute = mute;
		if (mute) {
			this.setTexture('btn-sound-off');
		} else {
			this.setTexture('btn-sound-on');
		}
	}
}
