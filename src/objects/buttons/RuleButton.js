import { GameObjects } from 'phaser';

const RULE_PAGE = 'https://tiki.vn/sep/slot-machine/the-le';
export default class RuleButton extends GameObjects.Sprite {
	constructor(scene, x, y) {
		super(scene, x, y, 'btn-rule');
		this.scene = scene;
		this.setScale(0.5);
		this.setOrigin(0);
		scene.add.existing(this);

		this.setInteractive({
			useHandCursor: true,
		});

		this.on('pointerdown', () => {
			window.location.href = RULE_PAGE;
		});
	}
}
