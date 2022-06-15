import { GameObjects } from 'phaser';
import { asaValueGiftBoxMapper } from './../helpers/valueMapper';

const Depth = 9999;
const textColor = '#EBEBF0';
const highlightTextColor = '#FFD530';
export default class Popup extends GameObjects.Sprite {
	constructor(scene, x, y) {
		super(scene, x, y);
		this.scene = scene;
		scene.add.existing(this);
		this._loadData();
		this._createPopup();
	}

	// fetch api get reward here
	_loadData() {
		this.data = {
			giftImage: 'popup-gift-1000',
			title: 'Woohoo!!!',
			description: 'Bạn thuộc [X]% người cực may mắn săn được',
			asaValue: 1000,
		};
	}

	_createPopup() {
		// backdrop
		const isHighlighted = this.data.asaValue >= 1000;
		const textColor = isHighlighted ? highlightTextColor : textColor;
		this.backdrop = this.scene.add
			.rectangle(
				this.scene.game.canvas.width * 0.5,
				this.scene.game.canvas.height * 0.5,
				this.scene.game.canvas.width,
				this.scene.game.canvas.height,
				0x121212,
				0.8
			)
			.setDepth(Depth);
		// gift box
		this.box = this.scene.add
			.image(
				this.scene.game.canvas.width * 0.5,
				this.scene.game.canvas.height * 0.5 - 200,
				asaValueGiftBoxMapper[this.data.asaValue]
			)
			.setScale(0.5)
			.setDepth(Depth);

		// title
		const titleStyles = {
			x: this.scene.game.canvas.width * 0.5,
			y: this.box.y + this.box.displayHeight / 2 + 20,
		};
		this.title = this.scene.add
			.text(titleStyles.x, titleStyles.y, this.data.title, {
				fill: textColor,
				fontWeight: 700,
				lineHeight: 32,
			})
			.setOrigin(0.5)
			.setFontSize(20)
			.setDepth(Depth);

		// icon close
		const iconCloseStyles = {
			x: this.scene.game.canvas.width * 0.5 + 160,
			y: this.box.y - this.box.displayHeight / 2 + 8,
		};
		this.iconClose = this.scene.add
			.image(iconCloseStyles.x, iconCloseStyles.y, 'popup-btn-close-popup')
			.setOrigin(0.5)
			.setScale(0.5)
			.setTint('0xA7AAB1')
			.setDepth(Depth)
			.setInteractive({
				useHandCursor: true,
			})
			.on('pointerup', () => {
				this.toggleMessagePopup(false);
			});

		// description
		const descriptionStyles = {
			x: titleStyles.x,
			y: titleStyles.y + 40 + 4,
		};
		this.description = this.scene.add
			.text(descriptionStyles.x, descriptionStyles.y, this.data.description, {
				fill: textColor,
				fontSize: 16,
				fontWeight: 500,
				lineHeight: 24,
				align: 'center',
				lineSpacing: 8,
			})
			.setOrigin(0.5)
			.setDepth(Depth)
			.setWordWrapWidth(343);

		// asa coin
		const hasAsaCoin = this.data.asaValue > 0;
		const asaValueStyles = {
			x: descriptionStyles.x + (hasAsaCoin ? -20 : 0),
			y: descriptionStyles.y + 54,
		};
		if (hasAsaCoin) {
			this.asaValue = this.scene.add
				.text(asaValueStyles.x, asaValueStyles.y, `+${this.data.asaValue}`, {
					fill: textColor,
					fontSize: 28,
					fontWeight: 600,
					lineHeight: 40,
					align: 'center',
				})
				.setOrigin(0.5)
				.setDepth(Depth)
				.setWordWrapWidth(343);
		}
		const asaIconStyles = {
			x: this.scene.game.canvas.width * 0.5 + this.asaValue.width / 2,
			y: descriptionStyles.y + 54,
		};
		if (hasAsaCoin) {
			this.asaIcon = this.scene.add
				.image(asaIconStyles.x, asaIconStyles.y, 'popup-asa-coin')
				.setDepth(Depth)
				.setScale(0.5);
		}

		// button submit
		const buttonSubmitStyles = {
			x: this.scene.game.canvas.width * 0.5,
			y: asaIconStyles.y + 60,
		};
		this.buttonSubmit = this.scene.add
			.image(buttonSubmitStyles.x, buttonSubmitStyles.y, 'popup-btn-next-game')
			.setScale(0.5)
			.setDepth(Depth)
			.setInteractive({
				useHandCursor: true,
			})
			.on('pointerup', (e) => {
				this.toggleMessagePopup(false);
			});

		this.toggleMessagePopup(false);
	}

	toggleMessagePopup(show = false) {
		this.backdrop.setVisible(show);
		this.box.setVisible(show);
		this.title.setVisible(show);
		this.iconClose.setVisible(show);
		this.description.setVisible(show);
		this.asaValue.setVisible(show);
		this.asaIcon.setVisible(show);
		this.buttonSubmit.setVisible(show);
		if (show) {
			this.scene.add.tween({
				targets: [this.title, this.description, this.asaValue],
				scaleX: 1,
				scaleY: 1,
				callbackScope: this,
				duration: 500,
				ease: Phaser.Math.Easing.Quadratic.Out,
			});
			this.scene.add.tween({
				targets: [this.box, this.asaIcon, this.buttonSubmit],
				scaleX: 0.5,
				scaleY: 0.5,
				callbackScope: this,
				duration: 500,
				ease: Phaser.Math.Easing.Quadratic.Out,
			});
		} else {
			this.scene.add.tween({
				targets: [this.box, this.title, this.description, this.asaValue, this.asaIcon, this.buttonSubmit],
				scaleX: 0,
				scaleY: 0,
				callbackScope: this,
				duration: 1000,
			});
		}
	}
}
