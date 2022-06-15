import { Math as PhaserMath } from 'phaser';

export default class Announcement {
	constructor(scene, x, y) {
		this.scene = scene;
		this.x = x;
		this.y = y;
		this.displayWidth = 309;
		this.displayHeight = 48;
		this.x += this.displayWidth / 2 + 25;
		this.y -= 4;
		const frame = this.scene.add.sprite(this.x, this.y, 'announcement-frame');
		frame.displayWidth = this.displayWidth;
		frame.displayHeight = this.displayHeight;

		// load data
		this._loadData();
		this._addElements();
	}

	_loadData() {
		// TODO: fetch api here
		if (this.announcements && this.announcements.length === 2) {
			this.announcements = [
				'Cici_siu_cute đã thắng 1.000 ASA',
				'Mia_toc_xanh đã thắng 100 ASA',
				'nghiep phan đã thắng 500 ASA',
				'Johny dang đã thắng 10 ASA',
				'Cici_siu_cute đã thắng 1.000 ASA',
				'Mia_toc_xanh đã thắng 100 ASA',
				'nghiep phan đã thắng 500 ASA',
				'Johny dang đã thắng 10 ASA',
				'Cici_siu_cute đã thắng 1.000 ASA',
				'Mia_toc_xanh đã thắng 100 ASA',
				'nghiep phan đã thắng 500 ASA',
				'Johny dang đã thắng 10 ASA',
			];
		} else {
			this.announcements = ['dev đã thắng 1.000 ASA', 'nghiep phan đã thắng 5 ASA'];
		}
	}

	_addElements() {
		this._addMarquee();
		this._addShadow();
		this._addSpeakerIcon();
	}

	_addShadow() {
		const shadow = this.scene.add.sprite(this.x - this.displayWidth / 2 + 36, this.y, 'announcement-shadow');
		shadow.displayWidth = shadow.width / 2;
		shadow.displayHeight = shadow.height / 2;
	}

	_addSpeakerIcon() {
		this.scene.add.sprite(this.x - this.displayWidth / 2 + 30, this.y - 2, 'announcement-ic-speaker');
	}

	_addMarquee() {
		if (!this.announcements) {
			setTimeout(() => {
				this._loadData();
			}, 1000);
		}
		const content = this.announcements.join('          ');
		const text = this.scene.add
			.text(this.x + this.displayWidth / 2, this.y - 6, content, {
				fontSize: '12px',
				color: '#DBEEFF',
				fontFamily: 'Inter',
				fontWeight: 600,
			})
			.setOrigin(0);

		const to = this.x - this.displayWidth / 2 - text.width;
		const distance = this.displayWidth + text.width;
		const speed = 50;
		const duration = (Math.sqrt(distance * distance) / speed) * 1000;
		// calculate duration
		const tween = this.scene.tweens.add({
			targets: text,
			x: to,
			duration: duration,
			ease: PhaserMath.Easing.Linear,
			onComplete: () => {
				this._loadData();
				this._addMarquee();
				text.destroy();
				tween.stop();
			},
		});

		// add mask
		const shape = this.scene.make.graphics();
		shape.fillStyle(0xffffff);
		shape.beginPath();
		shape.fillRect(this.x - this.displayWidth / 2 + 42, this.y - this.displayHeight / 2, 309 - 46, 48);
		const mask = shape.createGeometryMask();
		text.setMask(mask);
	}
}
