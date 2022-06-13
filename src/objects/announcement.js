import { GameObjects } from 'phaser';

export default class Announcement extends GameObjects.Sprite {
	constructor(scene, x, y) {
		super(scene, x, y, 'ic-speaker');
		scene.add.existing(this);

		this.x += this.width + 12;
		this.y += 8;

		const results = [
			'Cici_siu_cute đã thắng 1.000 ASA',
			'Mia_toc_xanh đã thắng 100 ASA',
			'nghiep phan đã thắng 500 ASA',
			'Johny dang đã thắng 10 ASA',
		];

		const content = results.join(' ');

	}
}
