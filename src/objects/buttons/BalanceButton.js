import { GameObjects } from 'phaser';

export default class RuleButton extends GameObjects.Sprite {
	constructor(scene, x, y) {
		super(scene, x, y, 'balance-btn-balance-deposit');
		this.scene = scene;
		this.setOrigin(0);
		this.x = x;
		this.y = y;
		this.setScale(0.5);
		this.setDepth(2);
		scene.add.existing(this);

		this.setInteractive({
			useHandCursor: true,
		});

		this.on('pointerdown', () => {
			console.log('here'); //TODO: to-remove
		});
		this._addElements();
	}

	_addElements() {
		// balance text
		this.balanceText = this.scene.add
			.text(this.x - 4, this.y + this.displayHeight / 4, '20.000', {
				fill: '#38383D',
				fontSize: 12,
				fontWeight: 500,
				lineHeight: 16,
			})
			.setOrigin(0)
			.setDepth(2);
		this.scene.balanceText = this.balanceText;

		this.balanceText.x -= this.balanceText.displayWidth;
		// asa coin
		this.asaCoin = this.scene.add
			.image(this.balanceText.x, this.y, 'balance-asa-coin')
			.setScale(1 / 3)
			.setOrigin(0.18)
			.setDepth(2);
		this.asaCoin.x -= this.asaCoin.displayWidth;
		this.scene.posAsaCoinOnBalanceWidget = this.asaCoin;
		// bg balance
		this.bgBalance = this.scene.add
			.image(this.x, this.y - 1.5, 'balance-bg')
			.setScale(0.5)
			.setOrigin(0)
			.setDepth(1);
		this.bgBalance.displayWidth = this.displayWidth + this.balanceText.displayWidth + this.asaCoin.displayWidth - 8;
		this.bgBalance.x -= this.bgBalance.displayWidth;
		this.bgBalance.x += this.displayWidth;
	}
}
