import { GameObjects, Utils } from 'phaser';

export default class Slot extends GameObjects.Sprite {
	constructor(scene, x, y, slots, slot = null) {
		super(scene, x, y, null);
		this._init(slots, slot);
	}

	_init(slots, slot) {
		const prizes = this.scene.data.get('prizes');
		const values = prizes.map((x) => `prize-${x.id}`);
		this.setOrigin(0.5, 1);
		// this.setScale(0.85);
		this.setScale(1);
		this.slots = values;
		this.update(slot);
	}

	update(slot) {
		if (!slot) {
			slot = Utils.Array.GetRandom(this.slots);
		}
		this.setTexture(slot).setDisplaySize(72, 72);
		// this.setFrame(slot);
		// return slot;
	}
}
