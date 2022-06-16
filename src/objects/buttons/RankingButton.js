import { GameObjects } from 'phaser';

const RANKING_PAGE = 'https://tiki.vn/sep/slot-machine/bang-xep-hang';
export default class RankingButton extends GameObjects.Sprite {
	constructor(scene, x, y) {
		super(scene, x, y, 'btn-ranking');
		this.scene = scene;
		this.setScale(0.5);
		this.setOrigin(0);
		scene.add.existing(this);

		this.setInteractive({
			useHandCursor: true,
		});

		this.on('pointerdown', () => {
			window.location.href = RANKING_PAGE;
		});
	}
}
